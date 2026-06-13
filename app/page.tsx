import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { WebProjectsSection } from "@/components/web-projects-section"
import { MobileProjectsSection } from "@/components/mobile-projects-section"
import { AIProjectsSection } from "@/components/ai-projects-section"
import { TechnicalPaletteSection } from "@/components/technical-palette-section"
import { PaletteDetailSection } from "@/components/palette-detail-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { TechnicalSkillsSection } from "@/components/technical-skills-section"
import { ContactCTASection } from "@/components/contact-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WebProjectsSection />
      <MobileProjectsSection />
      <AIProjectsSection />
      <TechnicalPaletteSection />
      <PaletteDetailSection />
      <PhilosophySection />
      <TechnicalSkillsSection />
      <ContactCTASection />
      <Footer />
    </div>
  )
}
