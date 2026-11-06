import { useState } from 'react'
import { HandCoins, Users, Heart } from 'lucide-react'
import Tabs from '../ui/Tabs'
import SectionEyebrow from '../ui/SectionEyebrow'
import FadeIn from '../ui/FadeIn'
import DonationTab from './support/DonationTab'
import VolunteerTab from './support/VolunteerTab'
import AdoptionTab from './support/AdoptionTab'

const TABS = [
  { id: 'doacao', label: 'Doação', icon: HandCoins, Component: DonationTab },
  { id: 'voluntario', label: 'Voluntário', icon: Users, Component: VolunteerTab },
  { id: 'adocao', label: 'Adoção', icon: Heart, Component: AdoptionTab },
]

export default function SupportSection() {
  const [active, setActive] = useState('doacao')
  const ActiveComponent = TABS.find((tab) => tab.id === active).Component

  return (
    <section id="apoio" className="bg-azul-profundo px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionEyebrow light>Apoie o Lar do Nando</SectionEyebrow>
          <h2 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
            Toda ajuda muda uma vida
          </h2>
          <p className="mt-4 max-w-xl text-azul-suave">
            Escolha como quer ajudar agora: uma doação, um pouco do seu tempo
            como voluntário ou um novo lar para um animal.
          </p>
        </FadeIn>

        <FadeIn delay={150} className="mt-10 flex flex-col gap-6 sm:flex-row">
          <Tabs tabs={TABS} active={active} onChange={setActive} className="sm:w-56 sm:shrink-0" />
          <div className="flex-1 rounded-2xl bg-superficie p-6 shadow-xl sm:p-8">
            <FadeIn key={active}>
              <ActiveComponent />
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
