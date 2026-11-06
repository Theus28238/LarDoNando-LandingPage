import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { ShieldCheck } from 'lucide-react'

const PIX_KEY = '41.794.269/0001-74'

const STEPS = [
  'Abra o seu aplicativo de banco.',
  'Entre na área PIX.',
  'Escolha pagar por QR Code ou usar a chave CNPJ.',
  'Insira o valor desejado.',
  'Confira os dados do favorecido.',
  'Confirme a doação no aplicativo.',
]

export default function DonationTab() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div>
      <h3 className="font-serif text-2xl font-bold text-azul-profundo">
        Doe pelo PIX
      </h3>
      <p className="mt-2 text-azul-leitura">
        Use a chave CNPJ para doar pelo PIX e ajudar a manter o Lar do Nando
        em atividade.
      </p>

      <div className="mt-6 grid gap-10 sm:grid-cols-2">
        <div>
          <div className="w-fit rounded-xl border border-azul-suave bg-white p-4">
            <QRCodeSVG value={PIX_KEY} size={160} />
          </div>

          <p className="mt-5 text-sm font-bold text-azul-leitura">Tipo de chave</p>
          <span className="mt-1 inline-block rounded-full bg-white px-3 py-1 font-bold text-azul-acao ring-1 ring-azul-suave">
            CNPJ
          </span>

          <p className="mt-4 text-sm font-bold text-azul-leitura">Chave PIX</p>
          <div className="mt-1 flex items-center justify-between gap-2 rounded-xl border border-azul-suave/60 bg-white px-4 py-3">
            <span className="text-azul-profundo">{PIX_KEY}</span>
            <button
              type="button"
              onClick={handleCopy}
              className="shrink-0 rounded-full bg-amarelo px-3 py-1 text-sm font-bold text-azul-profundo"
            >
              {copied ? 'Copiado' : 'Copiar'}
            </button>
          </div>

          <p className="mt-3 flex items-start gap-2 text-sm text-emerald-700">
            <ShieldCheck size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            Use a chave CNPJ para doar pelo PIX.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold text-azul-leitura">Passo a passo</p>
          <ol className="mt-3 space-y-3">
            {STEPS.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="font-serif font-bold text-azul-acao">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-azul-profundo">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-azul-leitura">
            Favorecido: Lar do Nando — ONG de Proteção Animal
          </p>
        </div>
      </div>
    </div>
  )
}
