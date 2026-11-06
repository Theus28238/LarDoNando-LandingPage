import Button from '../ui/Button'
import SectionEyebrow from '../ui/SectionEyebrow'
import FaqItem from '../ui/FaqItem'
import FadeIn from '../ui/FadeIn'
import { faqItems } from '../../data/faq'

export default function FaqSection() {
  return (
    <section id="faq" className="bg-superficie px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="sm:flex sm:items-start sm:justify-between sm:gap-6">
          <div>
            <SectionEyebrow>Dúvidas frequentes</SectionEyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold text-azul-profundo sm:text-4xl">
              Perguntas que sempre nos fazem
            </h2>
            <p className="mt-3 max-w-xl text-azul-leitura">
              Respostas rápidas antes de adotar, ajudar ou pedir socorro por um
              animal.
            </p>
          </div>
          <div className="mt-6 sm:mt-0 sm:text-right">
            <Button
              as="a"
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Falar com a gente
            </Button>
            <p className="mt-2 text-sm font-semibold text-amber-700 sm:mt-1">
              [ WhatsApp da ONG ]
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {faqItems.map((item, index) => (
            <FadeIn key={item.question} delay={(index % 4) * 80}>
              <FaqItem {...item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
