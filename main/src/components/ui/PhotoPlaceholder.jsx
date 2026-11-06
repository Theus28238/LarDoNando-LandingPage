import { Camera } from 'lucide-react'

export default function PhotoPlaceholder({ label, note, dark = false, className = '' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center ${
        dark ? 'border-white/30 text-white/70' : 'border-azul-suave text-azul-leitura/70'
      } ${className}`}
    >
      <Camera size={24} aria-hidden="true" />
      <p className="text-sm font-bold">{label}</p>
      {note && <p className="text-xs">{note}</p>}
    </div>
  )
}
