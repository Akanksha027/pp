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
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Global Background Video */}
      <video
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.6, // Dim the video slightly so text remains readable
          pointerEvents: "none",
        }}
      />
      
      {/* The rest of the landing page content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <CustomCursor />
        <LandingHero />
        <LandingStats />
        <LandingSkills />
        <LandingPractice />
        <LandingTestimonials />
        <LandingFaq />
        <LetsConnect />
        <Footer />
      </div>
    </div>
  );
}
