import express from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Ensure data directory exists
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const CODES_FILE = path.join(DATA_DIR, 'activation_codes.json');
const PROGRESS_FILE = path.join(DATA_DIR, 'student_records.json');

// Interface for Activation Code
interface ActivationCode {
  code: string;
  status: 'unused' | 'active' | 'expired';
  studentName?: string;
  deviceId?: string;
  activatedAt?: number;
  expiresAt?: number; // 1 year from activation
}

// Interface for Student Record
interface StudentSession {
  sessionId: string;
  studentName: string;
  plan: 'trial' | 'full';
  createdAt: number;
  expiresAt: number;
  deviceId?: string;
  activationCode?: string;
  completedLessons: string[];
  lessonScores: Record<string, { score: number; maxScore: number; stars: number; date: string }>;
  examResults: Record<string, { score: number; maxScore: number; percentage: number; date: string; answers: Record<string, any> }>;
  errorBank: Array<{
    id: string;
    lessonId: string;
    lessonTitle: string;
    question: string;
    studentAnswer: string;
    correctAnswer: string;
    explanation: string;
    timestamp: number;
    resolved: boolean;
  }>;
  dailyStreak: number;
  xp: number;
  badges: Array<{ id: string; name: string; icon: string; description: string; unlockedAt: number }>;
  lastActiveLessonId?: string;
}

// In-memory + file persisted stores
let activationCodes: Record<string, ActivationCode> = {};
let studentSessions: Record<string, StudentSession> = {};

// Initialize 500 Unique Activation Codes if not present
function initActivationCodes() {
  if (fs.existsSync(CODES_FILE)) {
    try {
      const data = fs.readFileSync(CODES_FILE, 'utf-8');
      activationCodes = JSON.parse(data);
      console.log(`Loaded ${Object.keys(activationCodes).length} activation codes.`);
      return;
    } catch (err) {
      console.error('Error loading codes file, generating fresh codes:', err);
    }
  }

  // Pre-seed 500 unique codes with deterministic format: FR3-XXXX-YYYY-ZZZZ
  const generated: Record<string, ActivationCode> = {};
  
  // Seed first 10 easy-to-use demo/teacher codes for immediate testing and convenience
  const easyCodes = [
    'FR3-2025-AZHAR-01',
    'FR3-2025-AZHAR-02',
    'FR3-2025-AZHAR-03',
    'FR3-2025-AZHAR-04',
    'FR3-2025-AZHAR-05',
    'FR3-2025-PREP3-10',
    'FR3-2025-PREP3-20',
    'FR3-2025-PREP3-30',
    'FR3-2025-PREP3-40',
    'FR3-2025-PREP3-50'
  ];

  easyCodes.forEach(code => {
    generated[code] = {
      code,
      status: 'unused'
    };
  });

  // Generate the remaining 490 unique cryptographic codes
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  while (Object.keys(generated).length < 500) {
    let part1 = '';
    let part2 = '';
    let part3 = '';
    for (let i = 0; i < 4; i++) part1 += chars.charAt(Math.floor(Math.random() * chars.length));
    for (let i = 0; i < 4; i++) part2 += chars.charAt(Math.floor(Math.random() * chars.length));
    for (let i = 0; i < 4; i++) part3 += chars.charAt(Math.floor(Math.random() * chars.length));
    const code = `FR3-${part1}-${part2}-${part3}`;
    if (!generated[code]) {
      generated[code] = {
        code,
        status: 'unused'
      };
    }
  }

  activationCodes = generated;
  saveCodes();
  console.log(`Initialized 500 unique activation codes.`);
}

function saveCodes() {
  try {
    fs.writeFileSync(CODES_FILE, JSON.stringify(activationCodes, null, 2));
  } catch (e) {
    console.error('Failed to save activation codes:', e);
  }
}

function loadSessions() {
  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      const data = fs.readFileSync(PROGRESS_FILE, 'utf-8');
      studentSessions = JSON.parse(data);
      console.log(`Loaded ${Object.keys(studentSessions).length} student sessions.`);
    } catch (err) {
      console.error('Failed to load student sessions:', err);
    }
  }
}

function saveSessions() {
  try {
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(studentSessions, null, 2));
  } catch (e) {
    console.error('Failed to save student sessions:', e);
  }
}

initActivationCodes();
loadSessions();

// Helper to sanitize student session output (never expose sensitive system internals)
function formatSessionResponse(session: StudentSession) {
  const now = Date.now();
  const isExpired = now > session.expiresAt;
  const remainingMs = Math.max(0, session.expiresAt - now);

  return {
    sessionId: session.sessionId,
    studentName: session.studentName,
    plan: session.plan,
    createdAt: session.createdAt,
    expiresAt: session.expiresAt,
    remainingMs,
    remainingHours: Math.floor(remainingMs / (1000 * 60 * 60)),
    remainingMinutes: Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60)),
    isExpired,
    completedLessons: session.completedLessons || [],
    lessonScores: session.lessonScores || {},
    examResults: session.examResults || {},
    errorBank: session.errorBank || [],
    dailyStreak: session.dailyStreak || 1,
    xp: session.xp || 0,
    badges: session.badges || [],
    lastActiveLessonId: session.lastActiveLessonId || 'rev-phrase'
  };
}

// Authentication Middleware
function authenticateStudent(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'يرجى تسجيل الدخول أولاً للوصول إلى المحتوى والدروس' });
  }

  const token = authHeader.split(' ')[1];
  const session = studentSessions[token];

  if (!session) {
    return res.status(401).json({ error: 'جلسة الطالب غير صالحة أو تم تسجيل الخروج' });
  }

  const now = Date.now();
  if (now > session.expiresAt) {
    return res.status(403).json({
      error: 'انتهت صلاحية الحساب التجريبي (24 ساعة). يرجى تفعيل النسخة الكاملة بكود التفعيل للوصول إلى كافة الدروس.',
      isExpired: true,
      plan: session.plan
    });
  }

  (req as any).student = session;
  next();
}

// ---------------- API ROUTES ---------------- //

// 1. Start 24-Hour Free Trial
app.post('/api/auth/trial', (req, res) => {
  const { studentName, deviceId } = req.body;

  if (!studentName || typeof studentName !== 'string' || studentName.trim().length < 2) {
    return res.status(400).json({ error: 'يرجى إدخال اسم الطالب بشكل صحيح (حرفين على الأقل)' });
  }

  const trimmedName = studentName.trim();
  const sessionId = crypto.randomUUID();
  const now = Date.now();
  const expiresAt = now + 24 * 60 * 60 * 1000; // Exact 24 hours from server creation

  const newSession: StudentSession = {
    sessionId,
    studentName: trimmedName,
    plan: 'trial',
    createdAt: now,
    expiresAt,
    deviceId: deviceId || 'web-client',
    completedLessons: [],
    lessonScores: {},
    examResults: {},
    errorBank: [],
    dailyStreak: 1,
    xp: 50, // Welcome bonus
    badges: [
      {
        id: 'welcome',
        name: 'مرحباً بك في اللغة الفرنسية',
        icon: '🌟',
        description: 'بدء الرحلة التعليمية لمنهج 3 إعدادي',
        unlockedAt: now
      }
    ],
    lastActiveLessonId: 'rev-phrase'
  };

  studentSessions[sessionId] = newSession;
  saveSessions();

  return res.json({
    success: true,
    message: 'تم تفعيل التجربة المجانية لمدة 24 ساعة بنجاح',
    session: formatSessionResponse(newSession)
  });
});

// 2. Activate with 500 Unique Code System
app.post('/api/auth/activate', (req, res) => {
  const { studentName, code, deviceId } = req.body;

  if (!studentName || typeof studentName !== 'string' || studentName.trim().length < 2) {
    return res.status(400).json({ error: 'اسم الطالب إجباري ولا يجوز تركه فارغاً' });
  }

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'يرجى إدخال كود التفعيل المكون من الحروف والأرقام' });
  }

  const cleanCode = code.trim().toUpperCase();
  const codeRecord = activationCodes[cleanCode];

  if (!codeRecord) {
    return res.status(404).json({ error: 'كود التفعيل غير صحيح. يرجى التأكد من كتابة الكود بدقة' });
  }

  const now = Date.now();

  // If code is already activated
  if (codeRecord.status === 'active') {
    // Check if expired (1 year)
    if (codeRecord.expiresAt && now > codeRecord.expiresAt) {
      codeRecord.status = 'expired';
      saveCodes();
      return res.status(403).json({ error: 'هذا الكود انتهت فترة صلاحيته (سنة كاملة)' });
    }

    // Check device / student binding
    if (codeRecord.studentName && codeRecord.studentName !== studentName.trim()) {
      return res.status(403).json({ 
        error: `هذا الكود مفعّل مسبقاً ومقترن بالطالب (${codeRecord.studentName}). لا يمكن نقله لطالب آخر.` 
      });
    }

    // Existing active user logging back in with their code
    const sessionId = crypto.randomUUID();
    const existingSession = Object.values(studentSessions).find(
      s => s.activationCode === cleanCode
    );

    const session: StudentSession = existingSession ? {
      ...existingSession,
      sessionId
    } : {
      sessionId,
      studentName: studentName.trim(),
      plan: 'full',
      createdAt: codeRecord.activatedAt || now,
      expiresAt: codeRecord.expiresAt || (now + 365 * 24 * 60 * 60 * 1000),
      deviceId: deviceId || codeRecord.deviceId,
      activationCode: cleanCode,
      completedLessons: [],
      lessonScores: {},
      examResults: {},
      errorBank: [],
      dailyStreak: 1,
      xp: 150,
      badges: [{
        id: 'full_pass',
        name: 'الطالب المتميز (النسخة الكاملة)',
        icon: '👑',
        description: 'تم تفعيل المنهج الكامل لعام دراسي كامل',
        unlockedAt: now
      }],
      lastActiveLessonId: 'rev-phrase'
    };

    studentSessions[sessionId] = session;
    saveSessions();

    return res.json({
      success: true,
      message: 'تم استعادة حسابك الكامل بنجاح ومرحباً بك مجدداً',
      session: formatSessionResponse(session)
    });
  }

  if (codeRecord.status === 'expired') {
    return res.status(403).json({ error: 'هذا الكود منتهي الصلاحية' });
  }

  // Unused code: Activate now for 1 year (365 days)
  const oneYearFromNow = now + 365 * 24 * 60 * 60 * 1000;
  codeRecord.status = 'active';
  codeRecord.studentName = studentName.trim();
  codeRecord.deviceId = deviceId || 'web-client';
  codeRecord.activatedAt = now;
  codeRecord.expiresAt = oneYearFromNow;
  saveCodes();

  const sessionId = crypto.randomUUID();
  const session: StudentSession = {
    sessionId,
    studentName: studentName.trim(),
    plan: 'full',
    createdAt: now,
    expiresAt: oneYearFromNow,
    deviceId: deviceId || 'web-client',
    activationCode: cleanCode,
    completedLessons: [],
    lessonScores: {},
    examResults: {},
    errorBank: [],
    dailyStreak: 1,
    xp: 200,
    badges: [
      {
        id: 'welcome',
        name: 'مرحباً بك في اللغة الفرنسية',
        icon: '🌟',
        description: 'بدء الرحلة التعليمية لمنهج 3 إعدادي',
        unlockedAt: now
      },
      {
        id: 'full_pass',
        name: 'الطالب المتميز (النسخة الكاملة)',
        icon: '👑',
        description: 'تم تفعيل المنهج الكامل لعام دراسي كامل',
        unlockedAt: now
      }
    ],
    lastActiveLessonId: 'rev-phrase'
  };

  studentSessions[sessionId] = session;
  saveSessions();

  return res.json({
    success: true,
    message: 'تهانينا! تم تفعيل النسخة الكاملة للمنهج لمدة عام دراسي كامل بنجاح.',
    session: formatSessionResponse(session)
  });
});

// 3. Get Session State
app.get('/api/auth/session', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.json({ authenticated: false });
  }

  const token = authHeader.split(' ')[1];
  const session = studentSessions[token];

  if (!session) {
    return res.json({ authenticated: false });
  }

  const now = Date.now();
  const isExpired = now > session.expiresAt;

  return res.json({
    authenticated: true,
    isExpired,
    session: formatSessionResponse(session)
  });
});

// 4. Logout
app.post('/api/auth/logout', (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    delete studentSessions[token];
    saveSessions();
  }
  return res.json({ success: true });
});

// 5. Save Lesson Progress & Update XP / Badges
app.post('/api/student/lesson-complete', authenticateStudent, (req, res) => {
  const session = (req as any).student as StudentSession;
  const { lessonId, score, maxScore, stars } = req.body;

  if (!lessonId) {
    return res.status(400).json({ error: 'Missing lessonId' });
  }

  if (!session.completedLessons.includes(lessonId)) {
    session.completedLessons.push(lessonId);
  }

  const earnedXP = (score || 10) * 5 + (stars || 1) * 10;
  session.xp = (session.xp || 0) + earnedXP;

  session.lessonScores[lessonId] = {
    score: score || 0,
    maxScore: maxScore || 10,
    stars: stars || 3,
    date: new Date().toISOString()
  };

  session.lastActiveLessonId = lessonId;

  // Award milestone badges
  const totalCompleted = session.completedLessons.length;
  if (totalCompleted >= 3 && !session.badges.some(b => b.id === 'badge_3_lessons')) {
    session.badges.push({
      id: 'badge_3_lessons',
      name: 'انطلاقة قوية',
      icon: '🚀',
      description: 'أتممت 3 دروس بنجاح في المنهج',
      unlockedAt: Date.now()
    });
  }

  if (totalCompleted >= 8 && !session.badges.some(b => b.id === 'badge_halfway')) {
    session.badges.push({
      id: 'badge_halfway',
      name: 'فارس المنهج',
      icon: '🛡️',
      description: 'أتممت نصف المنهج بنجاح وتفوق',
      unlockedAt: Date.now()
    });
  }

  saveSessions();

  return res.json({
    success: true,
    earnedXP,
    session: formatSessionResponse(session)
  });
});

// 6. Add or Update Error Bank Item
app.post('/api/student/error-bank', authenticateStudent, (req, res) => {
  const session = (req as any).student as StudentSession;
  const { lessonId, lessonTitle, question, studentAnswer, correctAnswer, explanation } = req.body;

  if (!question || !correctAnswer) {
    return res.status(400).json({ error: 'Missing required error details' });
  }

  const existing = session.errorBank.find(
    e => e.question === question && e.lessonId === lessonId
  );

  if (existing) {
    existing.studentAnswer = studentAnswer;
    existing.resolved = false;
    existing.timestamp = Date.now();
  } else {
    session.errorBank.push({
      id: crypto.randomUUID(),
      lessonId: lessonId || 'general',
      lessonTitle: lessonTitle || 'درس عام',
      question,
      studentAnswer: studentAnswer || '',
      correctAnswer,
      explanation: explanation || 'راجع القاعدة في الدرس وتأكد من التطبيق الصحيح.',
      timestamp: Date.now(),
      resolved: false
    });
  }

  saveSessions();
  return res.json({ success: true, errorBank: session.errorBank });
});

// 7. Resolve Error Bank Item
app.post('/api/student/error-bank/resolve', authenticateStudent, (req, res) => {
  const session = (req as any).student as StudentSession;
  const { errorId } = req.body;

  const item = session.errorBank.find(e => e.id === errorId);
  if (item) {
    item.resolved = true;
    session.xp = (session.xp || 0) + 15;
    saveSessions();
  }

  return res.json({ success: true, errorBank: session.errorBank });
});

// 8. Submit Official Exam
app.post('/api/student/exam-submit', authenticateStudent, (req, res) => {
  const session = (req as any).student as StudentSession;
  const { examId, score, maxScore, answers } = req.body;

  if (!examId) {
    return res.status(400).json({ error: 'Missing examId' });
  }

  const percentage = Math.round(((score || 0) / (maxScore || 20)) * 100);

  session.examResults[examId] = {
    score: score || 0,
    maxScore: maxScore || 20,
    percentage,
    date: new Date().toISOString(),
    answers: answers || {}
  };

  const examXp = (score || 0) * 10 + 50;
  session.xp = (session.xp || 0) + examXp;

  if (percentage >= 85 && !session.badges.some(b => b.id === `exam_star_${examId}`)) {
    session.badges.push({
      id: `exam_star_${examId}`,
      name: 'وسام الامتياز في الاختبار',
      icon: '🏅',
      description: `حصول على درجة ${score}/${maxScore} في الامتحان الرسمي`,
      unlockedAt: Date.now()
    });
  }

  saveSessions();

  return res.json({
    success: true,
    score,
    maxScore,
    percentage,
    earnedXP: examXp,
    session: formatSessionResponse(session)
  });
});

// 9. Admin Sample Codes (strictly for teacher / testing overview - returns top 10 unused demo codes)
app.get('/api/admin/activation-sample', (req, res) => {
  const unused = Object.values(activationCodes)
    .filter(c => c.status === 'unused')
    .slice(0, 10)
    .map(c => c.code);

  const stats = {
    totalCodes: Object.keys(activationCodes).length,
    activeCodes: Object.values(activationCodes).filter(c => c.status === 'active').length,
    unusedCodes: Object.values(activationCodes).filter(c => c.status === 'unused').length,
    expiredCodes: Object.values(activationCodes).filter(c => c.status === 'expired').length,
    sampleCodes: unused
  };

  return res.json(stats);
});

// ---------------- VITE MIDDLEWARE / STATIC ASSETS ---------------- //

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`French Learning Platform Server running on port ${PORT}`);
  });
}

startServer();
