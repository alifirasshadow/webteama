import HeroSection from "@/components/hero-section"
import TeamSection from "@/components/team-section" // Import TeamSection
import AnimatedTitle from "@/components/animated-title" // Import AnimatedTitle
// Import other sections as they are built
// import AboutSection from "@/components/about-section"
// import ExpertiseSection from "@/components/expertise-section"
// import ProjectsSection from "@/components/projects-section"
// import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Placeholder for About section */}
      <div id="about" className="min-h-screen py-16 md:py-24">
        <div className="container text-center">
          <AnimatedTitle text="من نحن" className="text-4xl font-bold mb-4 text-brand-gold animate-text-glow" />
          <p className="text-lg text-muted-foreground">سيتم إضافة تفاصيل قسم "من نحن" هنا قريبًا.</p>
        </div>
      </div>
      <TeamSection /> {/* Add TeamSection here */}
      {/* Placeholder for other sections - ensure they have an id for navigation */}
      <div id="expertise" className="min-h-screen py-16 md:py-24">
        <div className="container text-center">
          <AnimatedTitle text="خبراتنا" className="text-4xl font-bold mb-4 text-brand-gold animate-text-glow" />
          <p className="text-lg text-muted-foreground">سيتم عرض خبرات الفريق هنا.</p>
        </div>
      </div>
      <div id="projects" className="min-h-screen py-16 md:py-24 bg-brand-grey">
        <div className="container text-center">
          <AnimatedTitle text="مشاريعنا" className="text-4xl font-bold mb-4 text-brand-gold-light animate-text-glow" />
          <p className="text-lg text-muted-foreground">سيتم عرض مشاريع الفريق هنا.</p>
        </div>
      </div>
      <div id="contact" className="min-h-screen py-16 md:py-24">
        <div className="container text-center">
          <AnimatedTitle text="تواصل معنا" className="text-4xl font-bold mb-4 text-brand-gold animate-text-glow" />
          <p className="text-lg text-muted-foreground">سيتم إضافة نموذج التواصل هنا.</p>
        </div>
      </div>
    </>
  )
}
