import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import WasteSignalsSection from "@/components/waste-signals-section"
import ServicesSection from "@/components/services-section"
import InternalExperienceSection from "@/components/internal-experience-section"
import MeasurementSection from "@/components/measurement-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <WasteSignalsSection />
      <ServicesSection />
      <InternalExperienceSection />
      <MeasurementSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
