const VARIANTS = {
  default: 'bg-superficie text-azul-leitura',
  dark: 'bg-azul-profundo text-azul-suave',
  warning: 'bg-amber-50 text-amber-700 ring-1 ring-amber-300',
}

export default function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
