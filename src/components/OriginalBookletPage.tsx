import React, { useState } from 'react';
import { ZoomIn, X, Maximize2, BookOpen, Volume2 } from 'lucide-react';
import { speakFrench } from '../utils/speech';

interface OriginalBookletPageProps {
  pageNumber: number; // 12 or 37
  unitTitleFr: string;
  lessonTitleFr: string;
}

export const OriginalBookletPage: React.FC<OriginalBookletPageProps> = ({
  pageNumber,
  unitTitleFr,
  lessonTitleFr,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="space-y-3">
      {/* Container Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0055A4] animate-pulse" />
          <span className="text-xs font-bold text-[#0B1F3A]">
            الصفحة الأصلية المعتمدة من الكتاب المدرسي (صفحة {pageNumber})
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsZoomed(true)}
          className="px-3 py-1.5 bg-[#0055A4]/10 hover:bg-[#0055A4]/20 text-[#0055A4] font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs border border-[#0055A4]/20"
        >
          <ZoomIn className="w-3.5 h-3.5" />
          <span>تكبير الصفحة الأصلية (Plein écran)</span>
        </button>
      </div>

      {/* Embedded High-Fidelity Original Page Card */}
      <div
        onClick={() => setIsZoomed(true)}
        className="group relative cursor-pointer bg-white rounded-3xl border border-slate-200 hover:border-[#0055A4] shadow-xs hover:shadow-md transition-all overflow-hidden p-5 sm:p-7 select-none max-w-2xl mx-auto"
      >
        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-[#0055A4]/0 group-hover:bg-[#0055A4]/5 transition-colors flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#0055A4] text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-lg">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>انقر لتكبير الصفحة الأصلية</span>
          </div>
        </div>

        {/* Page Render (Authentic Layout) */}
        {pageNumber === 12 ? (
          /* Page 12 - Unité 1 Balade - Le Louvre */
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 text-slate-900 font-sans space-y-5 shadow-2xs">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-xs font-semibold text-slate-500">
              <div className="font-fr">Date / ........................</div>
              <div className="flex items-center gap-1 text-[#0055A4] font-bold font-fr">
                <span className="text-sm">3</span>
                <span className="text-[10px] -mt-1">ème</span>
                <span className="text-xs bg-[#0055A4]/10 px-1.5 py-0.5 rounded text-[#0055A4]">prép</span>
              </div>
            </div>

            {/* Title Section */}
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-black italic tracking-wide text-[#0055A4] font-fr">
                Unité (1)
              </h2>
              <h3 className="text-2xl font-black text-[#0B1F3A] font-display italic">
                Balade
              </h3>
              <div className="text-xs font-bold text-[#EF4135] underline font-fr pt-1">
                Lis le texte puis réponds aux questions:
              </div>
            </div>

            {/* Image & Text Container (Blue Rounded Frame) */}
            <div className="border-2 border-[#0055A4] rounded-3xl p-4 sm:p-5 space-y-3 bg-[#0055A4]/5">
              {/* Louvre Pyramid Graphic */}
              <div className="rounded-xl overflow-hidden shadow-sm border border-blue-200 max-w-sm mx-auto bg-gradient-to-b from-sky-400 to-sky-600 p-1">
                <div className="relative h-40 rounded-lg overflow-hidden bg-sky-200 flex flex-col items-center justify-center text-center text-white">
                  <svg className="w-full h-full" viewBox="0 0 320 160" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                      <linearGradient id="pyrGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#0891b2" stopOpacity="0.95" />
                      </linearGradient>
                      <linearGradient id="palaceGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#b45309" />
                        <stop offset="100%" stopColor="#78350f" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="160" fill="url(#skyGrad)" />
                    <rect x="20" y="45" width="280" height="75" fill="url(#palaceGrad)" opacity="0.9" rx="2" />
                    <rect x="35" y="25" width="40" height="35" fill="#451a03" />
                    <rect x="245" y="25" width="40" height="35" fill="#451a03" />
                    <rect x="130" y="15" width="60" height="40" fill="#451a03" />
                    <circle cx="160" cy="35" r="8" fill="#fef08a" opacity="0.8" />
                    <rect x="45" y="55" width="20" height="25" fill="#fef08a" opacity="0.7" />
                    <rect x="80" y="55" width="20" height="25" fill="#fef08a" opacity="0.7" />
                    <rect x="220" y="55" width="20" height="25" fill="#fef08a" opacity="0.7" />
                    <rect x="255" y="55" width="20" height="25" fill="#fef08a" opacity="0.7" />
                    <ellipse cx="205" cy="115" rx="12" ry="30" fill="#e0f2fe" opacity="0.8" />
                    <circle cx="205" cy="90" r="14" fill="#bae6fd" opacity="0.9" />
                    <polygon points="135,40 50,140 220,140" fill="url(#pyrGrad)" stroke="#0e7490" strokeWidth="2" />
                    <line x1="135" y1="40" x2="135" y2="140" stroke="#083344" strokeWidth="1.5" strokeDasharray="3,3" />
                    <line x1="92" y1="90" x2="177" y2="90" stroke="#083344" strokeWidth="1" strokeDasharray="2,2" />
                    <rect x="0" y="138" width="320" height="22" fill="#d6d3d1" />
                  </svg>
                  <div className="absolute bottom-1 right-2 text-[10px] font-bold bg-[#0055A4]/85 text-white px-2 py-0.5 rounded">
                    Musée du Louvre & Pyramide de verre
                  </div>
                </div>
              </div>

              {/* French Original Reading Passage */}
              <div className="text-sm sm:text-base font-serif italic text-[#0B1F3A] leading-relaxed text-left font-fr px-2">
                " Voici le Louvre à paris, c'est un grand musée. Devant le Louvre, on voit des touristes de toutes les nationalités : des Egyptiens, des Japonais, des Espagnols, des Américains ……. Beaucoup de touristes aiment visiter la section des antiquités égyptiennes. Pour entrer au Louvre, on passe sous la pyramide de verre qui rappelle les grandes pyramides d'Egypte. "
              </div>
            </div>

            {/* Exercise Preview in the book */}
            <div className="space-y-2 text-xs font-fr text-left pt-2 border-t border-slate-100">
              <div className="font-bold text-[#EF4135] underline">A) Choisis le bon groupe :</div>
              <div className="text-slate-700">1. Ce document est .................... [a) un dialogue  b) une conversation téléphonique  c) un article]</div>
              <div className="text-slate-700">2. Ce texte parle du .................... [a) musée du Louvre  b) musée égyptien  c) musée El Mountazah]</div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t text-[11px] text-slate-500 font-mono">
              <div className="bg-[#FAF8F5] border border-slate-200 font-bold px-2 py-0.5 rounded-md text-[#0055A4]">
                12
              </div>
              <div>1er semestre</div>
            </div>
          </div>
        ) : (
          /* Page 37 - Unité 2 Bon Appétit - Au Restaurant */
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 text-slate-900 font-sans space-y-5 shadow-2xs">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-xs font-semibold text-slate-500">
              <div className="font-fr">Date / ........................</div>
              <div className="flex items-center gap-1 text-[#0055A4] font-bold font-fr">
                <span className="text-sm">3</span>
                <span className="text-[10px] -mt-1">ème</span>
                <span className="text-xs bg-[#0055A4]/10 px-1.5 py-0.5 rounded text-[#0055A4]">prép</span>
              </div>
            </div>

            {/* Title Section */}
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-black italic tracking-wide text-[#0055A4] font-fr">
                Unité (2)
              </h2>
              <h3 className="text-2xl font-black text-[#0B1F3A] font-display italic">
                Bon Appétit
              </h3>
              <div className="text-xs font-bold text-[#EF4135] underline font-fr pt-1">
                Lis le document puis réponds aux questions:
              </div>
            </div>

            {/* Text & Restaurant Scene */}
            <div className="border-2 border-[#0055A4] rounded-3xl p-4 sm:p-5 space-y-3 bg-[#0055A4]/5">
              <div className="text-xs font-bold text-[#0055A4] uppercase tracking-wider font-fr text-center bg-white py-1 rounded-lg border border-slate-200">
                🍽️ Au Restaurant "Le Parisien" · Le Menu du Jour
              </div>

              <div className="text-sm sm:text-base font-serif italic text-[#0B1F3A] leading-relaxed text-left font-fr px-2">
                " Le soir, la famille Bernard va au restaurant pour dîner. Le serveur apporte le menu. M. Bernard choisit du poisson avec du riz et de la salade verte. Sa femme préfère du poulet rôti avec des pommes de terre frites. Comme dessert, ils prennent de la glace à la vanille et une tarte aux pommes. "
              </div>
            </div>

            {/* Dialogue Preview */}
            <div className="space-y-1.5 text-xs font-fr text-left pt-2 border-t border-slate-100 bg-[#FAF8F5] p-3 rounded-xl">
              <div className="font-bold text-[#0055A4]">Dialogue au restaurant:</div>
              <div><strong className="text-slate-800">- Le serveur:</strong> Qu'est-ce que vous désirez comme plat principal ?</div>
              <div><strong className="text-slate-800">- Le client:</strong> Je voudrais du poulet avec des frites, s'il vous plaît.</div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t text-[11px] text-slate-500 font-mono">
              <div className="bg-[#FAF8F5] border border-slate-200 font-bold px-2 py-0.5 rounded-md text-[#0055A4]">
                37
              </div>
              <div>1er semestre</div>
            </div>
          </div>
        )}
      </div>

      {/* FULLSCREEN ZOOM MODAL */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/80 backdrop-blur-md">
          <div className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0055A4] bg-[#0055A4]/10 px-2.5 py-1 rounded-xl">
                  صفحة {pageNumber} الأصلية
                </span>
                <span className="text-xs font-bold text-slate-700 font-fr">
                  {unitTitleFr} · {lessonTitleFr}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Render Full Size */}
            {pageNumber === 12 ? (
              <div className="space-y-6 text-left font-fr" dir="ltr">
                <div className="text-center space-y-1">
                  <h2 className="text-3xl font-black italic text-[#0055A4]">Unité (1) Balade</h2>
                  <div className="text-xs font-bold text-[#EF4135] underline">Lis le texte puis réponds aux questions:</div>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF8F5] border-2 border-[#0055A4] text-base font-serif italic text-slate-900 leading-loose">
                  " Voici le Louvre à paris, c'est un grand musée. Devant le Louvre, on voit des touristes de toutes les nationalités : des Egyptiens, des Japonais, des Espagnols, des Américains ……. Beaucoup de touristes aiment visiter la section des antiquités égyptiennes. Pour entrer au Louvre, on passe sous la pyramide de verre qui rappelle les grandes pyramides d'Egypte. "
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-[#0055A4]">Vocabulaire & Traduction:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>• <strong>Musée:</strong> متحف</div>
                    <div>• <strong>Touristes:</strong> سياح</div>
                    <div>• <strong>Antiquités égyptiennes:</strong> آثار مصرية</div>
                    <div>• <strong>Pyramide de verre:</strong> هرم زجاجي</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-left font-fr" dir="ltr">
                <div className="text-center space-y-1">
                  <h2 className="text-3xl font-black italic text-[#0055A4]">Unité (2) Bon Appétit</h2>
                  <div className="text-xs font-bold text-[#EF4135] underline">Lis le document puis réponds aux questions:</div>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF8F5] border-2 border-[#0055A4] text-base font-serif italic text-slate-900 leading-loose">
                  " Le soir, la famille Bernard va au restaurant pour dîner. Le serveur apporte le menu. M. Bernard choisit du poisson avec du riz et de la salade verte. Sa femme préfère du poulet rôti avec des pommes de terre frites. Comme dessert, ils prennent de la glace à la vanille et une tarte aux pommes. "
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-[#0055A4]">Expressions Clés:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>• <strong>Prendre le dîner:</strong> يتناول العشاء</div>
                    <div>• <strong>Le serveur:</strong> النادل / الويتر</div>
                    <div>• <strong>Comme plat principal:</strong> كطبق رئيسي</div>
                    <div>• <strong>Comme dessert:</strong> كتحلية</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
