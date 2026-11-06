import SectionEyebrow from '../ui/SectionEyebrow'
import FadeIn from '../ui/FadeIn'
import leilyaneImage from '../../assets/images/leilyane-com-cao.jpg'
import fernandoImage from '../../assets/images/fernando-com-caes.jpg'

const FULL_TEXT = `Fernando Machado, vigia, e Leilyane Marques, professora, nunca planejaram ter um abrigo. Tudo começou de forma espontânea — um cão aqui, outro ali — até que a casa do casal no Residencial Jacinta Andrade, Zona Norte de Teresina, virou o lar de dezenas de animais resgatados das ruas. Em 17 de março de 2021, o projeto se formalizou como ONG registrada (CNPJ 41.794.269/0001-74). Hoje o Lar do Nando abriga até 90 animais simultaneamente, com suporte de voluntários, parceiros veterinários e o apoio da SEMARH-PI.`

export default function AboutSection() {
  return (
    <section id="historia" className="bg-superficie px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 sm:items-center">
        <FadeIn className="order-2 sm:order-1">
          <SectionEyebrow>Conheça nossa história</SectionEyebrow>
          <h2 className="mt-3 font-serif text-3xl font-bold text-azul-profundo sm:text-4xl">
            Um casal, um sonho e mais de 200 vidas transformadas
          </h2>
          <p className="mt-6 text-azul-leitura">{FULL_TEXT}</p>
        </FadeIn>

        <FadeIn
          delay={150}
          className="relative order-1 hidden sm:order-2 sm:block"
        >
          <img
            src={leilyaneImage}
            alt="Leilyane Marques, cofundadora do Lar do Nando, acolhendo um animal resgatado"
            width="682"
            height="467"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <img
            src={fernandoImage}
            alt="Fernando Machado, cofundador do Lar do Nando, com dois animais resgatados"
            width="682"
            height="467"
            loading="lazy"
            className="absolute -bottom-8 -right-8 aspect-[4/5] w-2/3 rounded-2xl object-cover ring-4 ring-superficie"
          />
        </FadeIn>
        <FadeIn
          delay={150}
          className="order-1 grid grid-cols-2 gap-3 sm:hidden"
        >
          <img
            src={leilyaneImage}
            alt="Leilyane Marques, cofundadora do Lar do Nando, acolhendo um animal resgatado"
            width="682"
            height="467"
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover"
          />
          <img
            src={fernandoImage}
            alt="Fernando Machado, cofundador do Lar do Nando, com dois animais resgatados"
            width="682"
            height="467"
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover"
          />
        </FadeIn>
      </div>
    </section>
  )
}
