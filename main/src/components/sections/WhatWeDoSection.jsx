import { Link } from 'react-router-dom'
import SectionEyebrow from '../ui/SectionEyebrow'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import PhotoPlaceholder from '../ui/PhotoPlaceholder'
import FadeIn from '../ui/FadeIn'
import { services } from '../../data/services'

function ServicePhoto({ service, className = '' }) {
  if (service.photo) {
    return (
      <img
        src={service.photo}
        alt={service.photoAlt || service.title}
        width="900"
        height="506"
        loading="lazy"
        className={`w-full rounded-xl object-cover ${className}`}
      />
    )
  }
  if (service.photoPlaceholder) {
    return <PhotoPlaceholder label={service.photoPlaceholder} className={className} />
  }
  return null
}

function ServiceLink({ service }) {
  if (!service.link && !service.cta) return null
  if (service.cta) {
    return (
      <Button as="a" href={`#${service.cta.hash}`} variant="dark" className="mt-4 w-fit">
        {service.cta.label}
      </Button>
    )
  }
  return (
    <p className="mt-auto pt-4">
      {service.link.to ? (
        <Link to={service.link.to} className="font-bold text-azul-acao hover:underline">
          {service.link.label}
        </Link>
      ) : (
        <a href={`#${service.link.hash}`} className="font-bold text-azul-acao hover:underline">
          {service.link.label}
        </a>
      )}
    </p>
  )
}

function FeaturedService({ service }) {
  return (
    <FadeIn className="mt-10 grid overflow-hidden rounded-2xl bg-azul-profundo text-white sm:grid-cols-2 sm:items-stretch">
      <img
        src={service.photo}
        alt={service.photoAlt || service.title}
        width="900"
        height="506"
        loading="lazy"
        className="h-64 w-full object-cover sm:h-full"
      />
      <div className="flex flex-col gap-3 p-6 sm:p-10">
        {service.tag && (
          <Badge className="w-fit bg-amarelo text-azul-profundo">{service.tag}</Badge>
        )}
        <div className="mt-1 flex items-center gap-3">
          <service.icon size={26} className="shrink-0 text-amarelo" aria-hidden="true" />
          <h3 className="font-serif text-2xl font-bold">{service.title}</h3>
        </div>
        <p className="text-azul-suave">{service.description}</p>
        {service.stat && (
          <div className="mt-2 border-t border-white/20 pt-4">
            <span className="font-serif text-3xl font-black text-amarelo">
              {service.stat.value}
            </span>{' '}
            <span>{service.stat.label}</span>
          </div>
        )}
      </div>
    </FadeIn>
  )
}

function ServiceCard({ service, index }) {
  return (
    <FadeIn
      delay={index * 80}
      className="flex flex-col gap-3 rounded-2xl bg-white p-6 ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lg"
    >
      {(service.photo || service.photoPlaceholder) && (
        <ServicePhoto service={service} className="aspect-video" />
      )}
      <div className="flex items-center gap-3">
        <service.icon size={26} className="shrink-0 text-azul-acao" aria-hidden="true" />
        <h3 className="font-serif text-xl font-bold text-azul-profundo">{service.title}</h3>
      </div>
      <p className="text-azul-leitura">{service.description}</p>
      {service.tag && <Badge className="w-fit">{service.tag}</Badge>}
      {service.stat && (
        <div className="mt-auto border-t border-black/10 pt-4 text-azul-profundo">
          <span className="font-serif text-3xl font-black text-azul-acao">
            {service.stat.value}
          </span>{' '}
          <span>{service.stat.label}</span>
        </div>
      )}
      <ServiceLink service={service} />
    </FadeIn>
  )
}

export default function WhatWeDoSection() {
  const [featured, ...rest] = services

  return (
    <section id="o-que-fazemos" className="bg-superficie px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionEyebrow>O que fazemos</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl font-bold text-azul-profundo sm:text-4xl">
            Cuidado de verdade, do resgate ao novo lar
          </h2>
          <p className="mt-3 max-w-xl text-azul-leitura">
            Seis frentes de trabalho que mantêm o abrigo funcionando todos os dias.
          </p>
        </FadeIn>

        <FeaturedService service={featured} />

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
