import React, { useState } from 'react';
import { api } from '../services/api';
import { StudentProfile } from '../types';
import { KeyRound, ShieldCheck, Clock, AlertCircle, Sparkles, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'choose' | 'trial' | 'activate' | 'expired';
  onSuccess: (session: StudentProfile) => void;
  onClose?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'choose',
  onSuccess,
  onClose,
}) => {
  const [mode, setMode] = useState<'choose' | 'trial' | 'activate' | 'expired'>(initialMode);
  const [studentName, setStudentName] = useState('');
  const [activationCode, setActivationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSampleCodes, setShowSampleCodes] = useState(false);

  // Sync mode with prop when opened
  React.useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setError(null);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  // Sample quick test codes (for preview / demo)
  const sampleCodes = [
    'FR3-2025-AZHAR-01',
    'FR3-2025-AZHAR-02',
    'FR3-2025-AZHAR-03',
    'FR3-2025-AZHAR-04',
    'FR3-2025-AZHAR-05',
    'FR3-2025-AZHAR-50',
  ];

  const handleStartTrial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setError('يرجى إدخال اسم الطالب لبدء التجربة المجانية');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await api.startTrial(studentName.trim());
      onSuccess(res.session);
    } catch (err: any) {
      setError(err.message || 'حدث خطأ أثناء بدء التجربة');
    } finally {
      setLoading(false);
    }
  };

  const handleActivate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setError('يرجى إدخال اسم الطالب');
      return;
    }
    if (!activationCode.trim()) {
      setError('يرجى إدخال كود التفعيل');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await api.activateCode(studentName.trim(), activationCode.trim());
      onSuccess(res.session);
    } catch (err: any) {
      setError(err.message || 'كود التفعيل غير صالح أو مستخدم بالفعل');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/80 backdrop-blur-md">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 overflow-hidden relative text-right">
        
        {/* Header with French Flag Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0055A4]/10 text-[#0055A4] mb-3 border border-[#0055A4]/20 shadow-2xs">
            <KeyRound className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <div className="french-flag-badge">
              <span />
              <span />
              <span />
            </div>
            <span className="text-xs font-bold text-[#EF4135] font-fr tracking-wider uppercase">
              BIENVENUE 3 · Plateforme Officielle
            </span>
          </div>
          <h2 className="text-xl font-bold text-[#0B1F3A]">
            {mode === 'expired'
              ? 'انتهت فترة التجربة المجانية'
              : 'منصة اللغة الفرنسية · 3 إعدادي'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            French Learning Platform · 3ème année préparatoire
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Mode: Expired */}
        {mode === 'expired' && (
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-950 leading-relaxed font-ar">
              <div className="font-bold mb-1 flex items-center gap-1.5 text-amber-900">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>انتهت صلاحية التجربة المجانية (24 ساعة)</span>
              </div>
              لقد انتهت فترة المعاينة المجانية. للاستمرار في دراسة كافة وحدات المنهج وحل التدريبات والامتحانات الرسمية وبنك الأخطاء، يرجى تفعيل النسخة الكاملة بكود التفعيل الخاص بك.
            </div>

            <button
              onClick={() => setMode('activate')}
              className="w-full py-3.5 bg-[#EF4135] hover:bg-rose-700 text-white font-bold rounded-2xl text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <KeyRound className="w-4 h-4" />
              <span>تفعيل النسخة الكاملة بكود الاشتراك</span>
            </button>
          </div>
        )}

        {/* Mode: Choose */}
        {mode === 'choose' && (
          <div className="space-y-3">
            <button
              onClick={() => setMode('trial')}
              className="w-full p-4 rounded-2xl border-2 border-[#0055A4]/30 hover:border-[#0055A4] bg-[#FAF8F5] hover:bg-white text-right transition-all cursor-pointer group shadow-2xs"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-[#0B1F3A] group-hover:text-[#0055A4] text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>بدء تجربة مجانية فورية</span>
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-mono">
                  24 ساعة مجاناً
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-ar">
                ادخل اسمك فقط وعاين جميع الميزات ونصوص القراءة وشروحات القواعد والامتحانات.
              </p>
            </button>

            <button
              onClick={() => setMode('activate')}
              className="w-full p-4 rounded-2xl border-2 border-[#EF4135]/30 hover:border-[#EF4135] bg-[#FAF8F5] hover:bg-white text-right transition-all cursor-pointer group shadow-2xs"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-[#0B1F3A] group-hover:text-[#EF4135] text-sm flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-[#EF4135]" />
                  <span>تفعيل بكود الاشتراك</span>
                </span>
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                  دائم للفصل الأول
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-ar">
                إذا كان لديك كود تفعيل معتمد، أدخله هنا لفتح المنصة بشكل كامل ودائم.
              </p>
            </button>
          </div>
        )}

        {/* Mode: Trial Form */}
        {mode === 'trial' && (
          <form onSubmit={handleStartTrial} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 font-ar">
                اسم الطالب الثلاثي:
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="مثال: يوسف أحمد محمود"
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 text-sm font-ar"
                autoFocus
              />
            </div>

            <div className="p-3.5 bg-[#0055A4]/5 rounded-2xl border border-[#0055A4]/15 text-xs text-slate-600 leading-relaxed font-ar">
              💡 التجربة المجانية صالحة لمدة 24 ساعة لجميع الدروس والامتحانات وبنك الأخطاء.
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-2xl text-sm transition-colors shadow-xs cursor-pointer"
              >
                {loading ? 'جارِ بدء التجربة...' : 'بدء التجربة الآن'}
              </button>
              <button
                type="button"
                onClick={() => setMode('choose')}
                className="px-4 py-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl text-xs cursor-pointer"
              >
                رجوع
              </button>
            </div>
          </form>
        )}

        {/* Mode: Activate Form */}
        {mode === 'activate' && (
          <form onSubmit={handleActivate} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 font-ar">
                اسم الطالب:
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="مثال: مريم خالد علي"
                className="w-full px-4 py-2.5 rounded-2xl border border-slate-300 focus:outline-none focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 text-sm font-ar"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 font-ar">
                كود التفعيل (Code d'activation):
              </label>
              <input
                type="text"
                value={activationCode}
                onChange={(e) => setActivationCode(e.target.value)}
                placeholder="FR3-2025-AZHAR-XX"
                dir="ltr"
                className="w-full px-4 py-2.5 rounded-2xl border border-slate-300 focus:outline-none focus:border-[#EF4135] focus:ring-2 focus:ring-[#EF4135]/20 text-sm font-mono tracking-wider font-bold"
              />
            </div>

            {/* Helper Dropdown for Quick Testing */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowSampleCodes(!showSampleCodes)}
                className="text-xs text-[#0055A4] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
              >
                <span>أكواد تجريبية سريعة للمعاينة</span>
                {showSampleCodes ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showSampleCodes && (
                <div className="mt-2 p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-2 animate-in fade-in duration-100">
                  <div className="text-slate-500 font-medium">انقر على أي كود لنسخه تلقائياً في الحقل:</div>
                  <div className="grid grid-cols-2 gap-1.5" dir="ltr">
                    {sampleCodes.map(code => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => setActivationCode(code)}
                        className="px-2.5 py-1.5 bg-white hover:bg-blue-50 hover:border-blue-300 border border-slate-200 rounded-xl text-xs font-mono text-[#0055A4] font-bold transition-colors text-left"
                      >
                        {code}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 bg-[#EF4135] hover:bg-rose-700 text-white font-bold rounded-2xl text-sm transition-colors shadow-xs cursor-pointer"
              >
                {loading ? 'جارِ التحقق والتفعيل...' : 'تفعيل النسخة الكاملة'}
              </button>
              <button
                type="button"
                onClick={() => setMode('choose')}
                className="px-4 py-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl text-xs cursor-pointer"
              >
                رجوع
              </button>
            </div>
          </form>
        )}

        {/* Modal Close Button */}
        {onClose && (
          <div className="text-center pt-4 border-t border-slate-100 mt-4">
            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-slate-600 font-semibold cursor-pointer"
            >
              إغلاق النافذة
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
