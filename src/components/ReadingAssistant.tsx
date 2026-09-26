import React, { useState, useEffect } from 'react';
import { ReadingPassageData } from '../types';
import { speakFrench, pauseFrench, resumeFrench, stopFrench } from '../utils/speech';
import {
  Volume2,
  BookOpen,
  Languages,
  RotateCcw,
  Play,
  Pause,
  Headphones,
  Sparkles,
  Info,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ReadingAssistantProps {
  passage: ReadingPassageData;
}

export const ReadingAssistant: React.FC<ReadingAssistantProps> = ({ passage }) => {
  const [studyMode, setStudyMode] = useState<'read' | 'listen' | 'bilingual'>('listen');
  const [showGlobalTranslation, setShowGlobalTranslation] = useState(false);
  
  // Audio state
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSentenceId, setActiveSentenceId] = useState<string | null>(null);
  const [activeWordTooltip, setActiveWordTooltip] = useState<{ french: string; arabic: string } | null>(null);

  useEffect(() => {
    return () => {
      stopFrench();
    };
  }, []);

  const handlePlayFull = (slow: boolean = false) => {
    stopFrench();
    setIsPlayingFull(true);
    setIsPaused(false);
    setActiveSentenceId(null);

    speakFrench(passage.fullFrenchText, {
      rate: slow ? 0.65 : 0.88,
      onStart: () => {
        setIsPlayingFull(true);
        setIsPaused(false);
      },
      onEnd: () => {
        setIsPlayingFull(false);
        setIsPaused(false);
        setActiveSentenceId(null);
      },
      onError: () => {
        setIsPlayingFull(false);
        setIsPaused(false);
      }
    });
  };

  const handleTogglePause = () => {
    if (isPaused) {
      resumeFrench();
      setIsPaused(false);
    } else {
      pauseFrench();
      setIsPaused(true);
    }
  };

  const handleStop = () => {
    stopFrench();
    setIsPlayingFull(false);
    setIsPaused(false);
    setActiveSentenceId(null);
  };

  const handlePlaySentence = (sentenceId: string, text: string, slow: boolean = false) => {
    stopFrench();
    setIsPlayingFull(false);
    setIsPaused(false);
    setActiveSentenceId(sentenceId);

    speakFrench(text, {
      rate: slow ? 0.65 : 0.85,
      onStart: () => {
        setActiveSentenceId(sentenceId);
      },
      onEnd: () => {
        setActiveSentenceId(null);
      },
      onError: () => {
        setActiveSentenceId(null);
      }
    });
  };

  const handleWordClick = (frenchWord: string) => {
    speakFrench(frenchWord, { rate: 0.8 });
    const clean = frenchWord.replace(/[.,:;!?«»"'—]/g, '').trim().toLowerCase();
    const found = passage.keyVocabulary?.find(
      v => v.french.toLowerCase() === clean || clean.includes(v.french.toLowerCase())
    );
    if (found) {
      setActiveWordTooltip({ french: found.french, arabic: found.arabic });
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden text-right">
      
      {/* Header Bar */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0055A4] via-[#004080] to-[#0B1F3A] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-200 shrink-0 border border-white/10">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-200 font-fr uppercase tracking-wider">
                Assistant de Lecture · Bienvenue 3
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white font-ar">
              مساعد القراءة والنطق الصوتي التفاعلي
            </h3>
          </div>
        </div>

        {/* Study Mode Switcher */}
        <div className="flex items-center gap-1 p-1 bg-black/20 rounded-xl self-start sm:self-auto border border-white/10">
          <button
            onClick={() => setStudyMode('listen')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              studyMode === 'listen'
                ? 'bg-white text-[#0055A4] shadow-xs'
                : 'text-blue-200 hover:text-white'
            }`}
          >
            نطق جملة بجملة
          </button>
          <button
            onClick={() => setStudyMode('bilingual')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              studyMode === 'bilingual'
                ? 'bg-white text-[#0055A4] shadow-xs'
                : 'text-blue-200 hover:text-white'
            }`}
          >
            مزدوج (فرنسي + عربي)
          </button>
          <button
            onClick={() => setStudyMode('read')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              studyMode === 'read'
                ? 'bg-white text-[#0055A4] shadow-xs'
                : 'text-blue-200 hover:text-white'
            }`}
          >
            قراءة متصلة
          </button>
        </div>
      </div>

      {/* Main Reading & Audio Controls Area */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Playback Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-[#FAF8F5] rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2">
            {!isPlayingFull ? (
              <button
                onClick={() => handlePlayFull(false)}
                className="px-4 py-2 bg-[#0055A4] hover:bg-[#004080] text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>تشغيل النص كاملاً</span>
              </button>
            ) : (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleTogglePause}
                  className="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>{isPaused ? 'استئناف' : 'إيقاف مؤقت'}</span>
                </button>
                <button
                  onClick={handleStop}
                  className="px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>إيقاف</span>
                </button>
              </div>
            )}

            <button
              onClick={() => handlePlayFull(true)}
              className="px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
              title="نطق بطيء وواضح للتأسيس"
            >
              🐢 نطق هادئ وبطيء
            </button>
          </div>

          <button
            onClick={() => setShowGlobalTranslation(!showGlobalTranslation)}
            className="text-xs font-bold text-[#0055A4] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Languages className="w-4 h-4" />
            <span>{showGlobalTranslation ? 'إخفاء الترجمة الإجمالية' : 'إظهار الترجمة الإجمالية'}</span>
          </button>
        </div>

        {/* Global Translation Drawer */}
        {showGlobalTranslation && (
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl text-xs sm:text-sm text-slate-800 leading-relaxed font-ar animate-in fade-in duration-150">
            <strong className="text-amber-950 font-bold block mb-1">الترجمة السياقية المعتمدة:</strong>
            {passage.fullArabicTranslation}
          </div>
        )}

        {/* Word Tooltip Popup if clicked */}
        {activeWordTooltip && (
          <div className="p-3 bg-[#0055A4] text-white rounded-2xl flex items-center justify-between text-xs animate-in zoom-in-95 duration-100 shadow-md">
            <div className="flex items-center gap-2 font-fr">
              <span className="font-bold text-amber-300">{activeWordTooltip.french}</span>
              <span>:</span>
              <span className="font-ar font-bold">{activeWordTooltip.arabic}</span>
            </div>
            <button
              onClick={() => setActiveWordTooltip(null)}
              className="text-blue-200 hover:text-white text-xs cursor-pointer font-bold"
            >
              إغلاق
            </button>
          </div>
        )}

        {/* Passage Display based on Study Mode */}
        {studyMode === 'listen' ? (
          /* Mode 1: Sentence by Sentence with Dedicated Audio Triggers */
          <div className="space-y-3">
            {passage.sentences.map((st, idx) => {
              const isActive = activeSentenceId === st.id;

              return (
                <div
                  key={st.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all space-y-2 text-left ${
                    isActive
                      ? 'border-[#0055A4] bg-[#0055A4]/5 shadow-xs ring-2 ring-[#0055A4]/20'
                      : 'border-slate-200 hover:border-[#0055A4]/40 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePlaySentence(st.id, st.french)}
                        className={`p-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold ${
                          isActive
                            ? 'bg-[#0055A4] text-white shadow-xs'
                            : 'bg-[#FAF8F5] text-[#0055A4] hover:bg-[#0055A4]/10 border border-slate-200'
                        }`}
                        title="استمع لهذه الجملة"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>استمع</span>
                      </button>
                      <button
                        onClick={() => handlePlaySentence(st.id, st.french, true)}
                        className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg text-xs hover:bg-slate-100 transition-colors cursor-pointer"
                        title="استمع بنطق بطيء"
                      >
                        🐢
                      </button>
                    </div>

                    <span className="text-[11px] font-bold text-slate-400 font-mono">
                      {idx + 1} / {passage.sentences.length}
                    </span>
                  </div>

                  {/* French Sentence with interactive clickable words */}
                  <div className="text-base sm:text-lg font-bold text-[#0B1F3A] font-fr leading-relaxed">
                    {st.french.split(' ').map((word, wIdx) => (
                      <span
                        key={wIdx}
                        onClick={() => handleWordClick(word)}
                        className="hover:text-[#0055A4] hover:underline cursor-pointer px-0.5 rounded transition-colors inline-block"
                        title="انقر للاستماع للكلمة وترجمتها"
                      >
                        {word}{' '}
                      </span>
                    ))}
                  </div>

                  {/* Arabic Meaning */}
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 font-ar text-right pt-1 border-t border-slate-100">
                    {st.arabic}
                  </div>
                </div>
              );
            })}
          </div>
        ) : studyMode === 'bilingual' ? (
          /* Mode 2: Bilingual Dual-Column / Stack View */
          <div className="space-y-4">
            {passage.sentences.map((st) => (
              <div key={st.id} className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                <div className="text-sm sm:text-base font-bold text-[#0B1F3A] font-fr text-left" dir="ltr">
                  {st.french}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 font-ar text-right">
                  {st.arabic}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Mode 3: Continuous Flowing Prose */
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-slate-200 text-left font-fr space-y-4" dir="ltr">
            <div className="text-lg sm:text-xl font-serif italic text-[#0B1F3A] leading-loose">
              {passage.fullFrenchText}
            </div>
            <div className="text-xs text-slate-400 font-mono pt-2 border-t border-slate-200">
              * Clique sur n'importe quel mot pour écouter sa prononciation.
            </div>
          </div>
        )}

        {/* Key Vocabulary Highlights Bar */}
        {passage.keyVocabulary && passage.keyVocabulary.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="text-xs font-bold text-[#EF4135] font-fr uppercase tracking-wider">
              Vocabulaire Clé de la Leçon · مفردات الوثيقة الهامة:
            </div>
            <div className="flex flex-wrap gap-2">
              {passage.keyVocabulary.map((v, i) => (
                <button
                  key={i}
                  onClick={() => speakFrench(v.french)}
                  className="px-3 py-1.5 bg-white border border-slate-200 hover:border-[#0055A4] rounded-xl text-xs font-fr transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs group"
                >
                  <span className="font-bold text-[#0055A4] group-hover:underline">{v.french}</span>
                  <span className="text-slate-400">·</span>
                  <span className="font-ar font-medium text-slate-700">{v.arabic}</span>
                  <Volume2 className="w-3 h-3 text-slate-400 group-hover:text-[#0055A4]" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
