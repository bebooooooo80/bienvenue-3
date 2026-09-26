import React, { useState } from 'react';
import { ErrorBankItem, StudentProfile } from '../types';
import { api } from '../services/api';
import { AlertCircle, CheckCircle2, RotateCcw, Sparkles, BookOpen, Trash2, ArrowLeft, ShieldCheck, Check } from 'lucide-react';

interface ErrorBankViewProps {
  student: StudentProfile;
  onUpdateProfile: (session: StudentProfile) => void;
  onGoToLesson: (lessonId: string) => void;
}

export const ErrorBankView: React.FC<ErrorBankViewProps> = ({
  student,
  onUpdateProfile,
  onGoToLesson,
}) => {
  const [filter, setFilter] = useState<'unresolved' | 'all'>('unresolved');
  const [activeTestError, setActiveTestError] = useState<ErrorBankItem | null>(null);
  const [testInput, setTestInput] = useState('');
  const [testResult, setTestResult] = useState<{ checked: boolean; isCorrect: boolean } | null>(null);
  const [resolvingId, setResolvingId] = useState<string | null>(null);

  const errors = student.errorBank || [];
  const displayErrors = filter === 'unresolved'
    ? errors.filter(e => !e.resolved)
    : errors;

  const handleResolve = async (errorId: string) => {
    setResolvingId(errorId);
    try {
      await api.resolveError(errorId);
      const updated = {
        ...student,
        xp: student.xp + 15,
        errorBank: student.errorBank.map(e => e.id === errorId ? { ...e, resolved: true } : e),
      };
      onUpdateProfile(updated);
    } catch (e) {
      console.error(e);
    } finally {
      setResolvingId(null);
      setActiveTestError(null);
      setTestResult(null);
      setTestInput('');
    }
  };

  const handleCheckTest = (item: ErrorBankItem) => {
    const isCorrect = testInput.trim().toLowerCase() === item.correctAnswer.trim().toLowerCase();
    setTestResult({ checked: true, isCorrect });
    if (isCorrect) {
      setTimeout(() => {
        handleResolve(item.id);
      }, 1200);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#EF4135] font-fr mb-1 uppercase tracking-wider">
            <div className="french-flag-badge">
              <span />
              <span />
              <span />
            </div>
            <span>Remédiation & Banque d'Erreurs · BIENVENUE 3</span>
          </div>
          <h1 className="text-2xl font-black text-[#0B1F3A] font-ar-display flex items-center gap-2">
            <span>بنك الأخطاء الذكي للطالب</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            يجمع تلقائياً أي سؤال أخطأت فيه لتراجعه وتصححه وتكسب نقاط خبرة إضافية (+15 XP)
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-2xl self-start sm:self-auto shadow-2xs">
          <button
            onClick={() => setFilter('unresolved')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'unresolved'
                ? 'bg-[#EF4135] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            أخطاء تحتاج لتصحيح ({errors.filter(e => !e.resolved).length})
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#0055A4] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            جميع السجلات ({errors.length})
          </button>
        </div>
      </div>

      {/* Main Errors List */}
      {displayErrors.length === 0 ? (
        <div className="text-center py-16 bg-white/95 rounded-3xl border border-slate-200 p-8 space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#0B1F3A]">
            {filter === 'unresolved' ? 'رائع جداً! لا توجد أخطاء معلقة حالياً' : 'سجل الأخطاء فارغ'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            استمر في حل تدريبات الدروس والامتحانات، وسيتم حفظ أي نقطة تحتاج لمراجعة تلقائياً هنا.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {displayErrors.map(item => {
            const isTestingThis = activeTestError?.id === item.id;

            return (
              <div
                key={item.id}
                className={`p-5 sm:p-6 rounded-3xl border transition-all text-right space-y-4 ${
                  item.resolved
                    ? 'bg-white/70 border-slate-200 opacity-80'
                    : 'bg-white border-rose-200/90 shadow-2xs hover:border-[#EF4135]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0B1F3A]">{item.lessonTitle}</span>
                  </div>
                  {item.resolved ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>تم تصحيحه وتصفيره</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#EF4135] bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>نقطة تحتاج لمعالجة (+15 XP)</span>
                    </span>
                  )}
                </div>

                {/* Question Details */}
                <div className="space-y-2">
                  <div className="text-xs text-slate-400 font-bold">السؤال:</div>
                  <div className="text-base font-bold text-[#0B1F3A] font-fr" dir="ltr">
                    {item.question}
                  </div>
                </div>

                {/* Answers Diff */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-rose-50/70 border border-rose-200/80 text-xs space-y-1">
                    <span className="text-rose-700 font-bold">إجابتك السابقة:</span>
                    <div className="font-mono text-rose-950 font-bold" dir="ltr">{item.studentAnswer}</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-xs space-y-1">
                    <span className="text-emerald-700 font-bold">الإجابة الصحيحة المعتمدة:</span>
                    <div className="font-mono text-emerald-950 font-bold" dir="ltr">{item.correctAnswer}</div>
                  </div>
                </div>

                {item.explanation && (
                  <div className="p-3.5 rounded-2xl bg-[#0055A4]/5 border border-[#0055A4]/15 text-xs text-slate-700 leading-relaxed font-ar">
                    <strong className="text-[#0055A4]">الشرح والتوضيح:</strong> {item.explanation}
                  </div>
                )}

                {/* Action Buttons */}
                {!item.resolved && !isTestingThis && (
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setActiveTestError(item);
                        setTestInput('');
                        setTestResult(null);
                      }}
                      className="px-4 py-2 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>اختبر نفسك في هذا السؤال الآن</span>
                    </button>

                    <button
                      onClick={() => handleResolve(item.id)}
                      disabled={resolvingId === item.id}
                      className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{resolvingId === item.id ? 'جارِ المعالجة...' : 'تأكيد الفهم وتصفير الخطأ (+15 XP)'}</span>
                    </button>
                  </div>
                )}

                {/* Inline Quick Test Area */}
                {isTestingThis && (
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#0055A4]/30 space-y-3 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-xs font-bold text-[#0055A4]">
                      أعد كتابة الإجابة الصحيحة لتأكيد استيعاب القاعدة:
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={testInput}
                        onChange={(e) => setTestInput(e.target.value)}
                        placeholder="اكتب الإجابة بالفرنسية..."
                        dir="ltr"
                        className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-sm font-fr focus:outline-none focus:border-[#0055A4]"
                        onKeyDown={(e) => e.key === 'Enter' && handleCheckTest(item)}
                      />
                      <button
                        onClick={() => handleCheckTest(item)}
                        className="px-4 py-2 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                      >
                        تحقق
                      </button>
                      <button
                        onClick={() => setActiveTestError(null)}
                        className="px-3 py-2 text-slate-500 hover:text-slate-800 text-xs font-bold cursor-pointer"
                      >
                        إلغاء
                      </button>
                    </div>

                    {testResult?.checked && (
                      <div className={`p-2.5 rounded-xl text-xs font-bold ${
                        testResult.isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {testResult.isCorrect ? 'ممتاز! إجابة صحيحة، جارِ التصفير وإضافة +15 XP...' : 'إجابة غير دقيقة، حاول مرة أخرى أو راجع الشرح.'}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
