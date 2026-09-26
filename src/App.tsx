import React, { useState, useEffect } from 'react';
import { StudentProfile } from './types';
import { api } from './services/api';
import { getLessonById } from './data/curriculum';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { CurriculumRoadmap } from './components/CurriculumRoadmap';
import { LessonViewer } from './components/LessonViewer';
import { VocabularyBank } from './components/VocabularyBank';
import { ErrorBankView } from './components/ErrorBankView';
import { ExamViewer } from './components/ExamViewer';
import { AuthModal } from './components/AuthModal';
import { FrenchBackground } from './components/FrenchBackground';
import { KeyRound, Sparkles, Trophy, BookOpen, Compass, Award, FileText, Headphones, Target, Landmark, ChevronLeft, ArrowRight } from 'lucide-react';

export function App() {
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<'dashboard' | 'roadmap' | 'vocab' | 'errors' | 'exams'>('dashboard');
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [activeExamId, setActiveExamId] = useState<string | null>(null);

  // Auth modal state
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<'choose' | 'trial' | 'activate' | 'expired'>('choose');

  // Load session on startup
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await api.checkSession();
        if (res && res.session) {
          setStudent(res.session);
        } else {
          setStudent(null);
        }
      } catch (err: any) {
        console.error('Failed to get session:', err);
        if (err.message && err.message.includes('انتهت صلاحية التجربة')) {
          setAuthModalMode('expired');
          setAuthModalOpen(true);
        }
        setStudent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  // Periodic check for trial expiration (every 1 min)
  useEffect(() => {
    if (!student || student.plan !== 'trial') return;

    const interval = setInterval(async () => {
      try {
        const res = await api.checkSession();
        if (res && res.session) {
          setStudent(res.session);
        }
      } catch (err: any) {
        if (err.message && err.message.includes('انتهت صلاحية التجربة')) {
          setStudent(null);
          setAuthModalMode('expired');
          setAuthModalOpen(true);
        }
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [student]);

  // Handle Lesson selection
  const handleStartLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setActiveExamId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Exam selection
  const handleOpenExam = (examId: string) => {
    setActiveExamId(examId);
    setActiveLessonId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await api.logout();
      setStudent(null);
      setActiveLessonId(null);
      setActiveExamId(null);
      setCurrentTab('dashboard');
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center p-4">
        <div className="w-10 h-10 border-3 border-[#0055A4] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-xs sm:text-sm font-bold text-[#0B1F3A] font-ar">جارِ تحميل المنصة والتحقق من الجلسة...</p>
      </div>
    );
  }

  // Active Lesson View
  const activeLesson = activeLessonId ? getLessonById(activeLessonId) : null;

  return (
    <FrenchBackground>
      <div className="min-h-screen flex flex-col text-[#0B1F3A]">
        
        {/* Top Bar */}
        <Header
          student={student}
          currentTab={currentTab}
          onSelectTab={(tab) => {
            setActiveLessonId(null);
            setActiveExamId(null);
            setCurrentTab(tab);
          }}
          onOpenAuth={() => {
            setAuthModalMode('choose');
            setAuthModalOpen(true);
          }}
          onLogout={handleLogout}
        />

        {/* Main Content Area */}
        <main className="flex-1 pb-16">
          {!student ? (
            /* ============================================================ */
            /* LANDING HERO SECTION (Home Page - Non-Logged In View) */
            /* ============================================================ */
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center space-y-9">
              
              {/* French Curriculum Badge */}
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
                <span className="font-ar text-[11px] text-slate-600">الصف الثالث الإعدادي · الفصل الأول</span>
              </div>
              
              {/* HERO BRAND STATEMENT */}
              <div className="space-y-2 select-none">
                <div className="flex items-center justify-center gap-3">
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#0B1F3A] font-fr-title uppercase drop-shadow-xs">
                    BIENVENUE
                  </h1>
                  <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#EF4135] font-fr-title">
                    3
                  </span>
                </div>

                <div className="relative inline-block">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-widest text-[#0055A4] font-fr uppercase">
                    AVEC MONSIEUR SAID
                  </div>

                  {/* Fine French Tricolor Underline */}
                  <div className="mt-2.5 mx-auto w-44 sm:w-64 h-[3px] rounded-full overflow-hidden flex shadow-2xs">
                    <span className="w-1/3 h-full bg-[#0055A4]" />
                    <span className="w-1/3 h-full bg-white border-y border-[#0055A4]/20" />
                    <span className="w-1/3 h-full bg-[#EF4135]" />
                  </div>
                </div>
              </div>

              {/* Sub-Description */}
              <div className="space-y-3 max-w-2xl mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] font-ar">
                  المنصة التعليمية التفاعلية المعتمدة للغة الفرنسية
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-ar">
                  شرح تفاعلي شامل لكتاب <span className="font-fr font-bold text-[#0055A4]">Bienvenue 3</span>: نصوص قراءة صوتية، قواعد ناطقة، بنك أخطاء ذكي، وامتحانات رسمية من 20 درجة.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setAuthModalMode('trial');
                    setAuthModalOpen(true);
                  }}
                  className="px-7 py-3.5 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-2xl text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>ابدأ تجربة مجانية ٢٤ ساعة</span>
                  <span className="text-[11px] text-blue-200">· فورية</span>
                </button>

                <button
                  onClick={() => {
                    setAuthModalMode('activate');
                    setAuthModalOpen(true);
                  }}
                  className="px-6 py-3.5 bg-white hover:bg-[#FAF8F5] text-[#EF4135] font-bold rounded-2xl text-sm transition-all shadow-xs border border-[#EF4135]/30 hover:border-[#EF4135] flex items-center gap-2 cursor-pointer"
                >
                  <KeyRound className="w-4 h-4 text-[#EF4135]" />
                  <span>تفعيل بكود الاشتراك</span>
                </button>
              </div>

              {/* 3 French Feature Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 text-right max-w-4xl mx-auto">
                <div className="p-6 bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 shadow-xs hover:border-[#0055A4]/40 transition-all space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0055A4]/10 text-[#0055A4] flex items-center justify-center shadow-2xs">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A]">نصوص الكتاب الأصلية</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-ar">
                    متحف اللوفر، قصر باريس، والمطاعم الفرنسية مع نطق صوتي فرنسي دقيق وترجمة سياقية.
                  </p>
                </div>

                <div className="p-6 bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 shadow-xs hover:border-[#0055A4]/40 transition-all space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0055A4]/10 text-[#0055A4] flex items-center justify-center shadow-2xs">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A]">تأسيس القواعد والأزمنة</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-ar">
                    شرح شامل للماضي المركب، ضمائر المفعول، وحروف الجر مع تدريبات تفاعلية فورية.
                  </p>
                </div>

                <div className="p-6 bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 shadow-xs hover:border-[#EF4135]/40 transition-all space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#EF4135] flex items-center justify-center shadow-2xs">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A]">بنك أخطاء وامتحانات رسمية</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-ar">
                    رصد تلقائي لنقاط الضعف لتصفيرها، مع نماذج امتحانات نصف العام الشاملة من 20 درجة.
                  </p>
                </div>
              </div>
            </div>
          ) : activeLesson ? (
            <LessonViewer
              lesson={activeLesson}
              student={student}
              onLessonCompleted={(updated) => setStudent(updated)}
              onNextLesson={(nextId) => setActiveLessonId(nextId)}
              onBackToRoadmap={() => {
                setActiveLessonId(null);
                setCurrentTab('roadmap');
              }}
            />
          ) : activeExamId ? (
            <ExamViewer
              examId={activeExamId}
              student={student}
              onExamCompleted={(updated) => setStudent(updated)}
              onBackToDashboard={() => {
                setActiveExamId(null);
                setCurrentTab('dashboard');
              }}
            />
          ) : currentTab === 'dashboard' ? (
            <Dashboard
              student={student}
              onStartLesson={handleStartLesson}
              onOpenExam={handleOpenExam}
              onOpenErrorBank={() => setCurrentTab('errors')}
              onOpenVocab={() => setCurrentTab('vocab')}
              onOpenRoadmap={() => setCurrentTab('roadmap')}
            />
          ) : currentTab === 'roadmap' ? (
            <CurriculumRoadmap
              student={student}
              onSelectLesson={handleStartLesson}
              onSelectExam={handleOpenExam}
            />
          ) : currentTab === 'vocab' ? (
            <VocabularyBank />
          ) : currentTab === 'errors' ? (
            <ErrorBankView
              student={student}
              onUpdateProfile={(updated) => setStudent(updated)}
              onGoToLesson={(lessonId) => handleStartLesson(lessonId)}
            />
          ) : currentTab === 'exams' ? (
            <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 text-right">
              <div className="flex items-center gap-2 text-xs font-bold text-[#EF4135] font-fr mb-1 uppercase tracking-wider">
                <div className="french-flag-badge">
                  <span />
                  <span />
                  <span />
                </div>
                <span>Examens Officiels · 20 Points</span>
              </div>
              <h1 className="text-2xl font-black text-[#0B1F3A]">
                الامتحانات الرسمية للفصل الدراسي الأول
              </h1>
              <p className="text-xs text-slate-500">
                امتحانات مطابقة لأصل المنهج المقرر بدرجة نهائية من 20 درجة
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-[#0055A4] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#0055A4]/10 text-[#0055A4] flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A]">Examen de Mi-Terme 2018</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-ar">
                    امتحان منتصف الفصل الدراسي الأول 2018 (صفحات 33-35) · قرية شيراتون السياحية بشرم الشيخ
                  </p>
                  <button
                    onClick={() => handleOpenExam('exam_miterme_2018')}
                    className="w-full py-2.5 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-xs"
                  >
                    دخول امتحان الميدترم
                  </button>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-amber-400 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A]">Examen de Mi-année 2018 - 2019</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-ar">
                    امتحان نصف العام الشامل 2018-2019 (صفحات 58-60) · مطعم بون آبيتي بالقاهرة
                  </p>
                  <button
                    onClick={() => handleOpenExam('exam_miannee_2019')}
                    className="w-full py-2.5 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <Trophy className="w-3.5 h-3.5 text-amber-300" />
                    <span>دخول امتحان نصف العام الشامل</span>
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </main>

        {/* Auth Modal */}
        <AuthModal
          isOpen={authModalOpen}
          initialMode={authModalMode}
          onSuccess={(session) => {
            setStudent(session);
            setAuthModalOpen(false);
          }}
          onClose={() => setAuthModalOpen(false)}
        />
      </div>
    </FrenchBackground>
  );
}

export default App;
