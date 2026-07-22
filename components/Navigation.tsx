import { nav } from '@/lib/content'

export default function Navigation() {
  return (
    <header>
      <nav>
        <a href="#top" className="brand">
          {nav.brand}
        </a>
        <div className="nav-links">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#run-audit" className="btn btn-sm" data-contact>
          {nav.cta}
        </a>
      </nav>
    </header>
  )
}
