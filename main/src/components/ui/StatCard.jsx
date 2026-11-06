export default function StatCard({ value, label, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      <p className="font-serif text-3xl font-black text-azul-profundo sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-sm text-azul-leitura">{label}</p>
    </div>
  )
}
