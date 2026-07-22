import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import ApproachSection from '@/components/ApproachSection'
import SimulatorSection from '@/components/SimulatorSection'
import UseCaseSection from '@/components/UseCaseSection'
import ClosingSection from '@/components/ClosingSection'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import RevealWrapper from '@/components/RevealWrapper'

export default function Home() {
  return (
    <RevealWrapper>
      <Navigation />
      <Hero />
      <ProblemSection />
      <ApproachSection />
      <SimulatorSection />
      <UseCaseSection />
      <ClosingSection />
      <Footer />
      <ContactModal />
    </RevealWrapper>
  )
}
