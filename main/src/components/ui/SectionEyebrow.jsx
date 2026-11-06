export default function SectionEyebrow({ children, className = '', light = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-sm font-bold ${light ? 'text-azul-suave' : 'text-azul-acao'} ${className}`}
    >
      <span className="h-[2px] w-6 bg-amarelo" aria-hidden="true" />
      {children}
    </p>
  )
}
