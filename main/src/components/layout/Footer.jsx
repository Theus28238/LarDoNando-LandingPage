import Nav, { FOOTER_NAV_ITEMS, HEADER_NAV_ITEMS } from './Nav'

export default function Footer() {
  return (
    <footer className="bg-azul-profundo px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl font-black tracking-wide">
            LAR DO NANDO
          </p>
          <Nav
            items={FOOTER_NAV_ITEMS}
            className="flex flex-col gap-4 font-sans text-sm text-azul-suave sm:hidden"
          />
          <Nav
            items={HEADER_NAV_ITEMS}
            className="hidden gap-6 font-sans text-sm text-azul-suave sm:flex"
          />
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs text-azul-suave">
            Lar do Nando • Teresina, Piauí • CNPJ 41.794.269/0001-74
          </p>
        </div>
      </div>
    </footer>
  )
}
