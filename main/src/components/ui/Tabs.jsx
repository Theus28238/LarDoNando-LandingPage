export default function Tabs({ tabs, active, onChange, className = '' }) {
  return (
    <div
      role="tablist"
      className={`flex gap-2 sm:flex-col ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          type="button"
          aria-selected={active === tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-center font-sans font-bold transition-colors sm:flex-none sm:justify-start sm:rounded-xl sm:px-5 sm:font-serif sm:text-lg ${
            active === tab.id
              ? 'bg-amarelo text-azul-profundo'
              : 'bg-white text-azul-leitura sm:bg-azul-leitura/40 sm:text-white'
          }`}
        >
          {tab.icon && <tab.icon size={18} aria-hidden="true" />}
          {tab.label}
        </button>
      ))}
    </div>
  )
}
