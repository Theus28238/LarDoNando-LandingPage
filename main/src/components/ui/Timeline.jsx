import { Heart } from 'lucide-react'

function Dot({ step, index }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azul-profundo font-serif font-bold text-white ring-4 ring-superficie">
      {step.icon === 'heart' ? (
        <Heart size={18} className="fill-amarelo text-amarelo" aria-hidden="true" />
      ) : (
        index + 1
      )}
    </span>
  )
}

export default function Timeline({ steps }) {
  return (
    <>
      <ol className="flex flex-col gap-8 sm:hidden">
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex gap-4">
            {index < steps.length - 1 && (
              <span
                className="absolute left-5 top-10 h-[calc(100%+1rem)] w-px -translate-x-1/2 bg-azul-suave"
                aria-hidden="true"
              />
            )}
            <Dot step={step} index={index} />
            <div>
              <p className="font-serif text-lg font-bold text-azul-profundo">
                {step.title}
              </p>
              <p className="mt-1 text-sm text-azul-leitura">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <ol className="hidden sm:flex sm:items-center sm:justify-between">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className={`flex max-w-[180px] flex-col items-center gap-3 text-center ${
              index % 2 === 1 ? '-translate-y-6' : 'translate-y-6'
            }`}
          >
            <Dot step={step} index={index} />
            <div>
              <p className="font-serif font-bold text-azul-profundo">
                {step.title}
              </p>
              <p className="mt-1 text-sm text-azul-leitura">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}
