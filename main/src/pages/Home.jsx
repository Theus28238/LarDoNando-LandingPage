import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import WhatWeDoSection from '../components/sections/WhatWeDoSection'
import CaseStudySection from '../components/sections/CaseStudySection'
import FaqSection from '../components/sections/FaqSection'
import SupportSection from '../components/sections/SupportSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhatWeDoSection />
      <CaseStudySection />
      <FaqSection />
      <SupportSection />
    </>
  )
}
