// Conteúdo do site. Edite aqui para adicionar posts, materiais, projetos e links.

export const EMAIL = 'bielmarques922@gmail.com'
export const INSTAGRAM = 'https://www.instagram.com/silentcode.br/'
export const LINKEDIN = 'https://www.linkedin.com/in/dev-gabriel-marques/'

export const nav = [
  { href: '#trilha', label: 'Trilha SilentQA' },
  { href: '#material', label: 'Material gratuito' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#estudos', label: 'Estudos' },
  { href: '#contato', label: 'Contato' },
]

export const trilha = [
  { meta: '#001', title: 'Afinal, o que é QA?', text: 'O que significa qualidade de software e por que não é só "testar".' },
  { meta: '#002', title: 'O que um QA realmente faz?', text: 'Do requisito ao pós-release: o dia a dia da função.' },
  { meta: '#003 · em breve', title: 'Qualidade é responsabilidade de quem?', text: 'Chega em 30/11 no Instagram.', soon: true },
]

export const materiais = [
  { meta: 'PDF · Guia', title: 'Guia de QA para iniciantes', text: 'O que é QA, tipos de teste, como pensar como QA e uma trilha de 30 dias.', file: '/downloads/guia-qa-para-iniciantes.pdf' },
  { meta: 'PDF · Checklist', title: 'Checklist de teste de tela', text: 'As 5 perguntas antes de testar e verificações de campos, fluxo e compatibilidade.', file: '/downloads/checklist-teste-de-tela.pdf' },
  { meta: 'PDF · Templates', title: 'Caso de teste e bug report', text: 'Estruturas prontas para copiar para planilha, Jira, Notion ou TestRail.', file: '/downloads/templates-caso-de-teste-e-bug-report.pdf' },
]

// Com a lista vazia, o site mostra o card "Em breve". Formato de cada projeto:
// { meta: 'Playwright · TypeScript', title: 'Nome do projeto', text: 'Descrição curta.', repo: 'https://github.com/...' }
export const projetos = []

export const estudos = [
  { href: 'https://istqb.org', name: 'ISTQB', desc: 'Certificação e glossário de testes' },
  { href: 'https://www.ministryoftesting.com', name: 'Ministry of Testing', desc: 'Comunidade e artigos de teste' },
  { href: 'https://playwright.dev', name: 'Playwright', desc: 'Automação de testes web' },
  { href: 'https://www.cypress.io', name: 'Cypress', desc: 'Testes end-to-end' },
  { href: 'https://www.selenium.dev', name: 'Selenium', desc: 'Automação de navegadores' },
  { href: 'https://www.postman.com', name: 'Postman', desc: 'Testes de API' },
]
