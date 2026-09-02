"use client";

import { useEffect, useState } from "react";
import { TopBar } from "../components/TopBar";
import Navbar from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { StatsBar } from "../components/StatsBar";
import FeaturedProgramsSection from "../components/FeaturedProgramsSection";
import { SixPillarsSection } from "../components/SixPillarsSection";
import { KeyOutcomesSection } from "../components/KeyOutcomesSection";
import { StudentGrowthSection } from "../components/StudentGrowthSection";
import { LatestNewsSection } from "../components/LatestNewsSection";
import { TestimonialsAndFaqSection } from "../components/TestimonialsAndFaqSection";
import FooterSection from "../components/FooterSection";

// api
import { loginService } from "../services/loginService";

export default function Home() {
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    loginService
      .login()
      .catch((error: unknown) => {
        console.error("Login failed:", error);
      })
      .finally(() => setAuthReady(true));
  }, []);

  if (!authReady) {
    return <main className="min-h-screen bg-white" />;
  }

  // Tambahkan fungsi untuk menangani perpindahan section
  const handleNavigateSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenVisit = () => {
    // Handle visit modal
  };

  const handleOpenConsultation = () => {
    // Handle consultation modal
  };

  const handleOpenPPDB = () => {
    // Handle PPDB modal
  };

  const handleViewAllPrograms = () => {
    handleNavigateSection("programs");
  };

  const handleOpenAllTestimonials = () => {
    // Handle all testimonials modal
  };

  const handleOpenAllFaqs = () => {
    // Handle all FAQs modal
  };

  const handleOpenPrivacy = () => {
    // Handle privacy modal
  };

  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      {/* Kirim fungsinya ke Navbar */}
      <Navbar onNavigateSection={handleNavigateSection} />

      {/* Pastikan setiap section punya ID yang sesuai */}
      <div id="hero">
        <HeroSection
          onOpenVisit={handleOpenVisit}
          onOpenConsultation={handleOpenConsultation}
          onOpenPPDB={handleOpenPPDB}
        />
      </div>
      <StatsBar />
      <div id="programs">
        <FeaturedProgramsSection onViewAllPrograms={handleViewAllPrograms} />
      </div>
      <div id="pillars">
        <SixPillarsSection />
      </div>
      <div id="outcomes">
        <KeyOutcomesSection />
      </div>
      <div id="growth">
        <StudentGrowthSection
          onOpenStories={handleOpenVisit}
          onOpenConsultation={handleOpenConsultation}
        />
      </div>
      <div id="berita">
        <LatestNewsSection />
      </div>
      <div id="faq">
        <TestimonialsAndFaqSection
          onOpenAllTestimonials={handleOpenAllTestimonials}
          onOpenAllFaqs={handleOpenAllFaqs}
        />
      </div>
      <div id="footer">
        <FooterSection
          onNavigateSection={handleNavigateSection}
          onOpenPrivacy={handleOpenPrivacy}
        />
      </div>
    </main>
  );
}
