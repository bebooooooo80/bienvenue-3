import React, { useState, useEffect } from 'react';
import { Lesson, Question, StageType, StudentProfile } from '../types';
import { speakFrench } from '../utils/speech';
import { api } from '../services/api';
import { getNextLesson } from '../data/curriculum';
import { OriginalBookletPage } from './OriginalBookletPage';
import { ReadingAssistant } from './ReadingAssistant';
import {
  Volume2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Trophy,
  Star,
  Clock,
  RotateCcw,
  BookOpen,
  Eye,
  PenTool,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

interface LessonViewerProps {
  lesson: Lesson;
  student: StudentProfile;
  onLessonCompleted: (updatedProfile: StudentProfile) => void;
  onNextLesson: (lessonId: string) => void;
  onBackToRoadmap: () => void;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  lesson,
  student,
  onLessonCompleted,
  onNextLesson,
  onBackToRoadmap,
}) => {
  const [currentStage, setCurrentStage] = useState<StageType>('comprendre');

  // Stage 3 (Pratiquer) State
  const [practiseAnswers, setPractiseAnswers] = useState<Record<string, string>>({});
  const [practiseChecked, setPractiseChecked] = useState<Record<string, boolean>>({});
  const [practiseHints, setPractiseHints] = useState<Record<string, boolean>>({});

  // Stage 5 (Défi) State
  const [defiAnswers, setDefiAnswers] = useState<Record<string, string>>({});
  const [defiStarted, setDefiStarted] = useState(false);
  const [defiTimeRemaining, setDefiTimeRemaining] = useState(lesson.stages.defi.timeLimitSeconds || 60);
  const [defiSubmitted, setDefiSubmitted] = useState(false);
  const [defiScore, setDefiScore] = useState(0);
  const [earnedStars, setEarnedStars] = useState(0);
  const [savingProgress, setSavingProgress] = useState(false);

  const nextLesson = getNextLesson(lesson.id);

  // Timer for Défi
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (defiStarted && !defiSubmitted && defiTimeRemaining > 0) {
      timer = setInterval(() => {
        setDefiTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            submitDefi();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [defiStarted, defiSubmitted, defiTimeRemaining]);

  // Handle Practice Question Answer
  const handleCheckPracticeQuestion = async (q: Question) => {
    const userAnswer = practiseAnswers[q.id];
    if (!userAnswer) return;

    const isCorrect = String(userAnswer).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
    
    setPractiseChecked(prev => ({ ...prev, [q.id]: true }));

    if (!isCorrect) {
      // Auto-record in server Error Bank
      await api.recordError({
        lessonId: lesson.id,
        lessonTitle: `${lesson.titleAr} (${lesson.title})`,
        question: q.prompt,
        studentAnswer: userAnswer,
        correctAnswer: String(q.correctAnswer),
        explanation: q.explanation,
      });
    }
  };

  // Submit Défi & Save Progress on Server
  const submitDefi = async () => {
    if (defiSubmitted) return;
    setDefiSubmitted(true);

    const questions = lesson.stages.defi.challengeQuestions;
    let correct = 0;

    questions.forEach(q => {
      const ans = defiAnswers[q.id];
      if (ans && String(ans).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase()) {
        correct++;
      } else {
        api.recordError({
          lessonId: lesson.id,
          lessonTitle: `${lesson.titleAr} (${lesson.title})`,
          question: q.prompt,
          studentAnswer: ans || 'لم تتم الإجابة',
          correctAnswer: String(q.correctAnswer),
          explanation: q.explanation,
        });
      }
    });

    const max = questions.length;
    const scorePct = (correct / max) * 100;
    let stars = 1;
    if (scorePct >= 80) stars = 3;
    else if (scorePct >= 50) stars = 2;

    setDefiScore(correct);
    setEarnedStars(stars);
    setSavingProgress(true);

    try {
      const res = await api.completeLesson(lesson.id, correct, max, stars);
      onLessonCompleted(res.session);
    } catch (e) {
      console.error('Failed to complete lesson on backend:', e);
    } finally {
      setSavingProgress(false);
    }
  };

  const stagesList: Array<{ id: StageType; num: string; label: string; icon: React.ReactNode }> = [
    { id: 'comprendre', num: '1', label: 'افهمها', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'exemple', num: '2', label: 'شوف مثال', icon: <Eye className="w-4 h-4" /> },
    { id: 'pratiquer', num: '3', label: 'جرب', icon: <PenTool className="w-4 h-4" /> },
    { id: 'corriger', num: '4', label: 'صحح غلطك', icon: <RotateCcw className="w-4 h-4" /> },
    { id: 'defi', num: '5', label: 'التحدي', icon: <Trophy className="w-4 h-4 text-amber-500" /> },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <span className="text-[#0055A4] font-bold">{lesson.unitTitleAr}</span>
            <span>·</span>
            <span className="font-fr text-slate-600">{lesson.unitTitle}</span>
            <span>·</span>
            <span className="text-[#EF4135] font-bold font-mono">{lesson.bookletPages}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-[#0B1F3A] font-ar-display">
            {lesson.titleAr}
          </h1>
          <div className="text-xs font-semibold text-slate-600 font-fr">
            {lesson.title} · {lesson.subtitleFr}
          </div>
        </div>

        <button
          onClick={onBackToRoadmap}
          className="self-start sm:self-auto px-4 py-2 border border-slate-200 bg-white hover:bg-[#FAF8F5] text-[#0B1F3A] font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
        >
          <ArrowRight className="w-4 h-4" />
          <span>رجوع للخريطة</span>
        </button>
      </div>

      {/* 5-Stage Stepper Navigation Bar */}
      <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-2xl border border-slate-200/90 shadow-xs grid grid-cols-5 gap-1 sm:gap-2">
        {stagesList.map((stage) => {
          const isActive = currentStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setCurrentStage(stage.id)}
              className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-[#0055A4] text-white shadow-xs'
                  : 'text-slate-600 hover:bg-[#0055A4]/10 hover:text-[#0055A4]'
              }`}
            >
              <span className="shrink-0">{stage.icon}</span>
              <span className="hidden sm:inline font-mono text-[11px] opacity-75">{stage.num}.</span>
              <span>{stage.label}</span>
            </button>
          );
        })}
      </div>

      {/* STAGE 1: افهمها (Comprendre) */}
      {currentStage === 'comprendre' && (
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-8 shadow-xs">
          
          {/* Section Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#0055A4]/10 text-[#0055A4] flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B1F3A]">
                المرحلة الأولى: {lesson.stages.comprendre.titleAr}
              </h2>
              <p className="text-xs text-slate-500">
                دراسة الوثيقة الأصلية والمفاهيم الأساسية بالعربية والفرنسية
              </p>
            </div>
          </div>

          {/* 1. If Reading Passage: Show Original Book Page & Interactive Reading Assistant */}
          {lesson.readingPassage && (
            <div className="space-y-6">
              <OriginalBookletPage
                pageNumber={lesson.readingPassage.imagePageNumber}
                unitTitleFr={lesson.unitTitle}
                lessonTitleFr={lesson.title}
              />
              <ReadingAssistant passage={lesson.readingPassage} />
            </div>
          )}

          {/* Summary */}
          <div className="p-4 sm:p-5 bg-[#FAF8F5] border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {lesson.stages.comprendre.summaryAr}
          </div>

          {/* Grammar Points & Rules */}
          <div className="space-y-6">
            {lesson.stages.comprendre.grammarPoints.map((point, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-sm font-bold text-[#0B1F3A] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4135]" />
                  <span>{point.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-fr">
                  {point.ruleAr}
                </p>

                {point.details && point.details.length > 0 && (
                  <ul className="space-y-1.5 pr-4 border-r-2 border-[#0055A4]/30 text-xs sm:text-sm text-slate-700 font-fr">
                    {point.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0055A4] font-bold">▪</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {point.table && (
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 my-3 shadow-2xs">
                    <table className="min-w-full divide-y divide-slate-200 text-right text-xs">
                      <thead className="bg-[#FAF8F5] text-[#0B1F3A] font-bold">
                        <tr>
                          {point.table.headers.map((h, i) => (
                            <th key={i} className="px-4 py-3">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white font-fr">
                        {point.table.rows.map((row, i) => (
                          <tr key={i} className="hover:bg-blue-50/30">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-2.5 text-slate-800">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={() => setCurrentStage('exemple')}
              className="px-5 py-2.5 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>المرحلة التالية: شوف مثال</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STAGE 2: شوف مثال (Exemple) */}
      {currentStage === 'exemple' && (
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#0055A4]/10 text-[#0055A4] flex items-center justify-center shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B1F3A]">
                المرحلة الثانية: {lesson.stages.exemple.titleAr}
              </h2>
              <p className="text-xs text-slate-500">
                أمثلة تطبيقية واضحة مع الاستماع للنطق الصوتي الفرنسي الصحيح
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {lesson.stages.exemple.examples.map((ex, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 bg-[#FAF8F5]/60 hover:bg-white hover:border-[#0055A4]/40 transition-all space-y-2 text-right"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 font-mono">مثال {idx + 1}</span>
                  <button
                    onClick={() => speakFrench(ex.french)}
                    className="px-2.5 py-1 bg-[#0055A4]/10 hover:bg-[#0055A4]/20 text-[#0055A4] rounded-lg text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer border border-[#0055A4]/20"
                    title="استمع للنطق الفرنسي"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span className="text-[11px]">نطق</span>
                  </button>
                </div>

                <div className="text-base font-bold text-[#0B1F3A] font-fr">
                  {ex.french}
                </div>

                <div className="text-xs sm:text-sm font-semibold text-slate-700 font-ar">
                  {ex.arabic}
                </div>

                {ex.note && (
                  <div className="text-[11px] text-[#0055A4] bg-[#0055A4]/5 p-2.5 rounded-xl font-fr border border-[#0055A4]/15">
                    💡 {ex.note}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-between">
            <button
              onClick={() => setCurrentStage('comprendre')}
              className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-[#0B1F3A] font-semibold rounded-xl text-xs transition-colors cursor-pointer"
            >
              السابق
            </button>
            <button
              onClick={() => setCurrentStage('pratiquer')}
              className="px-5 py-2.5 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>المرحلة التالية: جرب بنفسك</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STAGE 3: جرب (Pratiquer) */}
      {currentStage === 'pratiquer' && (
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
              <PenTool className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B1F3A]">
                المرحلة الثالثة: {lesson.stages.pratiquer.titleAr}
              </h2>
              <p className="text-xs text-slate-500">
                تدريبات تفاعلية أصلية من الكتاب مع تصحيح فوري وتلميحات ذكية
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {lesson.stages.pratiquer.questions.map((q, idx) => {
              const checked = practiseChecked[q.id];
              const userAnswer = practiseAnswers[q.id];
              const isCorrect = checked && String(userAnswer).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
              const showHint = practiseHints[q.id];

              return (
                <div
                  key={q.id}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all space-y-4 text-right ${
                    checked
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/40'
                        : 'border-rose-300 bg-rose-50/40'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0B1F3A] font-mono">
                      السؤال {idx + 1}
                    </span>
                    <span className="text-xs text-slate-500">{q.instruction}</span>
                  </div>

                  <div className="text-sm sm:text-base font-bold text-[#0B1F3A] font-fr" dir="ltr">
                    {q.prompt}
                  </div>

                  {/* Options */}
                  {q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" dir="ltr">
                      {q.options.map((opt) => {
                        const isSelected = userAnswer === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            disabled={checked}
                            onClick={() => setPractiseAnswers(prev => ({ ...prev, [q.id]: opt }))}
                            className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-semibold transition-all text-left font-fr cursor-pointer ${
                              isSelected
                                ? 'border-[#0055A4] bg-[#0055A4] text-white font-bold shadow-xs'
                                : 'border-slate-200 hover:border-slate-400 bg-white text-slate-800'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Question Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    {!checked ? (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleCheckPracticeQuestion(q)}
                          disabled={!userAnswer}
                          className="px-4 py-2 bg-[#0055A4] hover:bg-[#004080] disabled:bg-slate-300 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-xs"
                        >
                          تحقق من الإجابة
                        </button>
                        <button
                          type="button"
                          onClick={() => setPractiseHints(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                          className="px-3 py-2 text-amber-800 hover:bg-amber-50 rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>تلميح</span>
                        </button>
                      </div>
                    ) : (
                      <div className="w-full space-y-2">
                        <div className="flex items-center gap-2">
                          {isCorrect ? (
                            <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>إجابة صحيحة وممتازة! أحسنت 👏</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 text-[#EF4135] font-bold text-xs">
                              <XCircle className="w-4 h-4 text-[#EF4135]" />
                              <span>إجابة غير دقيقة · الإجابة الصحيحة هي: <strong className="font-fr">{String(q.correctAnswer)}</strong></span>
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium leading-relaxed font-ar">
                          💡 <strong>التفسير والقاعدة:</strong> {q.explanation}
                        </div>
                      </div>
                    )}
                  </div>

                  {showHint && !checked && (
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-ar">
                      💡 <strong>تلميح:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-between">
            <button
              onClick={() => setCurrentStage('exemple')}
              className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-[#0B1F3A] font-semibold rounded-xl text-xs transition-colors cursor-pointer"
            >
              السابق
            </button>
            <button
              onClick={() => setCurrentStage('corriger')}
              className="px-5 py-2.5 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>المرحلة التالية: صحح غلطك</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STAGE 4: صحح غلطك (Corriger) */}
      {currentStage === 'corriger' && (
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#EF4135] flex items-center justify-center shrink-0 border border-rose-200">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0B1F3A]">
                المرحلة الرابعة: {lesson.stages.corriger.titleAr}
              </h2>
              <p className="text-xs text-slate-500">
                تحليل الأخطاء الشائعة وحفظ نقاط الضعف في بنك الأخطاء التفاعلي
              </p>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              أخطاء متكررة يقع فيها الطلاب في الامتحانات:
            </h3>

            {lesson.stages.corriger.commonMistakes.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-rose-200 bg-rose-50/40 space-y-2 text-right"
              >
                <div className="text-xs text-[#EF4135] font-bold">
                  ❌ <strong>الخطأ الشائع:</strong> {m.mistake}
                </div>
                <div className="text-xs text-emerald-800 font-bold">
                  ✅ <strong>التصحيح السليم:</strong> {m.correction}
                </div>
                <div className="text-[11px] text-slate-600 font-ar">
                  💡 <strong>السبب:</strong> {m.why}
                </div>
              </div>
            ))}
          </div>

          {/* Remedial Question */}
          {lesson.stages.corriger.remedialQuestions && lesson.stages.corriger.remedialQuestions.length > 0 && (
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h3 className="text-xs font-bold text-[#0B1F3A]">
                سؤال علاجي وتثبيتي:
              </h3>
              {lesson.stages.corriger.remedialQuestions.map(q => (
                <div key={q.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 text-right space-y-3">
                  <div className="text-xs text-slate-500">{q.instruction}</div>
                  <div className="text-sm font-bold text-[#0B1F3A] font-fr">{q.prompt}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-fr text-xs">
                    {q.options?.map(opt => (
                      <button
                        key={opt}
                        onClick={() => {
                          const isC = opt === q.correctAnswer;
                          alert(isC ? '✅ إجابة صحيحة تماماً!' : `❌ الإجابة الصحيحة هي: ${q.correctAnswer}`);
                        }}
                        className="p-3 bg-white border border-slate-200 hover:border-[#0055A4] rounded-xl font-semibold text-right cursor-pointer"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 flex justify-between">
            <button
              onClick={() => setCurrentStage('pratiquer')}
              className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-[#0B1F3A] font-semibold rounded-xl text-xs transition-colors cursor-pointer"
            >
              السابق
            </button>
            <button
              onClick={() => setCurrentStage('defi')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>المرحلة النهائية: خوض التحدي</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STAGE 5: التحدي (Le Défi) */}
      {currentStage === 'defi' && (
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#0B1F3A]">
                  المرحلة الخامسة: {lesson.stages.defi.titleAr}
                </h2>
                <p className="text-xs text-slate-500">
                  اختبر سرعتك ودقتك لإنهاء الدرس وحصد النجوم ونقاط الخبرة XP
                </p>
              </div>
            </div>

            {defiStarted && !defiSubmitted && (
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-xl text-xs font-bold text-amber-950 font-mono">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>{defiTimeRemaining} ثانية</span>
              </div>
            )}
          </div>

          {!defiStarted ? (
            <div className="text-center py-8 space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0B1F3A]">
                هل أنت مستعد للتحدي السريع؟
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-ar">
                يحتوي التحدي على أسئلة محددة بوقت ({lesson.stages.defi.timeLimitSeconds} ثانية). عند الإجابة الصحيحة ستحصل على نجوم التميز وتفتح الدروس التالية.
              </p>
              <button
                onClick={() => setDefiStarted(true)}
                className="px-6 py-3 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-2xl text-sm transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 mx-auto"
              >
                <Trophy className="w-4 h-4 text-amber-300" />
                <span>ابدأ التحدي الآن</span>
              </button>
            </div>
          ) : !defiSubmitted ? (
            <div className="space-y-6">
              {lesson.stages.defi.challengeQuestions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-2xl border border-slate-200 bg-[#FAF8F5] space-y-3 text-right">
                  <div className="text-xs font-bold text-[#0B1F3A]">
                    سؤال التحدي {idx + 1}: {q.instruction}
                  </div>
                  <div className="text-sm font-bold text-[#0B1F3A] font-fr" dir="ltr">
                    {q.prompt}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-fr text-xs" dir="ltr">
                    {q.options?.map(opt => {
                      const isSel = defiAnswers[q.id] === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setDefiAnswers(prev => ({ ...prev, [q.id]: opt }))}
                          className={`p-3 rounded-xl border font-semibold transition-colors text-left cursor-pointer ${
                            isSel
                              ? 'bg-[#0055A4] text-white border-[#0055A4] font-bold'
                              : 'bg-white border-slate-200 hover:border-slate-400 text-slate-800'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={submitDefi}
                  className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-xs"
                >
                  تسليم إجابات التحدي
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-5 max-w-lg mx-auto">
              <div className="flex justify-center gap-2 text-3xl">
                {[1, 2, 3].map(s => (
                  <Star
                    key={s}
                    className={`w-8 h-8 ${s <= earnedStars ? 'text-amber-500 fill-amber-500' : 'text-slate-200'}`}
                  />
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#0B1F3A] font-display">
                {earnedStars === 3 ? 'أداء أسطوري! أحسنت صنعاً 🌟' : 'عمل ممتاز! تم إنهاء الدرس بنجاح'}
              </h3>

              <p className="text-xs text-slate-600 font-ar">
                أحرزت <strong className="text-[#0055A4] font-mono">{defiScore}</strong> من أصل <strong className="text-slate-900 font-mono">{lesson.stages.defi.challengeQuestions.length}</strong> في التحدي.
                تم حفظ تقدمك وإضافة نقاط التميز إلى سجلك بالخادم.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {nextLesson && (
                  <button
                    onClick={() => onNextLesson(nextLesson.id)}
                    className="px-5 py-2.5 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>الدرس التالي: {nextLesson.titleAr}</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={onBackToRoadmap}
                  className="px-4 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-[#0B1F3A] font-semibold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  العودة لخريطة المنهج
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
