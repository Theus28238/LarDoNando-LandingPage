import { Link, useLocation } from 'react-router-dom'

export const HEADER_NAV_ITEMS = [
  { label: 'Sobre nós', hash: 'historia' },
  { label: 'O que fazemos', hash: 'o-que-fazemos' },
  { label: 'Como fazemos', hash: 'o-que-fazemos' },
  { label: 'O que já fizemos', hash: 'michele' },
  { label: 'Apoio', hash: 'apoio' },
]

export const FOOTER_NAV_ITEMS = [
  { label: 'Sobre nós', hash: 'historia' },
  { label: 'O que fazemos', hash: 'o-que-fazemos' },
  { label: 'História da Michele', to: '/historias/michele' },
  { label: 'Dúvidas frequentes', hash: 'faq' },
  { label: 'Apoio', hash: 'apoio' },
]

export default function Nav({ items, className = '', onNavigate, emphasize }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav className={className}>
      {items.map((item) => {
        const isEmphasized = emphasize && item.label === emphasize
        const linkClassName = isEmphasized
          ? 'rounded-full bg-amarelo px-4 py-1.5 font-black text-azul-profundo shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md'
          : 'hover:text-azul-acao'

        return item.to ? (
          <Link key={item.label} to={item.to} onClick={onNavigate} className={linkClassName}>
            {item.label}
          </Link>
        ) : (
          <Link
            key={item.label}
            to={isHome ? `#${item.hash}` : `/#${item.hash}`}
            onClick={onNavigate}
            className={linkClassName}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
