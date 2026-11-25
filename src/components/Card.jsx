export default function Card({ meta, title, text, soon = false, children }) {
  return (
    <div className={soon ? 'card soon' : 'card'}>
      <span className="meta">{meta}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </div>
  )
}
