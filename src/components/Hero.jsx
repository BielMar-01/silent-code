import { INSTAGRAM } from '../data/content.js'
import ExternalLink from './ExternalLink.jsx'

export default function Hero() {
  return (
    <div className="hero wrap">
      <div className="tag">QA · Qualidade de software</div>
      <h1>Qualidade de software, <em>explicada sem enrolação.</em></h1>
      <p>Sou Gabriel, QA Engineer. Aqui você encontra guias, checklists e projetos gratuitos para entrar e evoluir na área.</p>
      <div className="btns">
        <a className="btn p" href="#material">Baixar material gratuito</a>
        <ExternalLink className="btn" href={INSTAGRAM}>Instagram @silentcode.br</ExternalLink>
      </div>
    </div>
  )
}
