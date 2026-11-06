import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import SectionEyebrow from '../ui/SectionEyebrow'
import StatCard from '../ui/StatCard'
import Timeline from '../ui/Timeline'
import FadeIn from '../ui/FadeIn'
import { michelleStats, michelleTimeline } from '../../data/stats'
import micheleNoResgate from '../../assets/images/michele-resgate.jpg'
import micheleHoje from '../../assets/images/michele-hoje.jpg'

export default function CaseStudySection({ standalone = false }) {
  const [stage, setStage] = useState('resgate')

  return (
    <section id="michele">
      <div
        className={`bg-azul-profundo px-6 pb-24 text-white ${standalone ? 'pt-36' : 'pt-20'}`}
      >
        <div className="mx-auto max-w-6xl">
          {standalone && (
            <p className="mb-8 text-sm text-azul-suave">
              <Link to="/" className="font-bold text-white hover:underline">
                Início
              </Link>{' '}
              / Histórias / Michele
            </p>
          )}

          <div className="grid gap-12 sm:grid-cols-2 sm:items-center">
            <FadeIn>
              <SectionEyebrow light>Um caso real</SectionEyebrow>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
                A história da Michele
              </h2>
              <p className="mt-6 text-azul-suave">
                Resgatada após um acidente grave, ela precisou de muito mais
                que um abrigo. Precisou de uma comunidade inteira.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button as="a" href="#apoio" variant="primary">
                  Quero ajudar
                </Button>
                <Button as="a" href="#jornada" variant="secondary-dark">
                  Ver a jornada ↓
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={150} className="sm:hidden">
              <img
                src={micheleHoje}
                alt="Michele hoje, recuperada e feliz"
                width="648"
                height="1152"
                loading="lazy"
                className="aspect-square w-full rounded-xl object-cover"
              />
              <div className="mt-3 grid grid-cols-2 gap-3">
                <img
                  src={micheleNoResgate}
                  alt="Michele no momento do resgate"
                  width="1000"
                  height="1498"
                  loading="lazy"
                  className="aspect-square w-full rounded-xl object-cover"
                />
                <img
                  src={micheleHoje}
                  alt="Michele hoje, recuperada e feliz"
                  width="648"
                  height="1152"
                  loading="lazy"
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={150} className="hidden sm:block">
              <div className="relative">
                <span className="absolute right-4 top-4 z-10 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">
                  Tratamento 100% coberto
                </span>
                <img
                  src={stage === 'resgate' ? micheleNoResgate : micheleHoje}
                  alt={
                    stage === 'resgate'
                      ? 'Michele no momento do resgate'
                      : 'Michele hoje, recuperada e feliz'
                  }
                  width="1000"
                  height="563"
                  loading="lazy"
                  className="aspect-video w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-3 inline-flex rounded-xl bg-white/10 p-1">
                {[
                  { id: 'resgate', label: 'No resgate' },
                  { id: 'hoje', label: 'Hoje' },
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setStage(option.id)}
                    className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors ${
                      stage === option.id
                        ? 'bg-amarelo text-azul-profundo'
                        : 'text-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="bg-superficie px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="-mt-12 grid grid-cols-2 gap-6 rounded-2xl bg-white p-8 shadow-lg sm:grid-cols-4 sm:divide-x sm:divide-azul-suave/30">
            {michelleStats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </FadeIn>

          <div id="jornada" className="mt-16 scroll-mt-24">
            <FadeIn>
              <SectionEyebrow>A jornada</SectionEyebrow>
              <h3 className="mt-2 font-serif text-2xl font-bold text-azul-profundo sm:text-3xl">
                Do resgate à recuperação
              </h3>
              <p className="mt-4 text-azul-leitura sm:hidden">
                Cada etapa só foi possível porque alguém decidiu ajudar.
              </p>
            </FadeIn>
            <FadeIn delay={150} className="mt-10">
              <Timeline steps={michelleTimeline} />
            </FadeIn>
            <p className="mt-10 hidden text-center font-serif italic text-azul-leitura sm:block">
              Cada etapa só foi possível porque alguém decidiu ajudar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
