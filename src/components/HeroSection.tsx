import React from 'react';
import { ArrowRight, MessageSquareText, Shield, BookOpen, Compass, HeartHandshake, Heart } from 'lucide-react';
const heroStudentsImg = "/images/hero_students_custom.jpg";

// 1. Simpan Inline SVG Data-URI pattern di luar komponen
const ISLAMIC_PATTERN_DATA_URI = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3CradialGradient id='starGlow' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23fdaa3d' stop-opacity='0.25'/%3E%3Cstop offset='100%25' stop-color='%23c87a1e' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='50' cy='50' r='22' fill='url(%23starGlow)'/%3E%3Cpath d='M50 18 L59 31 L73 27 L69 41 L82 50 L69 59 L73 73 L59 69 L50 82 L41 69 L27 73 L31 59 L18 50 L31 41 L27 27 L41 31 Z' fill='%23f1e8d4' fill-opacity='0.65' stroke='%23c87a1e' stroke-width='1' stroke-opacity='0.35'/%3E%3Crect x='37' y='37' width='26' height='26' rx='2' fill='%23fbf7ee' fill-opacity='0.9' stroke='%230a3622' stroke-width='0.9' stroke-opacity='0.25'/%3E%3Crect x='37' y='37' width='26' height='26' rx='2' transform='rotate(45 50 50)' fill='%23fbf7ee' fill-opacity='0.9' stroke='%230a3622' stroke-width='0.9' stroke-opacity='0.25'/%3E%3Ccircle cx='50' cy='50' r='5.5' fill='%23c87a1e' fill-opacity='0.2' stroke='%23c87a1e' stroke-opacity='0.4' stroke-width='0.9'/%3E%3Ccircle cx='50' cy='50' r='1.8' fill='%230a3622' fill-opacity='0.5'/%3E%3Cg stroke='%23c87a1e' stroke-width='0.9' stroke-opacity='0.28' fill='%23f1e8d4' fill-opacity='0.65'%3E%3Cpath d='M0 0 L9 13 L23 9 L19 23 L32 32 L19 41 L23 55 L9 51 L0 64 L-9 51 L-23 55 L-19 41 L-32 32 L-19 23 L-23 9 L-9 13 Z' /%3E%3Cpath d='M100 0 L109 13 L123 9 L119 23 L132 32 L119 41 L123 55 L109 51 L100 64 L91 51 L77 55 L81 41 L68 32 L81 23 L77 9 L91 13 Z' /%3E%3Cpath d='M0 100 L9 113 L23 109 L19 123 L32 132 L19 141 L23 155 L9 151 L0 164 L-9 151 L-23 155 L-19 141 L-32 132 L-19 123 L-23 109 L-9 113 Z' /%3E%3Cpath d='M100 100 L109 113 L123 109 L119 123 L132 132 L119 141 L123 155 L109 151 L100 164 L91 151 L77 155 L81 141 L68 132 L81 123 L77 109 L91 113 Z' /%3E%3C/g%3E%3Cpath d='M0 50 Q25 45 50 50 T100 50' stroke='%230a3622' stroke-width='0.7' stroke-opacity='0.15'/%3E%3Cpath d='M50 0 Q45 25 50 50 T50 100' stroke='%230a3622' stroke-width='0.7' stroke-opacity='0.15'/%3E%3Cpath d='M0 0 L100 100' stroke='%23c87a1e' stroke-width='0.6' stroke-opacity='0.12' stroke-dasharray='3 3'/%3E%3Cpath d='M100 0 L0 100' stroke='%23c87a1e' stroke-width='0.6' stroke-opacity='0.12' stroke-dasharray='3 3'/%3E%3C/g%3E%3C/svg%3E`;

interface HeroSectionProps {
  onOpenVisit: () => void;
  onOpenConsultation: () => void;
  onOpenPPDB: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVisit,
  onOpenConsultation,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#fbf7ee] pt-8 pb-16 lg:py-16">
      
      {/* 2. Pasang Data-URI pattern ke style background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-25"
        style={{
          backgroundColor: '#FAF6EE',
          backgroundImage: `url("${ISLAMIC_PATTERN_DATA_URI}")`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* 3. Delicate Radial Ambient Glows for Warmth & Depth */}
      <div className="absolute top-0 right-1/4 w-125 h-125 bg-[#fdaa3d]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-10 w-112.5 h-112.5 bg-[#0a3622]/8 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/3 w-87.5 h-87.5 bg-[#c87a1e]/8 rounded-full blur-3xl pointer-events-none z-0" />

      {/* 4. Top Elaborate Islamic Ornamental Border Ribbon */}
      <div className="absolute top-0 inset-x-0 h-3 bg-linear-to-r from-[#001f11] via-[#c87a1e] to-[#001f11] opacity-85 z-10 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="w-full h-full opacity-40 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />
      </div>

      {/* 5. Four Ornate Islamic Corner Cartouches (Arabesque Flourishes) */}
      {/* Top-Left Corner Arabesque */}
      <div className="absolute top-3 left-3 w-20 h-20 sm:w-28 sm:h-28 text-[#c87a1e] opacity-35 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L40,0 C30,10 25,25 25,40 C25,25 10,30 0,40 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M0,0 L0,80 C10,60 25,50 45,45 C25,40 15,25 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M0,0 L80,0 C60,10 50,25 45,45 C40,25 25,15 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="18" r="4" fill="#0a3622" fillOpacity="0.5" />
          <path d="M5,5 Q40,10 50,50 Q10,40 5,5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        </svg>
      </div>

      {/* Top-Right Corner Arabesque */}
      <div className="absolute top-3 right-3 w-20 h-20 sm:w-28 sm:h-28 text-[#c87a1e] opacity-35 pointer-events-none z-0 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L40,0 C30,10 25,25 25,40 C25,25 10,30 0,40 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M0,0 L0,80 C10,60 25,50 45,45 C25,40 15,25 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M0,0 L80,0 C60,10 50,25 45,45 C40,25 25,15 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="18" r="4" fill="#0a3622" fillOpacity="0.5" />
          <path d="M5,5 Q40,10 50,50 Q10,40 5,5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        </svg>
      </div>

      {/* Bottom-Left Corner Arabesque */}
      <div className="absolute bottom-3 left-3 w-20 h-20 sm:w-28 sm:h-28 text-[#c87a1e] opacity-35 pointer-events-none z-0 transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L40,0 C30,10 25,25 25,40 C25,25 10,30 0,40 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M0,0 L0,80 C10,60 25,50 45,45 C25,40 15,25 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M0,0 L80,0 C60,10 50,25 45,45 C40,25 25,15 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="18" r="4" fill="#0a3622" fillOpacity="0.5" />
          <path d="M5,5 Q40,10 50,50 Q10,40 5,5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        </svg>
      </div>

      {/* Bottom-Right Corner Arabesque */}
      <div className="absolute bottom-3 right-3 w-20 h-20 sm:w-28 sm:h-28 text-[#c87a1e] opacity-35 pointer-events-none z-0 transform scale-[-1]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 L40,0 C30,10 25,25 25,40 C25,25 10,30 0,40 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M0,0 L0,80 C10,60 25,50 45,45 C25,40 15,25 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M0,0 L80,0 C60,10 50,25 45,45 C40,25 25,15 0,0 Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="18" cy="18" r="4" fill="#0a3622" fillOpacity="0.5" />
          <path d="M5,5 Q40,10 50,50 Q10,40 5,5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        </svg>
      </div>

      {/* 6. Islamic Star Illuminated Watermark in negative background space */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 text-[#c87a1e] opacity-[0.07] pointer-events-none z-0">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse" style={{ animationDuration: '8s' }}>
          <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <rect x="25" y="25" width="70" height="70" stroke="currentColor" strokeWidth="2" />
          <rect x="25" y="25" width="70" height="70" transform="rotate(45 60 60)" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="60" r="22" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="6" fill="currentColor" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Copy & CTAs) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Islamic Bismillah Calligraphy & Header Flourish */}
            <div className="flex items-center gap-2.5 select-none pt-1">
              <div className="h-px w-8 bg-linear-to-r from-transparent to-[#c87a1e]" />
              <span 
                className="text-[#c87a1e] font-serif text-sm sm:text-base tracking-widest opacity-90 font-medium"
                title="Bismillahir Rahmanir Rahim"
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
              <div className="h-px w-8 bg-linear-to-l from-transparent to-[#c87a1e]" />
            </div>

            {/* Headline matching exact reference */}
            <div className="space-y-1">
              <h1 className="font-serif-title text-[#001f11] text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] font-bold tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                Menumbuhkan <br />
                <span className="text-[#001f11]">Adab, </span>
                <span className="text-[#c87a1e] italic">Ilmu,</span> <br />
                <span className="text-[#001f11]">dan Kemandirian</span>
              </h1>
            </div>

            {/* Subtitle / Paragraph */}
            <p className="font-worksans text-[#303833] text-base sm:text-lg leading-relaxed max-w-xl font-medium">
              MI Asih Putera mendampingi anak menjadi pribadi beriman, bernalar,
              percaya diri, tangguh, dan bermanfaat melalui pendidikan yang
              berlandaskan tauhid, keteladanan, pembelajaran bermakna, dan
              pengalaman hidup nyata.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                id="btn-kunjungi-sekolah"
                onClick={onOpenVisit}
                className="bg-[#0a3622] hover:bg-[#001f11] active:scale-95 text-white font-manrope font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg flex items-center gap-2 transition-all cursor-pointer group border border-[#fdaa3d]/30"
              >
                <span>Kunjungi Sekolah</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                id="btn-konsultasi-ppdb"
                onClick={onOpenConsultation}
                className="bg-white hover:bg-[#fbf7ee] active:scale-95 text-[#1c1c18] font-manrope font-medium text-sm sm:text-base px-6 py-3.5 rounded-lg border border-[#c87a1e]/40 shadow-xs flex items-center gap-2 transition-all cursor-pointer hover:border-[#c87a1e]"
              >
                <span>Konsultasi PPDB</span>
                <MessageSquareText className="w-4 h-4 text-[#c87a1e]" />
              </button>
            </div>

            {/* 4 Feature Tags Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#c87a1e]/25">
              <div className="flex items-center gap-2 text-[#414943]">
                <div className="w-8 h-8 rounded-lg bg-[#f4ebd9] border border-[#c87a1e]/25 flex items-center justify-center text-[#c87a1e] shrink-0 shadow-2xs">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-xs font-manrope font-semibold leading-tight text-[#1c1c18]">
                  Berbasis Tauhid dan Akhlak
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#414943]">
                <div className="w-8 h-8 rounded-lg bg-[#f4ebd9] border border-[#c87a1e]/25 flex items-center justify-center text-[#c87a1e] shrink-0 shadow-2xs">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-xs font-manrope font-semibold leading-tight text-[#1c1c18]">
                  Akademik Bermakna
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#414943]">
                <div className="w-8 h-8 rounded-lg bg-[#f4ebd9] border border-[#c87a1e]/25 flex items-center justify-center text-[#c87a1e] shrink-0 shadow-2xs">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-xs font-manrope font-semibold leading-tight text-[#1c1c18]">
                  Life Skills Pengalaman Nyata
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#414943]">
                <div className="w-8 h-8 rounded-lg bg-[#f4ebd9] border border-[#c87a1e]/25 flex items-center justify-center text-[#c87a1e] shrink-0 shadow-2xs">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <span className="text-xs font-manrope font-semibold leading-tight text-[#1c1c18]">
                  Kemitraan Orang Tua
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (Hero Photo Collage with Arched Window & Islamic Frame) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-120">
              
              {/* Decorative Islamic Arch Halo / Outline behind the photo */}
              <div className="absolute -inset-2.5 rounded-t-[148px] rounded-b-3xl border-2 border-dashed border-[#c87a1e]/40 pointer-events-none" />

              {/* Arched Top Hero Image Frame */}
              <div className="relative overflow-hidden rounded-t-[140px] rounded-b-2xl border-4 border-white shadow-2xl bg-[#0a3622]/10 aspect-[4/5] w-full">
                <img
                  src={heroStudentsImg}
                  alt="Siswa Siswi MI Asih Putera Belajar Bersama"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-2 sm:-right-4 bg-[#0a3622] text-white py-3 px-5 rounded-xl shadow-xl border border-[#fdaa3d]/60 flex items-center gap-3 z-20">
                <div className="w-8 h-8 rounded-full bg-[#fdaa3d] flex items-center justify-center text-[#001f11] shrink-0 shadow-xs">
                  <Heart className="w-4 h-4 fill-current text-[#001f11]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-manrope font-bold text-white leading-tight">
                    Belajar dengan Hati,
                  </p>
                  <p className="text-xs font-manrope font-semibold text-[#fdaa3d] leading-tight">
                    Bertumbuh dengan Makna
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Elaborate Islamic Ornamental Border Ribbon */}
      <div className="absolute bottom-0 inset-x-0 h-2 bg-linear-to-r from-[#001f11] via-[#c87a1e] to-[#001f11] opacity-75 z-10 pointer-events-none" />
    </section>
  );
};