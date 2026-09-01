import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PILLARS_DATA } from '../data';

interface SixPillarsSectionProps {
  onSelectPillar?: (title: string) => void;
}

export const SixPillarsSection: React.FC<SixPillarsSectionProps> = ({ onSelectPillar }) => {
  return (
    <section id="pillars" className="py-16 sm:py-20 bg-islamic-arabesque relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[#001f11] tracking-tight">
            6 Pilar Pendidikan Asih Putera
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS_DATA.map((pillar, idx) => {
            const isGoldBadge = idx === 1;
            return (
              <div
                key={pillar.grade}
                className="bg-white rounded-2xl overflow-hidden border border-[#e8e4dc] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f0eee7]">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Grade Badge on top-left of image */}
                  <div
                    className={`absolute top-3 left-3 px-3.5 py-1.5 rounded-full text-xs font-manrope font-bold shadow-md ${
                      isGoldBadge
                        ? 'bg-[#c87a1e] text-white'
                        : 'bg-[#0a3622] text-white'
                    }`}
                  >
                    {pillar.gradeBadge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Pillar Title with Gold Arrow */}
                    <div className="flex items-center gap-2 mb-4">
                      <ArrowRight className="w-4 h-4 text-[#c87a1e]" />
                      <h3 className="font-manrope font-bold text-xl text-[#001f11]">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5">
                      {pillar.bullets.map((bullet, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="flex items-center text-sm font-worksans text-[#414943] leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1c1c18] mr-3 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {onSelectPillar && (
                    <button
                      onClick={() => onSelectPillar(pillar.title)}
                      className="mt-6 text-xs font-manrope font-bold text-[#0a3622] hover:text-[#c87a1e] flex items-center gap-1.5 transition-colors self-start cursor-pointer"
                    >
                      <span>Pelajari Selengkapnya</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
