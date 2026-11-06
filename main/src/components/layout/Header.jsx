import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav, { HEADER_NAV_ITEMS } from './Nav'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const solid = !isHome || scrolled

  useEffect(() => {
    if (!isHome) return undefined
    const onScroll = () => setScrolled(window.scrollY > 64)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors ${
        solid ? 'bg-azul-profundo/85 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="font-serif text-lg font-black tracking-wide">
          LAR DO NANDO
        </Link>

        <Nav
          items={HEADER_NAV_ITEMS}
          className="hidden items-center gap-6 font-sans font-bold md:flex"
          emphasize="Apoio"
        />
      </div>
    </header>
  )
}
