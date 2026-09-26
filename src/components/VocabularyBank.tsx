import React, { useState } from 'react';
import { getAllVocabulary } from '../data/curriculum';
import { VocabularyWord } from '../types';
import { speakFrench } from '../utils/speech';
import { Volume2, RotateCcw, Check, Sparkles, Filter, BookOpen, Layers, CheckCircle2, XCircle } from 'lucide-react';

export const VocabularyBank: React.FC = () => {
  const allVocab = getAllVocabulary();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [testMode, setTestMode] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'masculin', label: 'أسماء مذكرة (Masculin)' },
    { id: 'feminin', label: 'أسماء مؤنثة (Féminin)' },
    { id: 'verbe', label: 'أفعال (Verbes)' },
    { id: 'aliment', label: 'أطعمة ومأكولات (Aliments)' },
  ];

  const filtered = selectedCategory === 'all'
    ? allVocab
    : allVocab.filter(v => v.category === selectedCategory);

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Quiz Options Generation
  const currentQuizItem = allVocab[quizIndex % allVocab.length];
  const quizOptions = React.useMemo(() => {
    if (!currentQuizItem) return [];
    const wrongs = allVocab
      .filter(v => v.id !== currentQuizItem.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(v => v.arabic);
    return [currentQuizItem.arabic, ...wrongs].sort(() => 0.5 - Math.random());
  }, [currentQuizItem, allVocab]);

  const handleQuizSelect = (opt: string) => {
    if (quizAnswered) return;
    setSelectedOption(opt);
    setQuizAnswered(true);
    if (opt === currentQuizItem.arabic) {
      setQuizScore(s => s + 1);
    }
  };

  const nextQuiz = () => {
    setQuizIndex(i => i + 1);
    setQuizAnswered(false);
    setSelectedOption(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#EF4135] font-fr mb-1 uppercase tracking-wider">
            <div className="french-flag-badge">
              <span />
              <span />
              <span />
            </div>
            <span>Lexique & Vocabulaire · BIENVENUE 3</span>
          </div>
          <h1 className="text-2xl font-black text-[#0B1F3A] font-ar-display flex items-center gap-2">
            <span>بطاقات المفردات والكلمات التفاعلية</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            جميع مفردات وأفعال وأطعمة الوحدتين الأولى والثانية مع النطق الصوتي الفوري
          </p>
        </div>

        <button
          onClick={() => {
            setTestMode(!testMode);
            setQuizIndex(0);
            setQuizScore(0);
            setQuizAnswered(false);
            setSelectedOption(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
            testMode
              ? 'bg-[#EF4135] text-white hover:bg-rose-700'
              : 'bg-[#0055A4] text-white hover:bg-[#004080]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>{testMode ? 'إيقاف الاختبار السريع' : 'بدء اختبار المفردات'}</span>
        </button>
      </div>

      {/* QUIZ MODE */}
      {testMode ? (
        <div className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-md space-y-6 text-center">
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
            <span className="font-bold text-[#0B1F3A]">سؤال {quizIndex + 1}</span>
            <span className="font-mono font-bold text-[#0055A4]">النقاط: {quizScore}</span>
          </div>

          <div className="space-y-3 py-4">
            <div className="text-xs font-bold text-slate-400 font-mono uppercase">
              Quel est le sens de ce mot ?
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#0B1F3A] font-fr flex items-center justify-center gap-2">
              <span>{currentQuizItem?.french}</span>
              <button
                onClick={() => currentQuizItem && speakFrench(currentQuizItem.french)}
                className="p-2 bg-[#0055A4]/10 hover:bg-[#0055A4]/20 text-[#0055A4] rounded-xl transition-colors cursor-pointer"
                title="استمع للكلمة"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5 text-right">
            {quizOptions.map(opt => {
              const isCorrect = opt === currentQuizItem.arabic;
              const isSelected = selectedOption === opt;

              let btnClass = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';
              if (quizAnswered) {
                if (isCorrect) btnClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                else if (isSelected) btnClass = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                else btnClass = 'border-slate-200 bg-white opacity-40 text-slate-400';
              }

              return (
                <button
                  key={opt}
                  disabled={quizAnswered}
                  onClick={() => handleQuizSelect(opt)}
                  className={`p-3.5 rounded-2xl border text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${btnClass}`}
                >
                  <span>{opt}</span>
                  {quizAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                  {quizAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          {quizAnswered && (
            <button
              onClick={nextQuiz}
              className="w-full py-3 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-xs"
            >
              السؤال التالي ←
            </button>
          )}
        </div>
      ) : (
        /* VOCABULARY FLASHCARDS MODE */
        <div className="space-y-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(item => {
              const isFlipped = !!flippedCards[item.id];

              return (
                <div
                  key={item.id}
                  onClick={() => toggleFlip(item.id)}
                  className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 hover:border-[#0055A4]/60 p-5 shadow-xs hover:shadow-md transition-all cursor-pointer min-h-[160px] flex flex-col justify-between group relative select-none"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-bold text-[#0055A4] font-fr uppercase tracking-wider bg-[#0055A4]/5 px-2 py-0.5 rounded-lg">
                      {item.category}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakFrench(item.french);
                      }}
                      className="p-1.5 bg-[#FAF8F5] hover:bg-[#0055A4]/10 text-[#0055A4] rounded-xl transition-colors cursor-pointer border border-slate-200"
                      title="استمع للنطق الفرنسي"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="py-2 text-center">
                    {!isFlipped ? (
                      <div className="space-y-1">
                        <div className="text-lg font-black text-[#0B1F3A] font-fr group-hover:text-[#0055A4] transition-colors">
                          {item.french}
                        </div>
                        {item.exampleFr && (
                          <div className="text-[11px] text-slate-400 italic font-fr line-clamp-1">
                            {item.exampleFr}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-1 animate-in fade-in zoom-in-95 duration-150">
                        <div className="text-lg font-bold text-emerald-800 font-ar">
                          {item.arabic}
                        </div>
                        {item.exampleAr && (
                          <div className="text-[11px] text-slate-500 font-ar line-clamp-1">
                            {item.exampleAr}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2 font-medium">
                    <span>{isFlipped ? 'عرض الفرنسية' : 'انقر للترجمة'}</span>
                    <RotateCcw className="w-3 h-3 text-slate-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
