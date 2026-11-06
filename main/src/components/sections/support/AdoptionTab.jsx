import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import FormField from '../../ui/FormField'
import Button from '../../ui/Button'

export default function AdoptionTab() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-6 text-center ring-1 ring-black/5">
        <h3 className="font-serif text-xl font-bold text-azul-profundo">
          Solicitação enviada!
        </h3>
        <p className="mt-2 text-azul-leitura">
          Seu interesse em adoção foi registrado. O abrigo entrará em contato
          para conversar sobre a visita.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-serif text-2xl font-bold text-azul-profundo">
        Interesse em adoção
      </h3>
      <p className="mt-2 text-azul-leitura">
        Conte um pouco sobre você e o animal que deseja adotar. O abrigo
        entrará em contato para conversar sobre a visita.
      </p>
      <hr className="my-6 border-azul-suave/30" />

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField id="ado-nome" label="Nome completo" placeholder="Ex.: Joana Silva" required />
            <FormField
              id="ado-email"
              label="E-mail"
              type="email"
              placeholder="nome@email.com"
              required
            />
            <FormField
              id="ado-contato"
              label="Número de contato (telefone/WhatsApp)"
              placeholder="(00) 00000-0000"
              required
            />
            <FormField
              id="ado-data"
              label="Data desejada para visita"
              placeholder="DD/MM/AAAA"
              required
            />
            <FormField id="ado-cidade" label="Cidade" placeholder="Ex.: Teresina" required />
            <FormField id="ado-bairro" label="Bairro" placeholder="Seu bairro" />
          </div>

          <p className="mt-4 flex items-start gap-2 rounded-xl bg-white px-4 py-3 text-sm text-emerald-700 ring-1 ring-azul-suave/40">
            <ShieldCheck size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            A data informada é uma preferência e será confirmada após
            contato.
          </p>
        </div>

        <div>
          <FormField
            as="textarea"
            id="ado-caracteristicas"
            label="Características do animal que deseja adotar"
            placeholder="Ex.: porte médio, adulto, calmo, bom com crianças, convivência com outros animais..."
            required
          />

          <FormField
            as="textarea"
            id="ado-rotina"
            label="Sobre o lar e a rotina (opcional)"
            placeholder="Ex.: casa com quintal, tempo de convivência diária, rotina de trabalho, outros animais em casa..."
            className="mt-6"
          />

          <Button type="submit" variant="primary" className="mt-6 w-full">
            Solicitar visita
          </Button>

          <p className="mt-3 text-xs text-azul-leitura">
            * Campos obrigatórios. O envio registra seu interesse e não
            confirma uma adoção ou visita automaticamente.
          </p>
        </div>
      </div>
    </form>
  )
}
