import { nav } from '../data/content.js'

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#">Silent<span>Code</span></a>
        <nav>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
