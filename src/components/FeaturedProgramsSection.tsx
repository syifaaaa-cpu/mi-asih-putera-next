"use client";
import React from 'react';
import { ArrowRight, BookOpenCheck } from 'lucide-react';
import { FEATURED_PROGRAMS } from '../data';

interface FeaturedProgramsSectionProps {
  onViewAllPrograms: () => void;
  onSelectProgram?: (title: string) => void;
}

export default function FeaturedProgramsSection({
  onViewAllPrograms,
  onSelectProgram,
}: FeaturedProgramsSectionProps) {
  return (
    <section id="programs" className="py-16 sm:py-20 bg-islamic-girih relative">
      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[#001f11] tracking-tight">
            Program Unggulan yang Menghidupkan Nilai
          </h2>
        </div>

        {/* 5 Cards Responsive Grid (4 program cards + 1 solid dark green CTA card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {FEATURED_PROGRAMS.map((program) => (
            <div
              key={program.id}
              onClick={() => onSelectProgram && onSelectProgram(program.title)}
              className="bg-white rounded-xl overflow-hidden border border-[#e8e4dc] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer group"
            >
              {/* Card Image */}
              <div className="aspect-4/3 w-full overflow-hidden bg-[#f0eee7]">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-manrope font-bold text-base text-[#001f11] mb-2 leading-snug group-hover:text-[#c87a1e] transition-colors">
                    {program.title}
                  </h3>
                  <p className="font-worksans text-xs sm:text-[13px] text-[#414943] leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* 5th Card: Solid Dark Green "Lihat Semua Pendidikan" Card */}
          <div
            onClick={onViewAllPrograms}
            className="bg-[#0a3622] hover:bg-[#001f11] rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 shadow-md group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#fdaa3d] mb-4 group-hover:scale-110 transition-transform">
              <BookOpenCheck className="w-6 h-6 stroke-current" />
            </div>

            <h3 className="font-manrope font-bold text-base text-white mb-3">
              Lihat Semua Pendidikan
            </h3>

            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#fdaa3d] group-hover:bg-[#fdaa3d] group-hover:text-[#001f11] transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}