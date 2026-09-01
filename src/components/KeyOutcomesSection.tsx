import React from 'react';
import { Heart, BookOpen, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { OUTCOMES_DATA } from '../data';

export const KeyOutcomesSection: React.FC = () => {
  const getOutcomeIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart':
        return <Heart className="w-5 h-5 fill-current" />;
      case 'book':
        return <BookOpen className="w-5 h-5 stroke-current" />;
      case 'cap':
        return <GraduationCap className="w-5 h-5 stroke-current" />;
      case 'handHeart':
        return <Sparkles className="w-5 h-5 stroke-current" />;
      default:
        return <CheckCircle2 className="w-5 h-5 stroke-current" />;
    }
  };

  return (
    <section id="outcomes" className="py-16 sm:py-20 bg-islamic-girih relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[#001f11] tracking-tight">
            4 Hasil Utama Pendidikan di MI Asih Putera
          </h2>
        </div>

        {/* 4 Cards Grid - Modern International Standard with Thematic Image Backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OUTCOMES_DATA.map((outcome, index) => (
            <div
              key={outcome.id}
              className="group relative overflow-hidden rounded-2xl min-h-[380px] flex flex-col justify-between p-6 sm:p-7 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 border border-[#001f11]/10"
            >
              {/* Dynamic Thematic Background Image */}
              {outcome.image && (
                <img
                  src={outcome.image}
                  alt={outcome.title}
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-108 transition-transform duration-700 ease-out z-0 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              )}

              {/* Multi-layered Dark Gradient Overlay for Maximum Readability */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#00170c]/98 via-[#001f11]/85 to-[#00170c]/55 group-hover:from-[#00170c]/95 group-hover:via-[#001f11]/75 transition-colors duration-500 z-1" 
              />
              
              {/* Subtle Decorative Geometric Pattern Tint on Hover */}
              <div className="absolute inset-0 bg-islamic-hero-rich opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none z-2" />

              {/* Card Top: Tag / Number & Glassmorphic Icon */}
              <div className="relative z-10 flex items-start justify-between">
                {/* Icon Container with Frosted Glass styling */}
                <div className="w-12 h-12 rounded-xl backdrop-blur-md bg-white/15 border border-white/25 flex items-center justify-center text-[#fdaa3d] shadow-lg group-hover:bg-[#fdaa3d] group-hover:text-[#001f11] group-hover:border-[#fdaa3d] transition-all duration-300">
                  {getOutcomeIcon(outcome.iconName)}
                </div>

                {/* Index Pill */}
                <span className="text-xs font-mono font-bold tracking-widest text-white/60 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                  0{index + 1}
                </span>
              </div>

              {/* Card Bottom: Title, Subtitle, & Crisp Description */}
              <div className="relative z-10 pt-16">
                {outcome.subtitle && (
                  <span className="inline-block text-[11px] font-manrope font-semibold tracking-wider uppercase text-[#fdaa3d] mb-1.5 opacity-90">
                    {outcome.subtitle}
                  </span>
                )}
                
                <h3 className="font-manrope font-bold text-xl sm:text-[22px] text-white mb-2.5 tracking-tight group-hover:text-[#fdaa3d] transition-colors drop-shadow-sm">
                  {outcome.title}
                </h3>
                
                <p className="font-worksans text-[13.5px] sm:text-sm text-white/85 leading-relaxed drop-shadow-sm">
                  {outcome.description}
                </p>

                {/* Bottom decorative golden indicator line */}
                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/70 font-medium">
                  <span className="group-hover:text-white transition-colors">Pendidikan Holistik</span>
                  <div className="w-6 h-[2px] bg-[#fdaa3d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

