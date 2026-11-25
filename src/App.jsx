import { useEffect } from 'react'
import Card from './components/Card.jsx'
import ExternalLink from './components/ExternalLink.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import { EMAIL, INSTAGRAM, LINKEDIN, estudos, materiais, projetos, trilha } from './data/content.js'

export default function App() {
  // As seções só existem depois que o React renderiza, então links diretos
  // (ex.: /#material) precisam rolar a página aqui.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <a className="skip" href="#trilha">Pular para o conteúdo</a>
      <Header />
      <main>
        <Hero />

        <Section id="trilha" tag="SilentQA" title="Trilha SilentQA" lead="Carrosséis semanais no Instagram, um tema de QA por vez.">
          <div className="grid">
            {trilha.map((post) => (
              <Card key={post.title} {...post} />
            ))}
          </div>
        </Section>

        <Section id="material" tag="Gratuito" title="Material gratuito" lead="PDFs prontos para baixar e usar no seu dia a dia, sem cadastro.">
          <div className="grid">
            {materiais.map(({ file, ...item }) => (
              <Card key={file} {...item}>
                <a className="dl" href={file} download>Baixar PDF →</a>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projetos" tag="GitHub" title="Projetos de QA" lead="Projetos de teste e automação com código aberto.">
          <div className="grid">
            {projetos.length === 0 ? (
              <Card soon meta="Em breve" title="Primeiro projeto" text="Os projetos de QA entram aqui assim que forem publicados no GitHub." />
            ) : (
              projetos.map(({ repo, ...item }) => (
                <Card key={repo} {...item}>
                  <ExternalLink className="dl" href={repo}>Ver no GitHub →</ExternalLink>
                </Card>
              ))
            )}
          </div>
        </Section>

        <Section id="estudos" tag="Referências" title="Trilha de estudos" lead="Fontes oficiais para estudar e praticar.">
          <ul className="links">
            {estudos.map((link) => (
              <li key={link.href}>
                <ExternalLink href={link.href}>
                  {link.name}
                  <small>{link.desc}</small>
                </ExternalLink>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contato" tag="Contato" title="Vamos conversar" lead="Dúvidas, parcerias ou feedback. Escolha o canal.">
          <div className="btns" style={{ marginTop: 0 }}>
            <ExternalLink className="btn" href={LINKEDIN}>LinkedIn</ExternalLink>
            <ExternalLink className="btn" href={INSTAGRAM}>Instagram</ExternalLink>
            <a className="btn p" href={`mailto:${EMAIL}`}>Enviar e-mail</a>
          </div>
          <p className="note" style={{ marginTop: 14 }}>Sem formulário por enquanto: o contato vai direto para o seu e-mail.</p>
        </Section>
      </main>
      <Footer />
    </>
  )
}
