export default function Card({ className = '', children }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-sm ring-1 ring-black/5 ${className}`}
    >
      {children}
    </div>
  )
}
