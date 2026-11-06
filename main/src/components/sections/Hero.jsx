import Button from '../ui/Button'
import FadeIn from '../ui/FadeIn'
import heroImage from '../../assets/images/hero-nando.jpg'
import heroImageMobile from '../../assets/images/hero-nando-mobile.jpg'

export default function Hero() {
  return (
    <section className="bg-azul-profundo text-white">
      <div className="sm:hidden">
        <img
          src={heroImageMobile}
          alt="Nando, cão que dá nome ao abrigo"
          width="900"
          height="506"
          fetchPriority="high"
          className="h-72 w-full object-cover object-[center_30%]"
        />
        <FadeIn className="flex flex-col gap-4 px-6 pb-10 pt-8">
          <h1 className="font-serif text-4xl font-bold leading-tight">
            Lar do Nando é mais que um abrigo, é um refúgio de amor
          </h1>
          <div className="flex flex-col gap-3">
            <Button as="a" href="#apoio" variant="primary">
              Quero ajudar
            </Button>
            <Button as="a" href="#historia" variant="muted">
              Conheça nossa história
            </Button>
          </div>
        </FadeIn>
      </div>

      <div
        className="relative hidden min-h-screen items-center overflow-hidden bg-cover pt-24 sm:flex"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'left center',
        }}
      >
        <div className="absolute inset-0 bg-azul-profundo/30" aria-hidden="true" />

        <FadeIn className="relative mx-auto flex max-w-6xl flex-col items-start gap-3 px-6 pb-16">
          <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight lg:text-6xl">
            Lar do Nando é mais que um abrigo, é um refúgio de amor
          </h1>
          <p className="font-sans text-sm text-azul-suave">
            Desde 2021 salvando vidas
          </p>
          <div className="mt-4 flex gap-4">
            <Button as="a" href="#historia" variant="muted">
              Conheça nossa história
            </Button>
            <Button as="a" href="#apoio" variant="primary">
              Quero ajudar
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
