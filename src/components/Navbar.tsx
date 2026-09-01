"use client";
import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { MIAsihPuteraLogo } from './MIAsihPuteraLogo';

interface NavbarProps {
  onOpenPPDB?: () => void;
  onOpenConsultation?: () => void;
  onOpenVisit?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export default function Navbar({
  onOpenPPDB,
  onOpenConsultation,
  onOpenVisit,
  onNavigateSection,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fcf9f2]/95 backdrop-blur-md border-b border-[#e8e4dc] transition-all">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <div 
          onClick={() => onNavigateSection('hero')}
          className="flex items-center cursor-pointer group py-1.5 shrink-0"
        >
          <MIAsihPuteraLogo className="h-10 sm:h-11 md:h-12 w-auto transition-transform group-hover:scale-[1.02]" textColor="#0d7e62" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[14px] font-manrope font-semibold text-[#1c1c18]">
          {/* Dropdown: Profil MI */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('profil')}
              className="flex items-center gap-1 px-3 py-2 text-[#1c1c18] hover:text-[#0a3622] rounded-md transition-colors"
            >
              <span>Profil MI</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#717972] group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="w-52 bg-white rounded-xl shadow-lg border border-[#e8e4dc] p-2 space-y-1">
                <button
                  onClick={() => onNavigateSection('outcomes')}
                  className="w-full text-left px-3 py-2 text-sm text-[#1c1c18] hover:bg-[#f6f3ec] hover:text-[#0a3622] rounded-lg transition-colors font-medium"
                >
                  Visi, Misi & 4 Hasil
                </button>
                <button
                  onClick={() => onNavigateSection('pillars')}
                  className="w-full text-left px-3 py-2 text-sm text-[#1c1c18] hover:bg-[#f6f3ec] hover:text-[#0a3622] rounded-lg transition-colors font-medium"
                >
                  6 Pilar Pendidikan
                </button>
                <button
                  onClick={() => onNavigateSection('growth')}
                  className="w-full text-left px-3 py-2 text-sm text-[#1c1c18] hover:bg-[#f6f3ec] hover:text-[#0a3622] rounded-lg transition-colors font-medium"
                >
                  Pendampingan Siswa
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateSection('pillars')}
            className="px-3 py-2 text-[#1c1c18] hover:text-[#0a3622] rounded-md transition-colors cursor-pointer"
          >
            Kurikulum
          </button>

          {/* Dropdown: Program */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('program')}
              className="flex items-center gap-1 px-3 py-2 text-[#1c1c18] hover:text-[#0a3622] rounded-md transition-colors"
            >
              <span>Program</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#717972] group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="w-56 bg-white rounded-xl shadow-lg border border-[#e8e4dc] p-2 space-y-1">
                <button
                  onClick={() => onNavigateSection('programs')}
                  className="w-full text-left px-3 py-2 text-sm text-[#1c1c18] hover:bg-[#f6f3ec] hover:text-[#0a3622] rounded-lg transition-colors font-medium"
                >
                  Tahfidz & Tauhid Akhlak
                </button>
                <button
                  onClick={() => onNavigateSection('programs')}
                  className="w-full text-left px-3 py-2 text-sm text-[#1c1c18] hover:bg-[#f6f3ec] hover:text-[#0a3622] rounded-lg transition-colors font-medium"
                >
                  Project-Based Learning
                </button>
                <button
                  onClick={() => onNavigateSection('programs')}
                  className="w-full text-left px-3 py-2 text-sm text-[#1c1c18] hover:bg-[#f6f3ec] hover:text-[#0a3622] rounded-lg transition-colors font-medium"
                >
                  City Survival & Life Skills
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateSection('pillars')}
            className="px-3 py-2 text-[#1c1c18] hover:text-[#0a3622] rounded-md transition-colors cursor-pointer"
          >
            Pembelajaran
          </button>

          <button
            onClick={() => onNavigateSection('growth')}
            className="px-3 py-2 text-[#1c1c18] hover:text-[#0a3622] rounded-md transition-colors cursor-pointer"
          >
            Kesiswaan
          </button>

          <button
            onClick={() => onNavigateSection('programs')}
            className="px-3 py-2 text-[#1c1c18] hover:text-[#0a3622] rounded-md transition-colors cursor-pointer"
          >
            Galeri
          </button>

          <button
            onClick={() => onNavigateSection('berita')}
            className="px-3 py-2 text-[#1c1c18] hover:text-[#0a3622] rounded-md transition-colors cursor-pointer"
          >
            Berita
          </button>

          <button
            onClick={() => onNavigateSection('faq')}
            className="px-3 py-2 text-[#1c1c18] hover:text-[#0a3622] rounded-md transition-colors cursor-pointer"
          >
            Informasi
          </button>

          <button
            onClick={() => onNavigateSection('footer')}
            className="px-3 py-2 text-[#1c1c18] hover:text-[#0a3622] rounded-md transition-colors cursor-pointer"
          >
            Hubungi
          </button>
        </nav>

        {/* Right Action: PPDB 2026/2027 CTA Button */}
        <div className="flex items-center gap-3">
          <button
            id="btn-ppdb-navbar"
            onClick={onOpenPPDB}
            className="bg-[#c87a1e] hover:bg-[#b56b15] active:scale-95 text-white font-manrope font-bold text-[13px] sm:text-[14px] px-5 sm:px-6 py-2.5 rounded-full shadow-sm flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>PPDB 2026/2027</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0a3622] hover:bg-[#f0eee7] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e8e4dc] px-4 pt-2 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => { onNavigateSection('outcomes'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm font-semibold text-[#1c1c18] bg-[#fcf9f2] rounded-lg"
            >
              Profil MI
            </button>
            <button
              onClick={() => { onNavigateSection('pillars'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm font-semibold text-[#1c1c18] bg-[#fcf9f2] rounded-lg"
            >
              Kurikulum
            </button>
            <button
              onClick={() => { onNavigateSection('programs'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm font-semibold text-[#1c1c18] bg-[#fcf9f2] rounded-lg"
            >
              Program Unggulan
            </button>
            <button
              onClick={() => { onNavigateSection('growth'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm font-semibold text-[#1c1c18] bg-[#fcf9f2] rounded-lg"
            >
              Kesiswaan
            </button>
            <button
              onClick={() => { onNavigateSection('berita'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm font-semibold text-[#1c1c18] bg-[#fcf9f2] rounded-lg"
            >
              Berita & Kegiatan
            </button>
            <button
              onClick={() => { onNavigateSection('testimonials'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm font-semibold text-[#1c1c18] bg-[#fcf9f2] rounded-lg"
            >
              Testimoni
            </button>
            <button
              onClick={() => { onNavigateSection('faq'); setMobileMenuOpen(false); }}
              className="text-left px-3 py-2.5 text-sm font-semibold text-[#1c1c18] bg-[#fcf9f2] rounded-lg"
            >
              Tanya Jawab (FAQ)
            </button>
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => { onOpenPPDB(); setMobileMenuOpen(false); }}
              className="w-full bg-[#c87a1e] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <span>Daftar PPDB 2026/2027</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}