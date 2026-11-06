const VARIANTS = {
  primary: 'bg-amarelo text-azul-profundo hover:brightness-95',
  secondary:
    'border border-azul-profundo text-azul-profundo hover:bg-azul-profundo hover:text-white',
  'secondary-dark':
    'border border-white text-white hover:bg-white hover:text-azul-profundo',
  muted: 'bg-azul-leitura text-white hover:bg-azul-leitura/80',
  dark: 'bg-azul-profundo text-white hover:bg-azul-leitura',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-sans font-bold transition-colors ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
