import { useState } from 'react'
import FormField from '../../ui/FormField'
import Button from '../../ui/Button'

const AREAS = [
  'Alimentação',
  'Banho',
  'Limpeza',
  'Apoio à medicação (sob orientação)',
  'Divulgação / adoção',
]

export default function VolunteerTab() {
  const [submitted, setSubmitted] = useState(false)
  const [areas, setAreas] = useState([])

  const toggleArea = (area) => {
    setAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-6 text-center ring-1 ring-black/5">
        <h3 className="font-serif text-xl font-bold text-azul-profundo">
          Inscrição enviada!
        </h3>
        <p className="mt-2 text-azul-leitura">
          Obrigado pelo interesse em ser voluntário. O Lar do Nando vai entrar
          em contato para conversar sobre sua participação.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-serif text-2xl font-bold text-azul-profundo">
        Inscrição de voluntário
      </h3>
      <p className="mt-2 text-azul-leitura">
        Preencha os dados abaixo para se inscrever como voluntário no Lar do
        Nando. Vamos entrar em contato para conversar sobre sua participação.
      </p>
      <hr className="my-6 border-azul-suave/30" />

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <p className="text-sm font-bold text-azul-acao">Dados pessoais</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <FormField
              id="vol-nome"
              label="Nome completo"
              placeholder="Ex.: Joana Maria da Silva"
              required
            />
            <FormField
              id="vol-email"
              label="E-mail"
              type="email"
              placeholder="nome@email.com"
              required
            />
            <FormField
              id="vol-telefone"
              label="Telefone/WhatsApp"
              placeholder="(00) 00000-0000"
              required
            />
            <FormField id="vol-cidade" label="Cidade" placeholder="Ex.: Teresina" required />
            <FormField
              id="vol-bairro"
              label="Bairro"
              placeholder="Ex.: Centro"
              className="sm:col-span-2"
            />
          </div>

          <p className="mt-8 text-sm font-bold text-azul-acao">Disponibilidade</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <FormField
              id="vol-dias"
              label="Dias da semana"
              placeholder="Ex.: Segunda, quarta e sábado"
              required
            />
            <FormField
              id="vol-periodo"
              label="Período"
              placeholder="Ex.: Manhã, tarde ou ambos"
              required
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-azul-acao">Áreas de colaboração</p>

          <div className="mt-4 hidden flex-wrap gap-2 sm:flex">
            {AREAS.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() => toggleArea(area)}
                aria-pressed={areas.includes(area)}
                className={`rounded-full px-4 py-2 text-sm font-bold ring-1 transition-colors ${
                  areas.includes(area)
                    ? 'bg-azul-acao text-white ring-azul-acao'
                    : 'bg-white text-azul-acao ring-azul-suave'
                }`}
              >
                {area}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:hidden">
            {AREAS.map((area) => (
              <label key={area} className="flex items-center gap-2 text-azul-leitura">
                <input
                  type="checkbox"
                  checked={areas.includes(area)}
                  onChange={() => toggleArea(area)}
                  className="h-4 w-4 rounded border-azul-suave text-azul-acao focus:ring-azul-acao"
                />
                {area}
              </label>
            ))}
          </div>

          <FormField
            as="textarea"
            id="vol-experiencia"
            label="Experiência ou observações (opcional)"
            placeholder="Descreva experiência com animais, disponibilidade para orientações iniciais ou qualquer informação relevante para a equipe."
            className="mt-6"
          />

          <p className="mt-8 text-sm font-bold text-azul-acao">
            Manifestação de interesse e consentimento de contato
          </p>
          <p className="mt-3 text-sm text-azul-leitura">
            Ao enviar esta inscrição, você manifesta interesse em colaborar
            como voluntário no Lar do Nando e concorda em receber contato da
            equipe para conversar sobre sua participação, orientações
            iniciais e disponibilidade.
          </p>

          <Button type="submit" variant="primary" className="mt-6 w-full">
            Enviar inscrição
          </Button>

          <p className="mt-3 text-xs text-azul-leitura">
            * Campos obrigatórios. Não envie documentos sensíveis. O abrigo
            entrará em contato para conversar sobre sua participação.
          </p>
        </div>
      </div>
    </form>
  )
}
