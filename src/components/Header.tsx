import React from 'react';
import { StudentProfile } from '../types';
import { BookOpen, Award, CheckCircle2, Clock, LogOut, KeyRound, Sparkles, Compass, AlertCircle } from 'lucide-react';

interface HeaderProps {
  student: StudentProfile | null;
  currentTab: 'dashboard' | 'roadmap' | 'vocab' | 'errors' | 'exams';
  onSelectTab: (tab: 'dashboard' | 'roadmap' | 'vocab' | 'errors' | 'exams') => void;
  onOpenAuth: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  student,
  currentTab,
  onSelectTab,
  onOpenAuth,
  onLogout,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      {/* French Flag Tricolor Micro-Ribbon */}
      <div className="french-flag-bar w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Brand title & French Flag Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectTab('dashboard')}
              className="text-right focus:outline-none group cursor-pointer flex items-center gap-3"
            >
              {/* French Flag Mini Badge */}
              <div className="french-flag-badge shrink-0" title="Drapeau Français">
                <span />
                <span />
                <span />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black tracking-tight text-[#0B1F3A] font-fr-title uppercase group-hover:text-[#0055A4] transition-colors">
                    BIENVENUE <span className="text-[#EF4135]">3</span>
                  </span>
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-400 font-fr border-r border-slate-200 pr-2 mr-2">
                    Plateforme Officielle
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium font-ar">
                  الصف الثالث الإعدادي · الفصل الدراسي الأول
                </div>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          {student && (
            <nav className="hidden md:flex items-center gap-1.5">
              <button
                onClick={() => onSelectTab('dashboard')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  currentTab === 'dashboard'
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-[#0055A4]/10 hover:text-[#0055A4]'
                }`}
              >
                الرئيسية
              </button>
              <button
                onClick={() => onSelectTab('roadmap')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  currentTab === 'roadmap'
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-[#0055A4]/10 hover:text-[#0055A4]'
                }`}
              >
                رحلة المنهج
              </button>
              <button
                onClick={() => onSelectTab('vocab')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  currentTab === 'vocab'
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-[#0055A4]/10 hover:text-[#0055A4]'
                }`}
              >
                المفردات
              </button>
              <button
                onClick={() => onSelectTab('errors')}
                className={`relative px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  currentTab === 'errors'
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-[#0055A4]/10 hover:text-[#0055A4]'
                }`}
              >
                <span>بنك الأخطاء</span>
                {student.errorBank && student.errorBank.filter(e => !e.resolved).length > 0 && (
                  <span className="mr-1.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold text-white bg-[#EF4135] rounded-full">
                    {student.errorBank.filter(e => !e.resolved).length}
                  </span>
                )}
              </button>
              <button
                onClick={() => onSelectTab('exams')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  currentTab === 'exams'
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-[#0055A4]/10 hover:text-[#0055A4]'
                }`}
              >
                الامتحانات
              </button>
            </nav>
          )}

          {/* Zone 3: Primary Actions & Student Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            {student ? (
              <div className="flex items-center gap-2.5">
                {student.plan === 'trial' ? (
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-xl text-xs font-medium text-amber-900">
                    <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>تجربة: {student.remainingHours}س {student.remainingMinutes}د</span>
                    <button
                      onClick={onOpenAuth}
                      className="mr-1 font-bold text-[#EF4135] hover:underline cursor-pointer"
                    >
                      تفعيل كامل
                    </button>
                  </div>
                ) : (
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#0055A4]/10 border border-[#0055A4]/20 rounded-xl text-xs font-bold text-[#0055A4]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>النسخة الكاملة</span>
                  </div>
                )}

                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-[#0055A4] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {student.studentName.charAt(0)}
                  </div>
                  <span className="text-xs font-semibold text-slate-800 max-w-[110px] truncate">
                    {student.studentName}
                  </span>
                  <div className="flex items-center gap-0.5 text-xs text-amber-700 font-bold font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{student.xp}</span>
                  </div>
                </div>

                <button
                  onClick={onLogout}
                  title="تسجيل الخروج"
                  className="p-2 text-slate-400 hover:text-[#EF4135] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 text-xs font-bold text-white bg-[#0055A4] hover:bg-[#004080] rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>تسجيل الدخول / التفعيل</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Tab Bar */}
        {student && (
          <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-200 text-xs font-bold">
            <button
              onClick={() => onSelectTab('dashboard')}
              className={`py-1 px-2 ${currentTab === 'dashboard' ? 'text-[#0055A4] border-b-2 border-[#0055A4]' : 'text-slate-500'}`}
            >
              الرئيسية
            </button>
            <button
              onClick={() => onSelectTab('roadmap')}
              className={`py-1 px-2 ${currentTab === 'roadmap' ? 'text-[#0055A4] border-b-2 border-[#0055A4]' : 'text-slate-500'}`}
            >
              المنهج
            </button>
            <button
              onClick={() => onSelectTab('vocab')}
              className={`py-1 px-2 ${currentTab === 'vocab' ? 'text-[#0055A4] border-b-2 border-[#0055A4]' : 'text-slate-500'}`}
            >
              المفردات
            </button>
            <button
              onClick={() => onSelectTab('errors')}
              className={`py-1 px-2 ${currentTab === 'errors' ? 'text-[#0055A4] border-b-2 border-[#0055A4]' : 'text-slate-500'}`}
            >
              الأخطاء
            </button>
            <button
              onClick={() => onSelectTab('exams')}
              className={`py-1 px-2 ${currentTab === 'exams' ? 'text-[#0055A4] border-b-2 border-[#0055A4]' : 'text-slate-500'}`}
            >
              الامتحانات
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
