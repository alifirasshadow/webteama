import HeroSection from "@/components/hero-section"
import TeamSection from "@/components/team-section"
import AnimatedTitle from "@/components/animated-title"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div id="about" className="min-h-screen py-16 md:py-24">
        <div className="container text-center">
          <AnimatedTitle text="About Us" className="text-4xl font-bold mb-4 text-brand-gold animate-text-glow" />
          <p className="text-lg text-muted-foreground">
            We are Phantom Force, a group of ambitious cybersecurity students at Iraq Cyber. We strive to explore the
            latest defensive and offensive technologies, contributing to a secure digital future for Iraq. Our mission
            is continuous learning, collaboration, and applying our knowledge to meet growing cyber challenges.
          </p>
        </div>
      </div>
      <TeamSection />
    </>
  )
}
