"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    loginService.login();
  }, []); 

  // Tambahkan fungsi untuk menangani perpindahan section
  const handleNavigateSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      {/* Kirim fungsinya ke Navbar */}
      <Navbar onNavigateSection={handleNavigateSection} />
      
      {/* Pastikan setiap section punya ID yang sesuai */}
      <div id="hero"><HeroSection /></div>
      <StatsBar />
      <div id="programs"><FeaturedProgramsSection /></div>
      <div id="pillars"><SixPillarsSection /></div>
      <div id="outcomes"><KeyOutcomesSection /></div>
      <div id="growth"><StudentGrowthSection /></div>
      <div id="berita"><LatestNewsSection /></div>
      <div id="faq"><TestimonialsAndFaqSection /></div>
      <div id="footer"><FooterSection /></div>
    </main>
  );
}