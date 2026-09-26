import React, { useState, useEffect } from 'react';
import { OfficialExam, StudentProfile, ExamQuestion } from '../types';
import { api } from '../services/api';
import { getAllExams } from '../data/curriculum';
import { Trophy, Clock, CheckCircle2, AlertCircle, ArrowLeft, ArrowRight, Award, RotateCcw, FileText, Check, X } from 'lucide-react';

interface ExamViewerProps {
  examId: string;
  student: StudentProfile;
  onExamCompleted: (updatedProfile: StudentProfile) => void;
  onBackToDashboard: () => void;
}

export const ExamViewer: React.FC<ExamViewerProps> = ({
  examId,
  student,
  onExamCompleted,
  onBackToDashboard,
}) => {
  const allExams = getAllExams();
  const currentExam = allExams.find(e => e.id === examId) || allExams[0];

  const [examStarted, setExamStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(currentExam.timeLimitMinutes * 60);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ score: number; maxScore: number; percentage: number } | null>(null);

  // Check if exam was already taken
  const existingResult = student.examResults?.[currentExam.id];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (examStarted && !isSubmitted && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [examStarted, isSubmitted, timeRemaining]);

  const handleSubmitExam = async () => {
    if (isSubmitted || submitting) return;
    setSubmitting(true);

    let totalScore = 0;
    const maxScore = currentExam.totalMarks;

    currentExam.questions.forEach(q => {
      const userAns = answers[q.id];
      if (userAns && String(userAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase()) {
        totalScore += q.points;
      }
    });

    try {
      const res = await api.submitExam(currentExam.id, totalScore, maxScore, answers);
      setResult({ score: totalScore, maxScore, percentage: res.percentage });
      setIsSubmitted(true);
      onExamCompleted(res.session);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  // Group questions with passages if any
  const passagesFound: Array<{ id: string; title: string; text: string }> = [];
  currentExam.questions.forEach(q => {
    if (q.passage && !passagesFound.some(p => p.text === q.passage)) {
      passagesFound.push({
        id: q.id,
        title: q.sectionTitleFr || 'Document de Lecture',
        text: q.passage,
      });
    }
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-right">
      
      {/* Top Breadcrumb & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#EF4135] font-fr mb-1 uppercase tracking-wider">
            <div className="french-flag-badge">
              <span />
              <span />
              <span />
            </div>
            <span>Évaluation Officielle · {currentExam.totalMarks} Points</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-[#0B1F3A] font-ar-display">
            {currentExam.titleAr}
          </h1>
          <div className="text-xs font-semibold text-slate-500 font-fr">
            {currentExam.title} · {currentExam.academicYear}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {examStarted && !isSubmitted && (
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-xl text-xs font-bold text-amber-950 font-mono">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
            </div>
          )}

          <button
            onClick={onBackToDashboard}
            className="px-4 py-2 border border-slate-200 bg-white hover:bg-[#FAF8F5] text-[#0B1F3A] font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <ArrowRight className="w-4 h-4" />
            <span>رجوع للرئيسية</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {!examStarted && !existingResult ? (
        <div className="bg-white/95 rounded-3xl border border-slate-200/90 p-8 text-center space-y-6 max-w-xl mx-auto shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#0055A4]/10 text-[#0055A4] flex items-center justify-center mx-auto shadow-2xs">
            <FileText className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              تعليمات الامتحان الرسمي المعتمد
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-ar">
              هذا الامتحان يحاكي بدقة ورقة الامتحان الأصلية للفصل الدراسي الأول، مقسم إلى وثائق وتدريبات قواعد ومواقف بدرجة كلية <strong className="text-[#0055A4]">({currentExam.totalMarks} درجة)</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-[#FAF8F5] border border-slate-200 rounded-2xl">
              <div className="text-slate-400 font-bold mb-1">المدة المحددة</div>
              <div className="font-bold text-[#0B1F3A] font-mono">{currentExam.timeLimitMinutes} دقيقة</div>
            </div>
            <div className="p-3 bg-[#FAF8F5] border border-slate-200 rounded-2xl">
              <div className="text-slate-400 font-bold mb-1">الدرجة الكلية</div>
              <div className="font-bold text-[#0055A4] font-mono">{currentExam.totalMarks} درجة</div>
            </div>
          </div>

          <button
            onClick={() => setExamStarted(true)}
            className="w-full py-3.5 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-2xl text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <Trophy className="w-4 h-4 text-amber-300" />
            <span>بدء الامتحان الآن</span>
          </button>
        </div>
      ) : isSubmitted || existingResult ? (
        /* Results Summary Screen */
        <div className="bg-white/95 rounded-3xl border border-slate-200/90 p-8 text-center space-y-6 max-w-xl mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              نتيجة الامتحان الرسمي
            </h2>
            <div className="text-4xl font-black text-[#0055A4] font-mono">
              {result ? result.score : existingResult?.score} / {currentExam.totalMarks}
            </div>
            <div className="text-xs font-bold text-slate-500 font-ar">
              نسبة التحصيل: <span className="font-mono text-[#0B1F3A]">{result ? result.percentage : existingResult?.percentage}%</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={() => {
                setExamStarted(true);
                setIsSubmitted(false);
                setAnswers({});
                setTimeRemaining(currentExam.timeLimitMinutes * 60);
              }}
              className="px-5 py-2.5 bg-[#FAF8F5] hover:bg-slate-100 text-[#0B1F3A] font-bold rounded-xl text-xs transition-colors border border-slate-200 cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة المحاولة</span>
            </button>

            <button
              onClick={onBackToDashboard}
              className="px-6 py-2.5 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-xs"
            >
              العودة للرئيسية
            </button>
          </div>
        </div>
      ) : (
        /* Active Exam Paper */
        <div className="space-y-8">
          
          {/* Reading Documents Section if present */}
          {passagesFound.length > 0 && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-[#EF4135] font-fr uppercase tracking-wider">
                1. Documents de Lecture · وثائق القراءة الأصلية
              </div>
              {passagesFound.map((doc, idx) => (
                <div key={doc.id} className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-xs font-bold text-[#0055A4] font-fr uppercase">Document {idx + 1}</span>
                    <span className="text-xs font-semibold text-slate-400 font-fr">{doc.title}</span>
                  </div>
                  <div className="text-sm font-serif italic text-slate-900 leading-relaxed font-fr p-3 bg-[#FAF8F5] rounded-2xl border border-slate-100" dir="ltr">
                    {doc.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Exam Questions Section */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-[#EF4135] font-fr uppercase tracking-wider">
              2. Questions de l'Examen · أسئلة الامتحان
            </div>

            {currentExam.questions.map((q, idx) => {
              const currentAns = answers[q.id] || '';

              return (
                <div key={q.id} className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-4 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#0B1F3A]">سؤال {idx + 1}</span>
                      <span className="text-xs text-slate-400 mr-2">· {q.instructionAr || q.instructionFr}</span>
                    </div>
                    <span className="text-xs font-bold text-[#0055A4] font-mono bg-[#0055A4]/5 px-2.5 py-0.5 rounded-full">
                      {q.points} {q.points === 1 ? 'درجة' : 'درجات'}
                    </span>
                  </div>

                  <div className="text-sm font-bold text-[#0B1F3A] font-fr" dir="ltr">
                    {q.prompt}
                  </div>

                  {q.type === 'mcq' && q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1" dir="ltr">
                      {q.options.map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setAnswers(prev => ({ ...prev, [q.id]: opt }))}
                          className={`p-3 rounded-2xl border text-xs font-fr font-semibold text-left transition-all cursor-pointer ${
                            currentAns === opt
                              ? 'bg-[#0055A4] border-[#0055A4] text-white shadow-xs'
                              : 'bg-[#FAF8F5] border-slate-200 hover:border-[#0055A4] text-slate-800'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {q.type === 'true_false' && (
                    <div className="flex items-center gap-3 pt-1" dir="ltr">
                      {['Vrai', 'Faux'].map(val => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setAnswers(prev => ({ ...prev, [q.id]: val }))}
                          className={`flex-1 py-3 rounded-2xl border text-xs font-fr font-bold transition-all cursor-pointer ${
                            currentAns === val
                              ? 'bg-[#0055A4] border-[#0055A4] text-white shadow-xs'
                              : 'bg-[#FAF8F5] border-slate-200 hover:border-[#0055A4] text-slate-800'
                          }`}
                        >
                          {val === 'Vrai' ? '✓ Vrai (صح)' : '✗ Faux (خطأ)'}
                        </button>
                      ))}
                    </div>
                  )}

                  {(q.type === 'fill' || q.type === 'production' || q.type === 'transform') && (
                    <div className="pt-1">
                      <input
                        type="text"
                        value={currentAns}
                        onChange={(e) => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                        placeholder="اكتب الإجابة باللغة الفرنسية..."
                        dir="ltr"
                        className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 bg-[#FAF8F5] text-xs font-fr focus:outline-none focus:border-[#0055A4]"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Exam Button */}
          <div className="pt-4">
            <button
              onClick={handleSubmitExam}
              disabled={submitting}
              className="w-full py-4 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-2xl text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              <span>{submitting ? 'جارِ تسليم الامتحان وتصحيحه...' : 'تسليم الامتحان واعتماد النتيجة'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
