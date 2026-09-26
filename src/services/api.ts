import { StudentProfile, ErrorBankItem } from '../types';

const TOKEN_KEY = 'fr_session_token';
const LOCAL_SESSION_KEY = 'fr_local_student_profile';
const LOCAL_CODES_KEY = 'fr_local_activation_codes';

export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setStoredToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearStoredToken() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(LOCAL_SESSION_KEY);
}

// -------------------------------------------------------------
// CLIENT-SIDE FALLBACK STORE (FOR GITHUB PAGES & STATIC HOSTS)
// -------------------------------------------------------------
const SAMPLE_CODES = [
  'FR3-2025-AZHAR-01',
  'FR3-2025-AZHAR-02',
  'FR3-2025-AZHAR-03',
  'FR3-2025-AZHAR-04',
  'FR3-2025-AZHAR-05',
  'FR3-2025-AZHAR-50',
];

function getLocalProfile(): StudentProfile | null {
  try {
    const raw = localStorage.getItem(LOCAL_SESSION_KEY);
    if (!raw) return null;
    const session: StudentProfile = JSON.parse(raw);
    const now = Date.now();
    const remainingMs = Math.max(0, session.expiresAt - now);
    const isExpired = session.plan === 'trial' && remainingMs <= 0;

    return {
      ...session,
      remainingMs,
      remainingHours: Math.floor(remainingMs / (1000 * 60 * 60)),
      remainingMinutes: Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60)),
      isExpired,
    };
  } catch {
    return null;
  }
}

function saveLocalProfile(profile: StudentProfile) {
  localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify(profile));
  setStoredToken(profile.sessionId);
}

function createInitialProfile(name: string, plan: 'trial' | 'full', code?: string): StudentProfile {
  const now = Date.now();
  const expiresAt = plan === 'trial'
    ? now + 24 * 60 * 60 * 1000 // 24 hours
    : now + 365 * 24 * 60 * 60 * 1000; // 1 year

  const remainingMs = expiresAt - now;

  return {
    sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    studentName: name,
    plan,
    createdAt: now,
    expiresAt,
    remainingMs,
    remainingHours: Math.floor(remainingMs / (1000 * 60 * 60)),
    remainingMinutes: Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60)),
    isExpired: false,
    completedLessons: [],
    lessonScores: {},
    examResults: {},
    errorBank: [],
    dailyStreak: 1,
    xp: plan === 'full' ? 100 : 25,
    badges: [
      {
        id: 'welcome',
        name: 'Bienvenue à bord !',
        icon: '🇫🇷',
        description: 'انضمامك لمنصة اللغة الفرنسية الرسمية',
        unlockedAt: now,
      },
    ],
    lastActiveLessonId: 'u1-l1',
  };
}

// -------------------------------------------------------------
// UNIVERSAL API CALLER (TRIES BACKEND, FALLS BACK TO LOCAL ENGINE)
// -------------------------------------------------------------
async function request(endpoint: string, options: RequestInit = {}) {
  const token = getStoredToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error('Static host without backend API');
  }

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'حدث خطأ في الاتصال بالخادم');
  }
  return data;
}

export const api = {
  async startTrial(studentName: string): Promise<{ session: StudentProfile; message: string }> {
    try {
      const data = await request('/api/auth/trial', {
        method: 'POST',
        body: JSON.stringify({ studentName, deviceId: navigator.userAgent }),
      });
      if (data.session?.sessionId) {
        setStoredToken(data.session.sessionId);
        saveLocalProfile(data.session);
      }
      return data;
    } catch {
      // Client-side fallback for GitHub Pages
      const profile = createInitialProfile(studentName, 'trial');
      saveLocalProfile(profile);
      return {
        session: profile,
        message: 'تم تفعيل التجربة المجانية لمدة 24 ساعة بنجاح',
      };
    }
  },

  async activateCode(studentName: string, code: string): Promise<{ session: StudentProfile; message: string }> {
    try {
      const data = await request('/api/auth/activate', {
        method: 'POST',
        body: JSON.stringify({ studentName, code, deviceId: navigator.userAgent }),
      });
      if (data.session?.sessionId) {
        setStoredToken(data.session.sessionId);
        saveLocalProfile(data.session);
      }
      return data;
    } catch {
      // Client-side fallback for GitHub Pages
      const cleanCode = code.trim().toUpperCase();
      const isValidFormat = cleanCode.startsWith('FR3-') || SAMPLE_CODES.includes(cleanCode) || cleanCode.length >= 8;

      if (!isValidFormat) {
        throw new Error('كود التفعيل غير صالح. تأكد من إدخال الكود بالصيغة الصحيحة مثل FR3-2025-AZHAR-01');
      }

      const profile = createInitialProfile(studentName, 'full', cleanCode);
      saveLocalProfile(profile);
      return {
        session: profile,
        message: 'تم تفعيل النسخة الكاملة للفصل الدراسي الأول بنجاح!',
      };
    }
  },

  async checkSession(): Promise<{ authenticated: boolean; isExpired?: boolean; session?: StudentProfile }> {
    const token = getStoredToken();
    if (!token) return { authenticated: false };

    try {
      const res = await request('/api/auth/session');
      if (res.session) {
        saveLocalProfile(res.session);
      }
      return res;
    } catch {
      // Client-side fallback
      const local = getLocalProfile();
      if (!local) {
        clearStoredToken();
        return { authenticated: false };
      }
      if (local.isExpired) {
        return { authenticated: false, isExpired: true };
      }
      return { authenticated: true, session: local };
    }
  },

  async logout(): Promise<void> {
    try {
      await request('/api/auth/logout', { method: 'POST' });
    } catch {
      // ignore
    } finally {
      clearStoredToken();
    }
  },

  async completeLesson(lessonId: string, score: number, maxScore: number, stars: number): Promise<{ session: StudentProfile; earnedXP: number }> {
    try {
      return await request('/api/student/lesson-complete', {
        method: 'POST',
        body: JSON.stringify({ lessonId, score, maxScore, stars }),
      });
    } catch {
      // Client-side fallback
      const current = getLocalProfile() || createInitialProfile('الطالب', 'trial');
      const earnedXP = stars * 15 + Math.round((score / (maxScore || 1)) * 20);
      const completed = Array.from(new Set([...(current.completedLessons || []), lessonId]));

      const updated: StudentProfile = {
        ...current,
        completedLessons: completed,
        xp: current.xp + earnedXP,
        lessonScores: {
          ...current.lessonScores,
          [lessonId]: { score, maxScore, stars, date: new Date().toISOString() },
        },
        lastActiveLessonId: lessonId,
      };

      saveLocalProfile(updated);
      return { session: updated, earnedXP };
    }
  },

  async recordError(item: {
    lessonId: string;
    lessonTitle: string;
    question: string;
    studentAnswer: string;
    correctAnswer: string;
    explanation: string;
  }): Promise<void> {
    try {
      await request('/api/student/error-bank', {
        method: 'POST',
        body: JSON.stringify(item),
      });
    } catch {
      const current = getLocalProfile();
      if (!current) return;

      const newError: ErrorBankItem = {
        id: `err_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
        lessonId: item.lessonId,
        lessonTitle: item.lessonTitle,
        question: item.question,
        studentAnswer: item.studentAnswer,
        correctAnswer: item.correctAnswer,
        explanation: item.explanation,
        timestamp: Date.now(),
        resolved: false,
      };

      const existingErrors = current.errorBank || [];
      const updated: StudentProfile = {
        ...current,
        errorBank: [newError, ...existingErrors.filter(e => e.question !== item.question)],
      };
      saveLocalProfile(updated);
    }
  },

  async resolveError(errorId: string): Promise<void> {
    try {
      await request('/api/student/error-bank/resolve', {
        method: 'POST',
        body: JSON.stringify({ errorId }),
      });
    } catch {
      const current = getLocalProfile();
      if (!current) return;

      const updated: StudentProfile = {
        ...current,
        xp: current.xp + 15,
        errorBank: (current.errorBank || []).map(e => e.id === errorId ? { ...e, resolved: true } : e),
      };
      saveLocalProfile(updated);
    }
  },

  async submitExam(examId: string, score: number, maxScore: number, answers: Record<string, any>): Promise<{ session: StudentProfile; percentage: number; earnedXP: number }> {
    try {
      return await request('/api/student/exam-submit', {
        method: 'POST',
        body: JSON.stringify({ examId, score, maxScore, answers }),
      });
    } catch {
      const current = getLocalProfile() || createInitialProfile('الطالب', 'trial');
      const percentage = Math.round((score / (maxScore || 20)) * 100);
      const earnedXP = percentage >= 80 ? 100 : percentage >= 50 ? 50 : 25;

      const updated: StudentProfile = {
        ...current,
        xp: current.xp + earnedXP,
        examResults: {
          ...current.examResults,
          [examId]: { score, maxScore, percentage, date: new Date().toISOString(), answers },
        },
      };

      saveLocalProfile(updated);
      return { session: updated, percentage, earnedXP };
    }
  },

  async getAdminPreview(): Promise<{ totalCodes: number; activeCodes: number; unusedCodes: number; expiredCodes: number; sampleCodes: string[] }> {
    try {
      return await request('/api/admin/activation-sample');
    } catch {
      return {
        totalCodes: 500,
        activeCodes: 1,
        unusedCodes: 499,
        expiredCodes: 0,
        sampleCodes: SAMPLE_CODES,
      };
    }
  },
};
