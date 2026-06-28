import { LetsConnect } from "@/components/LetsConnect";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingStats } from "@/components/landing/LandingStats";
import { LandingSkills } from "@/components/landing/LandingSkills";
import { LandingPractice } from "@/components/landing/LandingPractice";
import { LandingTestimonials } from "@/components/landing/LandingTestimonials";

export function LandingPage() {
  return (
    <>
      <CustomCursor />
      <LandingHero />
      <LandingStats />
      <LandingSkills />
      <LandingPractice />
      <LandingTestimonials />
      <LandingFaq />
      <LetsConnect />
      <Footer />
    </>
  );
}
