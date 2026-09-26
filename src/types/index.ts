export type PlanType = 'trial' | 'full';

export interface StudentProfile {
  sessionId: string;
  studentName: string;
  plan: PlanType;
  createdAt: number;
  expiresAt: number;
  remainingMs: number;
  remainingHours: number;
  remainingMinutes: number;
  isExpired: boolean;
  completedLessons: string[];
  lessonScores: Record<string, { score: number; maxScore: number; stars: number; date: string }>;
  examResults: Record<string, { score: number; maxScore: number; percentage: number; date: string; answers: Record<string, any> }>;
  errorBank: ErrorBankItem[];
  dailyStreak: number;
  xp: number;
  badges: Badge[];
  lastActiveLessonId: string;
}

export interface ErrorBankItem {
  id: string;
  lessonId: string;
  lessonTitle: string;
  question: string;
  studentAnswer: string;
  correctAnswer: string;
  explanation: string;
  timestamp: number;
  resolved: boolean;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlockedAt: number;
}

export type StageType = 'comprendre' | 'exemple' | 'pratiquer' | 'corriger' | 'defi';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export type QuestionType =
  | 'multiple-choice'
  | 'true-false'
  | 'fill-blank'
  | 'matching'
  | 'transform'
  | 'production';

export interface Question {
  id: string;
  type: QuestionType;
  instruction: string;
  prompt: string;
  options?: string[];
  correctAnswer: string | string[] | Record<string, string>;
  matchingPairs?: Array<{ left: string; right: string }>;
  hint?: string;
  explanation: string;
  audioText?: string;
}

export interface VocabularyWord {
  id: string;
  french: string;
  arabic: string;
  category: 'masculin' | 'feminin' | 'verbe' | 'expression' | 'aliment';
  exampleFr?: string;
  exampleAr?: string;
}

export interface ReadingSentence {
  id: string;
  french: string;
  arabic: string;
}

export interface ReadingVocabItem {
  french: string;
  arabic: string;
  partOfSpeech?: string;
}

export interface ReadingPassageData {
  imageSrc: string;
  imagePageNumber: number;
  imageCaptionFr: string;
  imageCaptionAr: string;
  fullFrenchText: string;
  fullArabicTranslation: string;
  sentences: ReadingSentence[];
  keyVocabulary: ReadingVocabItem[];
}

export interface LessonStageContent {
  comprendre: {
    titleAr: string;
    summaryAr: string;
    grammarPoints: Array<{
      title: string;
      ruleAr: string;
      details?: string[];
      table?: { headers: string[]; rows: string[][] };
    }>;
  };
  exemple: {
    titleAr: string;
    descriptionAr: string;
    examples: Array<{
      french: string;
      arabic: string;
      note?: string;
      highlight?: string;
    }>;
  };
  pratiquer: {
    titleAr: string;
    descriptionAr: string;
    questions: Question[];
  };
  corriger: {
    titleAr: string;
    descriptionAr: string;
    commonMistakes: Array<{
      mistake: string;
      correction: string;
      why: string;
    }>;
    remedialQuestions: Question[];
  };
  defi: {
    titleAr: string;
    descriptionAr: string;
    timeLimitSeconds: number;
    challengeQuestions: Question[];
  };
}

export interface Lesson {
  id: string;
  unitId: string;
  unitTitle: string;
  unitTitleAr: string;
  order: number;
  title: string;
  titleAr: string;
  subtitleFr: string;
  estimatedMinutes: number;
  bookletPages: string;
  readingPassage?: ReadingPassageData;
  stages: LessonStageContent;
}

export interface ExamQuestion {
  id: string;
  section: string;
  sectionTitleFr: string;
  sectionTitleAr: string;
  instructionFr: string;
  instructionAr: string;
  passage?: string;
  type: 'mcq' | 'true_false' | 'fill' | 'production' | 'transform';
  prompt: string;
  options?: string[];
  correctAnswer: string;
  points: number;
}

export interface OfficialExam {
  id: string;
  title: string;
  titleAr: string;
  academicYear: string;
  totalMarks: number;
  timeLimitMinutes: number;
  bookletPages: string;
  questions: ExamQuestion[];
}

export interface UnitSection {
  id: string;
  order: number;
  titleFr: string;
  titleAr: string;
  descriptionAr: string;
  badgeIcon: string;
  lessons: Lesson[];
  exam?: OfficialExam;
  vocabulary: VocabularyWord[];
}
