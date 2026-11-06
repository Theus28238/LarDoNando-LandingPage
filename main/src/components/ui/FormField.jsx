const inputClasses =
  'w-full rounded-xl border border-azul-suave/60 bg-white px-4 py-3 font-sans text-azul-profundo placeholder:text-azul-leitura/50 focus:border-azul-acao focus:outline-none focus:ring-2 focus:ring-azul-acao/30'

export default function FormField({
  as = 'input',
  label,
  required = false,
  id,
  className = '',
  ...props
}) {
  const Component = as

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-bold text-azul-profundo"
      >
        {label}
        {required && <span className="text-azul-acao"> *</span>}
      </label>
      <Component
        id={id}
        required={required}
        className={`${inputClasses} ${as === 'textarea' ? 'min-h-28 resize-y' : ''}`}
        {...props}
      />
    </div>
  )
}
