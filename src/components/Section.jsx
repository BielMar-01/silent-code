export default function Section({ id, tag, title, lead, children }) {
  return (
    <section id={id}>
      <div className="wrap">
        <div className="tag">{tag}</div>
        <h2>{title}</h2>
        <p className="lead">{lead}</p>
        {children}
      </div>
    </section>
  )
}
