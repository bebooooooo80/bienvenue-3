import React from 'react';
import { curriculum } from '../data/curriculum';
import { StudentProfile } from '../types';
import { CheckCircle2, Star, Trophy, Compass, ChevronLeft, ArrowLeft } from 'lucide-react';

interface CurriculumRoadmapProps {
  student: StudentProfile;
  onSelectLesson: (lessonId: string) => void;
  onSelectExam: (examId: string) => void;
}

export const CurriculumRoadmap: React.FC<CurriculumRoadmapProps> = ({
  student,
  onSelectLesson,
  onSelectExam,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-right">
      
      {/* Header */}
      <div className="pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2 text-xs font-bold text-[#EF4135] font-fr mb-1 uppercase tracking-wider">
          <div className="french-flag-badge">
            <span />
            <span />
            <span />
          </div>
          <span>Parcours Pédagogique · BIENVENUE 3</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] font-ar-display">
          خريطة رحلة المنهج الدراسي
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          منهج الصف الثالث الإعدادي (الفصل الدراسي الأول) مرتباً بالتسلسل الدقيق للكتاب المدرسي المعتمد
        </p>
      </div>

      {/* Units Map */}
      <div className="space-y-10">
        {curriculum.map((unit, unitIdx) => {
          const unitCompletedCount = unit.lessons.filter(l => student.completedLessons?.includes(l.id)).length;

          return (
            <div key={unit.id} className="space-y-4">
              
              {/* Unit Header Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#0055A4] via-[#004080] to-[#0B1F3A] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md border border-[#0055A4]/30 relative overflow-hidden">
                
                {/* Background Number */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-7xl font-black text-white/5 font-mono pointer-events-none select-none">
                  0{unitIdx + 1}
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl border border-white/15 shrink-0 shadow-xs">
                    {unit.badgeIcon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-blue-200 font-fr tracking-wider uppercase">
                      {unit.titleFr}
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-white font-ar">
                      {unit.titleAr}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto relative z-10">
                  <span className="text-xs font-mono font-bold bg-white/20 px-3.5 py-1.5 rounded-xl text-blue-100 border border-white/20">
                    {unitCompletedCount}/{unit.lessons.length} منجز
                  </span>
                </div>
              </div>

              {/* Lessons List in this Unit */}
              <div className="grid grid-cols-1 gap-3">
                {unit.lessons.map((lesson, idx) => {
                  const isCompleted = student.completedLessons?.includes(lesson.id);
                  const scoreInfo = student.lessonScores?.[lesson.id];
                  const isCurrent = student.lastActiveLessonId === lesson.id;

                  return (
                    <div
                      key={lesson.id}
                      onClick={() => onSelectLesson(lesson.id)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer ${
                        isCompleted
                          ? 'bg-white/95 border-emerald-300/80 shadow-2xs hover:border-emerald-500'
                          : isCurrent
                          ? 'bg-white border-[#0055A4] ring-2 ring-[#0055A4]/15 shadow-xs'
                          : 'bg-white/90 border-slate-200 hover:border-[#0055A4]/60 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-start sm:items-center gap-3.5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                          isCompleted
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : isCurrent
                            ? 'bg-[#0055A4] text-white'
                            : 'bg-[#FAF8F5] text-slate-700 border border-slate-200'
                        }`}>
                          {isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : `${idx + 1}`}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm sm:text-base font-bold text-[#0B1F3A]">
                              {lesson.titleAr}
                            </h3>
                            <span className="text-[11px] font-semibold text-slate-400 font-mono">
                              {lesson.bookletPages}
                            </span>
                          </div>

                          <div className="text-xs text-slate-500 font-fr flex items-center gap-1.5 mt-0.5">
                            <span className="font-semibold text-slate-700">{lesson.title}</span>
                            <span>·</span>
                            <span className="text-slate-500 truncate max-w-xs">{lesson.subtitleFr}</span>
                          </div>
                        </div>
                      </div>

                      {/* Score / Stars & Action */}
                      <div className="flex items-center gap-3 self-end sm:self-auto">
                        {isCompleted && scoreInfo && (
                          <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-xl">
                            <div className="flex">
                              {[1, 2, 3].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-3.5 h-3.5 ${
                                    star <= (scoreInfo.stars || 1)
                                      ? 'text-amber-500 fill-amber-500'
                                      : 'text-slate-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs font-bold text-amber-900 font-mono mr-1">
                              {scoreInfo.score}/{scoreInfo.maxScore}
                            </span>
                          </div>
                        )}

                        <button
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                            isCompleted
                              ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                              : isCurrent
                              ? 'bg-[#0055A4] text-white hover:bg-[#004080]'
                              : 'bg-[#FAF8F5] text-slate-700 hover:bg-slate-100 border border-slate-200'
                          }`}
                        >
                          <span>{isCompleted ? 'مراجعة' : isCurrent ? 'تابع الآن' : 'بدء الدرس'}</span>
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* Unit Exam Card if present */}
                {unit.exam && (
                  <div
                    onClick={() => onSelectExam(unit.exam!.id)}
                    className="p-4 sm:p-5 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/40 hover:bg-amber-50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer shadow-2xs"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-800 font-fr">
                          {unit.exam.title}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-[#0B1F3A]">
                          {unit.exam.titleAr}
                        </h3>
                      </div>
                    </div>

                    <button className="px-4 py-2 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs">
                      <Trophy className="w-3.5 h-3.5 text-amber-300" />
                      <span>دخول الامتحان (20 درجة)</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
