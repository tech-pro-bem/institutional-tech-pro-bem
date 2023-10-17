describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    // viewport para a tela grande, verficar como vai fazer para a menor
    // Link para entender o viewport: https://docs.cypress.io/api/commands/viewport
    cy.wait(4000)
  })

  it('should have the menu', () => {
    // Aqui fiz os teste para saber se os elementos estavam visiveis ao clicar no menu
    cy.getByData('menu-hamburguer').click({ force: true }) // Clica no menu hamburguer
    cy.wait(1000)
    cy.getByData('inicio').parent().scrollIntoView().should('be.visible') // for good measure, may not require
    cy.getByData('duvidas').should('be.visible')
    cy.getByData('acompanhe').should('be.visible')
    cy.getByData('contato').should('be.visible')
  })

  it('should be go to the session Begin', () => {
    cy.getByData('menu-hamburguer').click({ force: true }) // Clica no menu hamburguer
    cy.wait(1000)
    cy.getByData('inicio').click({ force: true }) // Clica no botão inicio
    cy.wait(1000) // Ajuste o tempo de espera conforme necessário
    cy.getByData('Session-begin').should('be.visible')
    cy.getByData('title').should(
      'contain',
      'Impulsionamos pessoas, carreiras e projetos sociais',
    ) // Substitua conforme necessário
  })

  it('should be go to the session duvida', () => {
    cy.getByData('menu-hamburguer').click({ force: true }) // Clica no menu hamburguer
    cy.wait(1000)
    cy.getByData('duvidas').click({ force: true }) // Clica no botão inicio
    // cy.wait(1000) // Ajuste o tempo de espera conforme necessário
    // cy.getByData('Session-begin').should('be.visible')
    // cy.getByData('title').should(
    //  'contain',
    //  'Impulsionamos pessoas, carreiras e projetos sociais',
    // ) // Substitua conforme necessário
  })

  it('should be go to the session acompanhe', () => {
    cy.getByData('menu-hamburguer').click({ force: true }) // Clica no menu hamburguer
    cy.wait(1000)
    cy.getByData('acompanhe').click({ force: true }) // Clica no botão inicio
    cy.wait(1000)
    // cy.wait(1000) // Ajuste o tempo de espera conforme necessário
    // cy.getByData('Session-begin').should('be.visible')
    // cy.getByData('title').should(
    //  'contain',
    //  'Impulsionamos pessoas, carreiras e projetos sociais',
    // ) // Substitua conforme necessário
  })
  it('should be go to the session contato', () => {
    cy.getByData('menu-hamburguer').click({ force: true }) // Clica no menu hamburguer
    cy.wait(1000)
    cy.getByData('contato').click({ force: true }) // Clica no botão inicio
    cy.wait(1000)
    // cy.wait(1000) // Ajuste o tempo de espera conforme necessário
    // cy.getByData('Session-begin').should('be.visible')
    // cy.getByData('title').should(
    //  'contain',
    //  'Impulsionamos pessoas, carreiras e projetos sociais',
    // ) // Substitua conforme necessário
  })
})
