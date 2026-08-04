import { LetsConnect } from "@/components/LetsConnect";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingSkills } from "@/components/landing/LandingSkills";

export function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <CustomCursor />
      <LandingHero />
      <LandingSkills />
      <LandingFaq />
      <LetsConnect />
      <Footer />
    </div>
  );
}
