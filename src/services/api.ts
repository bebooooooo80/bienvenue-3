import { StudentProfile } from '../types';

const TOKEN_KEY = 'fr_session_token';

export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setStoredToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearStoredToken() {
  localStorage.removeItem(TOKEN_KEY);
}

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

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'حدث خطأ في الاتصال بالخادم');
  }
  return data;
}

export const api = {
  async startTrial(studentName: string): Promise<{ session: StudentProfile; message: string }> {
    const data = await request('/api/auth/trial', {
      method: 'POST',
      body: JSON.stringify({ studentName, deviceId: navigator.userAgent }),
    });
    if (data.session?.sessionId) {
      setStoredToken(data.session.sessionId);
    }
    return data;
  },

  async activateCode(studentName: string, code: string): Promise<{ session: StudentProfile; message: string }> {
    const data = await request('/api/auth/activate', {
      method: 'POST',
      body: JSON.stringify({ studentName, code, deviceId: navigator.userAgent }),
    });
    if (data.session?.sessionId) {
      setStoredToken(data.session.sessionId);
    }
    return data;
  },

  async checkSession(): Promise<{ authenticated: boolean; isExpired?: boolean; session?: StudentProfile }> {
    const token = getStoredToken();
    if (!token) return { authenticated: false };
    try {
      return await request('/api/auth/session');
    } catch {
      clearStoredToken();
      return { authenticated: false };
    }
  },

  async logout(): Promise<void> {
    try {
      await request('/api/auth/logout', { method: 'POST' });
    } finally {
      clearStoredToken();
    }
  },

  async completeLesson(lessonId: string, score: number, maxScore: number, stars: number): Promise<{ session: StudentProfile; earnedXP: number }> {
    return await request('/api/student/lesson-complete', {
      method: 'POST',
      body: JSON.stringify({ lessonId, score, maxScore, stars }),
    });
  },

  async recordError(item: {
    lessonId: string;
    lessonTitle: string;
    question: string;
    studentAnswer: string;
    correctAnswer: string;
    explanation: string;
  }): Promise<void> {
    await request('/api/student/error-bank', {
      method: 'POST',
      body: JSON.stringify(item),
    });
  },

  async resolveError(errorId: string): Promise<void> {
    await request('/api/student/error-bank/resolve', {
      method: 'POST',
      body: JSON.stringify({ errorId }),
    });
  },

  async submitExam(examId: string, score: number, maxScore: number, answers: Record<string, any>): Promise<{ session: StudentProfile; percentage: number; earnedXP: number }> {
    return await request('/api/student/exam-submit', {
      method: 'POST',
      body: JSON.stringify({ examId, score, maxScore, answers }),
    });
  },

  async getAdminPreview(): Promise<{ totalCodes: number; activeCodes: number; unusedCodes: number; expiredCodes: number; sampleCodes: string[] }> {
    return await request('/api/admin/activation-sample');
  }
};
