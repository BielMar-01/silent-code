import { useEffect, useRef, useState } from 'react'
import { nav } from '../data/content.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)
  const close = () => setOpen(false)

  // Com o menu aberto, fecha ao tocar fora dele ou ao apertar Esc.
  useEffect(() => {
    if (!open) return

    const onPointerDown = (event) => {
      if (!headerRef.current.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current.focus()
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header ref={headerRef}>
      <div className="wrap">
        <a className="logo" href="#" onClick={close}>Silent<span>Code</span></a>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          <span />
        </button>
        <nav id="menu" className={open ? 'open' : undefined}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
