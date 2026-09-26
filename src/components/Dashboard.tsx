import React from 'react';
import { StudentProfile } from '../types';
import { curriculum, getAllLessons } from '../data/curriculum';
import { Play, Flame, Trophy, Award, AlertTriangle, BookOpen, Sparkles, Compass, Target, GraduationCap, ChevronLeft, ArrowRight, CheckCircle2, ChevronDown, Check } from 'lucide-react';

interface DashboardProps {
  student: StudentProfile;
  onStartLesson: (lessonId: string) => void;
  onOpenExam: (examId: string) => void;
  onOpenErrorBank: () => void;
  onOpenVocab: () => void;
  onOpenRoadmap: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  student,
  onStartLesson,
  onOpenExam,
  onOpenErrorBank,
  onOpenVocab,
  onOpenRoadmap,
}) => {
  const allLessons = getAllLessons();
  const totalLessonsCount = allLessons.length;
  const completedCount = student.completedLessons?.length || 0;
  const overallPercentage = Math.min(100, Math.round((completedCount / totalLessonsCount) * 100));

  // Find resume lesson
  const resumeLesson = allLessons.find(l => l.id === student.lastActiveLessonId) || allLessons[0];
  const unresolvedErrors = student.errorBank?.filter(e => !e.resolved) || [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* ============================================================ */}
      {/* 1. HERO VISUAL COMPOSITION & BRAND STATEMENT */}
      {/* ============================================================ */}
      <section className="relative pt-6 pb-4 text-center space-y-8">
        
        {/* French Official Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/90 backdrop-blur-md border border-[#0055A4]/15 rounded-full text-xs font-semibold text-[#0B1F3A] shadow-xs">
          <div className="french-flag-badge shrink-0" title="Drapeau Français">
            <span />
            <span />
            <span />
          </div>
          <span className="font-fr font-bold tracking-widest uppercase text-[11px] text-[#0055A4]">
            Plateforme Officielle de Français
          </span>
          <span className="text-slate-300">·</span>
          <span className="font-ar text-[11px] text-slate-600">الصف الثالث الإعدادي</span>
        </div>

        {/* HERO BRAND STATEMENT (CENTERPIECE OF THE VISUAL COMPOSITION) */}
        <div className="space-y-2 select-none">
          {/* Main Title: BIENVENUE 3 */}
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#0B1F3A] font-fr-title uppercase drop-shadow-xs">
              BIENVENUE
            </h1>
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#EF4135] font-fr-title">
              3
            </span>
          </div>

          {/* Subtitle: AVEC MONSIEUR SAID */}
          <div className="relative inline-block">
            <div className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-widest text-[#0055A4] font-fr uppercase">
              AVEC MONSIEUR SAID
            </div>

            {/* Premium French Tricolor Fine Brush / Ribbon Accent */}
            <div className="mt-2.5 mx-auto w-44 sm:w-64 h-[3px] rounded-full overflow-hidden flex shadow-2xs">
              <span className="w-1/3 h-full bg-[#0055A4]" />
              <span className="w-1/3 h-full bg-white border-y border-[#0055A4]/20" />
              <span className="w-1/3 h-full bg-[#EF4135]" />
            </div>
          </div>
        </div>

        {/* Personalized Student Greeting & Editorial Intro */}
        <div className="max-w-2xl mx-auto space-y-3 pt-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-ar flex items-center justify-center gap-2">
            <span className="font-fr text-[#0055A4]">Bonjour,</span>
            <span className="text-[#0B1F3A]">{student.studentName}!</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-ar">
            رحلتك التفاعلية الممتعة لإتقان اللغة الفرنسية وفق الكتاب المدرسي المعتمد: نصوص قراءة ناطقة، تأسيس متين للقواعد، بنك أخطاء لتصفير نقاط الضعف، وامتحانات رسمية.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onStartLesson(resumeLesson.id)}
            className="px-7 py-3.5 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-2xl text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-3 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="w-6 h-6 rounded-full bg-white text-[#0055A4] flex items-center justify-center">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span className="font-ar">متابعة التعلم: {resumeLesson.titleAr}</span>
          </button>

          <button
            onClick={onOpenRoadmap}
            className="px-6 py-3.5 bg-white/90 hover:bg-white text-[#0B1F3A] font-semibold rounded-2xl text-sm transition-all border border-[#0055A4]/20 shadow-xs hover:border-[#0055A4]/50 flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#0055A4]" />
            <span className="font-ar">استعراض خريطة المنهج</span>
          </button>
        </div>

        {/* ============================================================ */}
        {/* 2. KEY ACADEMIC METRICS (4 Clean Cards with Tricolor Accents) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-right max-w-5xl mx-auto">
          
          {/* Metric 1: Overall Progress */}
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#0055A4]/50 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#0055A4]/10 text-[#0055A4] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-700">إنجاز المنهج</span>
              </div>
              <span className="text-sm font-bold text-[#0055A4] font-mono tabular-nums">{overallPercentage}%</span>
            </div>
            <div className="w-full bg-[#FAF8F5] rounded-full h-2 overflow-hidden mb-2.5 border border-slate-200">
              <div
                className="bg-gradient-to-r from-[#0055A4] to-[#0077E6] h-full rounded-full transition-all duration-500"
                style={{ width: `${overallPercentage}%` }}
              />
            </div>
            <div className="text-xs text-slate-500 font-medium">
              أتممت <strong className="text-[#0B1F3A] font-mono">{completedCount}</strong> من أصل <strong className="text-slate-800 font-mono">{totalLessonsCount}</strong> دروس
            </div>
          </div>

          {/* Metric 2: XP Points */}
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-300 transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>
                <span className="text-xs font-bold text-slate-700">نقاط التميز (XP)</span>
              </div>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">خبرة</span>
            </div>
            <div className="text-2xl font-black text-[#0B1F3A] font-mono tabular-nums mb-1">
              {student.xp} <span className="text-xs font-semibold text-slate-500">نقطة</span>
            </div>
            <div className="text-xs text-slate-500">
              تكتسب مع كل تدريب وتحدٍ مكتمل
            </div>
          </div>

          {/* Metric 3: Daily Streak */}
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-orange-300 transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-700">الحماس الدراسي</span>
              </div>
              <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">مستمر</span>
            </div>
            <div className="text-2xl font-black text-[#0B1F3A] font-mono tabular-nums mb-1">
              {student.dailyStreak} <span className="text-xs font-semibold text-slate-500">أيام متتالية</span>
            </div>
            <div className="text-xs text-slate-500">
              الممارسة اليومية تثبت النطق والقواعد
            </div>
          </div>

          {/* Metric 4: Error Bank */}
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#EF4135]/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#EF4135] flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-700">بنك الأخطاء</span>
              </div>
              <span className="text-[10px] font-bold text-[#EF4135] bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">مراجعة</span>
            </div>
            <div className="text-2xl font-black text-[#EF4135] font-mono tabular-nums mb-1">
              {unresolvedErrors.length} <span className="text-xs font-semibold text-slate-500">نقاط للتصفير</span>
            </div>
            <button
              onClick={onOpenErrorBank}
              className="text-xs font-bold text-[#EF4135] hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>راجع أخطاءك وحلها الآن</span>
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. DAILY MISSION / ACADEMIC FOCUS BANNER */}
        {/* ============================================================ */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-white via-[#FAF8F5] to-white border border-[#0055A4]/20 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5 max-w-5xl mx-auto text-right">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0055A4] text-white flex items-center justify-center shrink-0 shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#EF4135] font-fr">
                  MISSION DU JOUR · تحدي اليوم
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-amber-700 font-bold font-mono">+50 XP</span>
              </div>
              <div className="font-bold text-[#0B1F3A] text-sm sm:text-base">
                إتقان زمن الماضي المركب (Le Passé Composé) وقاعدة الـ 14 فعلًا مع Être
              </div>
              <div className="text-xs text-slate-500">
                تدريب تفاعلي مركز لتثبيت تصريفات الأفعال وتطابق اسم المفعول
              </div>
            </div>
          </div>

          <button
            onClick={() => onStartLesson('rev-passe-compose')}
            className="px-5 py-2.5 bg-[#0055A4] hover:bg-[#004080] text-white text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shrink-0 shadow-xs flex items-center gap-2"
          >
            <Target className="w-4 h-4 text-amber-300" />
            <span>خوض التحدي اليومي</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. COURSE JOURNEY (CONTINUOUS FRENCH CANVAS TIMELINE) */}
      {/* ============================================================ */}
      <section className="relative space-y-10 pt-4">
        
        {/* Journey Section Header */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-[#0055A4]/15 rounded-full text-[11px] font-bold text-[#0055A4] font-fr uppercase tracking-wider">
            LE VOYAGE D'APPRENTISSAGE
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
            رحلة المنهج الدراسي · محطات التعلم
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium font-ar">
            مسار تعليمي متكامل ينقلك خطوة بخطوة من النصوص الأصلية إلى الامتحانات الرسمية
          </p>
        </div>

        {/* Continuous Timeline Container with Minimal Tricolor Track */}
        <div className="relative">
          
          {/* Subtle Central Tricolor Trail (Desktop) */}
          <div className="hidden lg:block absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[3px] rounded-full pointer-events-none opacity-40 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-[#0055A4] via-[#EF4135] to-[#0055A4]" />
          </div>

          {/* Staggered Journey Stations */}
          <div className="space-y-12">
            {curriculum.map((unit, index) => {
              const unitLessons = unit.lessons;
              const unitCompleted = unitLessons.filter(l => student.completedLessons?.includes(l.id)).length;
              const unitPercent = Math.round((unitCompleted / unitLessons.length) * 100);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={unit.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Station Timeline Pin / Node (Center Anchor) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#0055A4] shadow-md items-center justify-center z-10">
                    <span className="text-sm font-black text-[#0055A4] font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Station Card Content */}
                  <div className={`w-full lg:w-[calc(50%-40px)] ${isEven ? 'lg:text-right' : 'lg:text-right'}`}>
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 hover:border-[#0055A4]/60 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all space-y-5 text-right relative overflow-hidden group">
                      
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-slate-200 flex items-center justify-center text-2xl shadow-2xs group-hover:scale-105 transition-transform">
                            {unit.badgeIcon}
                          </div>
                          <div>
                            <span className="text-[11px] font-bold text-[#EF4135] font-fr tracking-wider uppercase block">
                              {unit.titleFr}
                            </span>
                            <h3 className="text-lg font-bold text-[#0B1F3A] group-hover:text-[#0055A4] transition-colors">
                              {unit.titleAr}
                            </h3>
                          </div>
                        </div>

                        <div className="text-left">
                          <span className="text-xs font-bold text-[#0055A4] font-mono bg-[#0055A4]/5 px-2.5 py-1 rounded-xl border border-[#0055A4]/15">
                            {unitCompleted}/{unitLessons.length} منجز
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-500 leading-relaxed font-ar">
                        {unit.descriptionAr}
                      </p>

                      {/* Progress Bar */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">
                          <span>نسبة إنجاز الوحدة</span>
                          <span className="font-mono font-bold text-[#0B1F3A]">{unitPercent}%</span>
                        </div>
                        <div className="w-full bg-[#FAF8F5] rounded-full h-2 overflow-hidden border border-slate-200">
                          <div
                            className="bg-gradient-to-r from-[#0055A4] to-[#0077E6] h-full rounded-full transition-all duration-500"
                            style={{ width: `${unitPercent}%` }}
                          />
                        </div>
                      </div>

                      {/* Lessons List Preview (Clean 1-Line Items) */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="text-[11px] font-bold text-slate-400">دروس هذه المحطة:</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {unit.lessons.map((lesson) => {
                            const isDone = student.completedLessons?.includes(lesson.id);
                            return (
                              <button
                                key={lesson.id}
                                onClick={() => onStartLesson(lesson.id)}
                                className={`p-2.5 rounded-xl border text-right transition-all flex items-center justify-between text-xs cursor-pointer ${
                                  isDone
                                    ? 'bg-emerald-50/70 border-emerald-200/80 text-emerald-900'
                                    : 'bg-[#FAF8F5] border-slate-200 hover:border-[#0055A4] text-slate-700'
                                }`}
                              >
                                <span className="font-semibold truncate max-w-[170px]">{lesson.titleAr}</span>
                                {isDone ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                ) : (
                                  <ChevronLeft className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Station Exam CTA Button */}
                      {unit.exam && (
                        <div className="pt-2">
                          <button
                            onClick={() => onOpenExam(unit.exam!.id)}
                            className="w-full py-2.5 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs group/exam"
                          >
                            <Trophy className="w-3.5 h-3.5 text-amber-300 group-hover/exam:rotate-12 transition-transform" />
                            <span>دخول {unit.exam.titleAr} (20 درجة)</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Staggering */}
                  <div className="hidden lg:block w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. BADGES & ACADEMIC ACHIEVEMENTS */}
      {/* ============================================================ */}
      <section className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0055A4] text-white flex items-center justify-center shadow-xs">
              <Award className="w-5 h-5 text-amber-300" />
            </div>
            <div className="text-right">
              <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A]">
                أوسمة وإنجازات التميز
              </h3>
              <p className="text-xs text-slate-500">
                أوسمة شرفية تمنح للطالب عند إتمام المحطات والتحديات
              </p>
            </div>
          </div>
          
          <div className="text-left">
            <span className="text-xs font-bold text-[#0055A4] font-mono bg-[#0055A4]/5 px-3 py-1.5 rounded-xl border border-[#0055A4]/15">
              {student.badges?.length || 0} أوسمة مفتوحة
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {student.badges && student.badges.map(badge => (
            <div
              key={badge.id}
              className="p-4 rounded-2xl border border-slate-200 bg-gradient-to-b from-[#FAF8F5] to-white text-right space-y-2 hover:border-[#0055A4]/40 transition-colors shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-2xl shadow-2xs">
                {badge.icon}
              </div>
              <div className="text-xs font-bold text-[#0B1F3A]">{badge.name}</div>
              <div className="text-[11px] text-slate-500 leading-tight">{badge.description}</div>
            </div>
          ))}

          {(!student.badges || student.badges.length < 4) && (
            <div className="p-4 rounded-2xl border border-dashed border-slate-200 bg-[#FAF8F5]/50 text-center flex flex-col items-center justify-center text-slate-400 min-h-[120px]">
              <div className="text-2xl mb-1.5 opacity-60">🔒</div>
              <div className="text-xs font-bold text-slate-600">وسام قادم</div>
              <div className="text-[10px] text-slate-400">أكمل المزيد من المحطات لفتحه</div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
