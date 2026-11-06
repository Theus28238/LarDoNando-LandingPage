import Badge from './Badge'

export default function FaqItem({ question, answer, needsConfirm, icon: Icon }) {
  return (
    <div className="flex h-full min-h-[15rem] flex-col rounded-2xl bg-white p-6 ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Icon size={22} className="shrink-0 text-azul-acao" aria-hidden="true" />
          <h3 className="line-clamp-2 font-serif text-lg font-bold text-azul-profundo">
            {question}
          </h3>
        </div>
        {needsConfirm && (
          <Badge variant="warning" className="shrink-0">
            Confirmar com a ONG
          </Badge>
        )}
      </div>
      <hr className="my-4 border-azul-suave/30" />
      <p className="line-clamp-5 text-azul-leitura">
        {answer.map((part, i) =>
          typeof part === 'string' ? (
            <span key={i}>{part}</span>
          ) : (
            <span key={i} className="font-semibold text-amber-700">
              [ {part.confirm} ]
            </span>
          ),
        )}
      </p>
    </div>
  )
}
