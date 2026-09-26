import { revisionSection } from './revision';
import { unite1Section } from './unite1';
import { unite2Section } from './unite2';
import { Lesson, OfficialExam, UnitSection, VocabularyWord } from '../types';

export const curriculum: UnitSection[] = [
  revisionSection,
  unite1Section,
  unite2Section
];

export function getAllLessons(): Lesson[] {
  return curriculum.flatMap(unit => unit.lessons);
}

export function getLessonById(id: string): Lesson | undefined {
  return getAllLessons().find(l => l.id === id);
}

export function getAllExams(): OfficialExam[] {
  return curriculum.map(u => u.exam).filter((e): e is OfficialExam => Boolean(e));
}

export function getExamById(id: string): OfficialExam | undefined {
  return getAllExams().find(e => e.id === id);
}

export function getAllVocabulary(): VocabularyWord[] {
  return curriculum.flatMap(u => u.vocabulary);
}

export function getNextLesson(currentLessonId: string): Lesson | undefined {
  const lessons = getAllLessons();
  const index = lessons.findIndex(l => l.id === currentLessonId);
  if (index >= 0 && index < lessons.length - 1) {
    return lessons[index + 1];
  }
  return undefined;
}
