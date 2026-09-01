/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { KeyOutcomesSection } from './components/KeyOutcomesSection';
import { SixPillarsSection } from './components/SixPillarsSection';
import { FeaturedProgramsSection } from './components/FeaturedProgramsSection';
import { StudentGrowthSection } from './components/StudentGrowthSection';
import { LatestNewsSection } from './components/LatestNewsSection';
import { TestimonialsAndFaqSection } from './components/TestimonialsAndFaqSection';
import { FooterSection } from './components/FooterSection';
import { IslamicDivider } from './components/IslamicDivider';
import {
  PPDBModal,
  SchoolVisitModal,
  ConsultationModal,
  AllFaqModal,
  AllTestimonialsModal,
} from './components/Modals';

export default function App() {
  const [isPPDBOpen, setIsPPDBOpen] = useState(false);
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isAllFaqOpen, setIsAllFaqOpen] = useState(false);
  const [isAllTestimonialsOpen, setIsAllTestimonialsOpen] = useState(false);
  const [portalModal, setPortalModal] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#1c1c18] font-worksans flex flex-col selection:bg-[#0a3622] selection:text-white">
      {/* 1. Top Utility Header */}
      <TopBar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenPortal={(title) => setPortalModal(title)}
      />

      {/* 2. Primary Navigation Bar */}
      <Navbar
        onOpenPPDB={() => setIsPPDBOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenVisit={() => setIsVisitOpen(true)}
        onNavigateSection={scrollToSection}
      />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection
          onOpenVisit={() => setIsVisitOpen(true)}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenPPDB={() => setIsPPDBOpen(true)}
        />

        {/* 4. Stats Counter Bar */}
        <StatsBar />

        {/* 5. 4 Key Outcomes Section */}
        <KeyOutcomesSection />

        <IslamicDivider />

        {/* 6. 6 Pillars of Education Section */}
        <SixPillarsSection
          onSelectPillar={(title) => {
            setIsConsultationOpen(true);
          }}
        />

        <IslamicDivider />

        {/* 7. Featured Programs Section */}
        <FeaturedProgramsSection
          onViewAllPrograms={() => setIsPPDBOpen(true)}
          onSelectProgram={(title) => setIsConsultationOpen(true)}
        />

        {/* 8. Student Growth Story & Mentorship Pipeline */}
        <StudentGrowthSection
          onOpenStories={() => setIsAllTestimonialsOpen(true)}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        <IslamicDivider />

        {/* 9. Latest News & Activities Section (Berita & Kegiatan Islami) */}
        <LatestNewsSection />

        <IslamicDivider />

        {/* 10. Parent Testimonials & FAQ Section */}
        <TestimonialsAndFaqSection
          onOpenAllTestimonials={() => setIsAllTestimonialsOpen(true)}
          onOpenAllFaqs={() => setIsAllFaqOpen(true)}
        />
      </main>

      {/* 11. Footer Section */}
      <FooterSection
        onNavigateSection={scrollToSection}
        onOpenPrivacy={(title) => setPortalModal(title)}
      />

      {/* Interactive Modals */}
      <PPDBModal
        isOpen={isPPDBOpen}
        onClose={() => setIsPPDBOpen(false)}
      />

      <SchoolVisitModal
        isOpen={isVisitOpen}
        onClose={() => setIsVisitOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <AllFaqModal
        isOpen={isAllFaqOpen}
        onClose={() => setIsAllFaqOpen(false)}
      />

      <AllTestimonialsModal
        isOpen={isAllTestimonialsOpen}
        onClose={() => setIsAllTestimonialsOpen(false)}
      />

      {/* Generic Info / Legal / Portal Modal */}
      {portalModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#e8e4dc] animate-in zoom-in-95">
            <h3 className="font-manrope font-extrabold text-xl text-[#001f11] mb-2">
              {portalModal}
            </h3>
            <p className="font-worksans text-sm text-[#414943] leading-relaxed mb-6">
              Layanan <strong>{portalModal}</strong> MI Asih Putera Cimahi saat ini dapat diakses secara terintegrasi melalui sekretariat madrasah atau hubungi narahubung kami di <strong>(022) 1234 5678</strong>.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setPortalModal(null)}
                className="px-5 py-2.5 bg-[#0a3622] text-white font-manrope font-bold text-xs rounded-xl hover:bg-[#001f11] transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
