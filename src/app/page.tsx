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

  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FeaturedProgramsSection />
      <SixPillarsSection />
      <KeyOutcomesSection />
      <StudentGrowthSection />
      <LatestNewsSection />
      <TestimonialsAndFaqSection />
      <FooterSection />
    </main>
  );
}
