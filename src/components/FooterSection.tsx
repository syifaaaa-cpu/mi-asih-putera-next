"use client";
import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, Globe, Video } from 'lucide-react';
import { MIAsihPuteraLogo } from './MIAsihPuteraLogo';


interface FooterSectionProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenPrivacy: (title: string) => void;
}

export default function FooterSection({
  onNavigateSection,
  onOpenPrivacy,
}: FooterSectionProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer id="footer" className="bg-[#001f11] text-[#e0e8e3] bg-dark-lattice pt-16 pb-8 border-t border-[#0a3622]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#0a3622]">
          
          {/* Column 1: Brand & Socials (span 4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* White Logo Card */}
            <div className="inline-flex items-center bg-white px-4 py-2.5 rounded-xl shadow-md border border-white/20">
              <MIAsihPuteraLogo className="h-8 sm:h-9 w-auto" textColor="#0d7e62" />
            </div>

            <p className="font-worksans text-xs sm:text-[13px] text-[#a4d1b4] leading-relaxed max-w-sm">
              Mendidik dengan Sepenuh Hati. Bagian dari ekosistem pendidikan Asih Putera: Daycare, TK, MI, MTs, dan MA.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#0a3622] hover:bg-[#c87a1e] flex items-center justify-center text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Youtube"
                className="w-8 h-8 rounded-full bg-[#0a3622] hover:bg-[#c87a1e] flex items-center justify-center text-white transition-colors"
              >
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Tautan Cepat (span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-manrope font-bold text-sm text-[#fdaa3d] uppercase tracking-wider">
              Tautan Cepat
            </h4>
            <ul className="space-y-2 text-xs font-worksans text-[#e0e8e3]">
              <li>
                <button
                  onClick={() => onNavigateSection('hero')}
                  className="hover:text-[#fdaa3d] transition-colors cursor-pointer"
                >
                  Profil MI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('pillars')}
                  className="hover:text-[#fdaa3d] transition-colors cursor-pointer"
                >
                  Kurikulum
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('programs')}
                  className="hover:text-[#fdaa3d] transition-colors cursor-pointer"
                >
                  Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('growth')}
                  className="hover:text-[#fdaa3d] transition-colors cursor-pointer"
                >
                  Kesiswaan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('programs')}
                  className="hover:text-[#fdaa3d] transition-colors cursor-pointer"
                >
                  Galeri
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('faq')}
                  className="hover:text-[#fdaa3d] transition-colors cursor-pointer"
                >
                  Informasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('footer')}
                  className="hover:text-[#fdaa3d] transition-colors cursor-pointer"
                >
                  Hubungi
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Program Unggulan (span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-manrope font-bold text-sm text-[#fdaa3d] uppercase tracking-wider">
              Program Unggulan
            </h4>
            <ul className="space-y-2 text-xs font-worksans text-[#e0e8e3]">
              <li>
                <button
                  onClick={() => onNavigateSection('programs')}
                  className="hover:text-[#fdaa3d] transition-colors text-left cursor-pointer"
                >
                  Tahfiz & Adab Harian
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('programs')}
                  className="hover:text-[#fdaa3d] transition-colors text-left cursor-pointer"
                >
                  Project-Based Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('programs')}
                  className="hover:text-[#fdaa3d] transition-colors text-left cursor-pointer"
                >
                  Babakti ka Sepuh
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('programs')}
                  className="hover:text-[#fdaa3d] transition-colors text-left cursor-pointer"
                >
                  City Survival & Life Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('programs')}
                  className="hover:text-[#fdaa3d] transition-colors text-left cursor-pointer"
                >
                  Outdoor Learning
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Informasi Kontak & Newsletter (span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-manrope font-bold text-sm text-[#fdaa3d] uppercase tracking-wider">
              Informasi Kontak
            </h4>
            
            <div className="space-y-2 text-xs font-worksans text-[#e0e8e3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#fdaa3d] shrink-0 mt-0.5" />
                <span>
                  Jl. P. Cibebat No. 33, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40513
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#fdaa3d] shrink-0" />
                <a href="tel:02212345678" className="hover:text-[#fdaa3d] transition-colors">
                  (022) 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#fdaa3d] shrink-0" />
                <a href="mailto:info@asihputera.sch.id" className="hover:text-[#fdaa3d] transition-colors">
                  info@asihputera.sch.id
                </a>
              </div>
            </div>

            {/* Newsletter section */}
            <div className="pt-2">
              <h5 className="font-manrope font-semibold text-xs text-white mb-1.5">
                Newsletter
              </h5>
              <p className="font-worksans text-[11px] text-[#a4d1b4] mb-3">
                Dapatkan informasi terbaru seputar kegiatan dan program MI Asih Putera.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0a3622] text-[#fdaa3d] text-xs font-manrope">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Terima kasih telah berlangganan!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center max-w-sm">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email Anda"
                    className="w-full px-3.5 py-2.5 text-xs text-[#1c1c18] bg-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#fdaa3d]"
                  />
                  <button
                    type="submit"
                    aria-label="Submit Newsletter"
                    className="bg-[#c87a1e] hover:bg-[#b56b15] text-white px-3.5 py-2.5 rounded-r-lg transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#75a085] gap-4">
          <p>© 2026 Yayasan Asih Putera. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onOpenPrivacy('Kebijakan Privasi')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Kebijakan Privasi
            </button>
            <span>|</span>
            <button
              onClick={() => onOpenPrivacy('Syarat & Ketentuan')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Syarat & Ketentuan
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}