import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import ApproachSection from '@/components/ApproachSection'
import AuditSection from '@/components/AuditSection'
import UseCaseSection from '@/components/UseCaseSection'
import FinalCTA from '@/components/FinalCTA'
import RevealWrapper from '@/components/RevealWrapper'

export default function Home() {
  return (
    <RevealWrapper>
      <Navigation />
      <Hero />
      <ProblemSection />
      <ApproachSection />
      <AuditSection />
      <UseCaseSection />
      <FinalCTA />
    </RevealWrapper>
  )
}
