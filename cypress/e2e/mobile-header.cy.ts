describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    // viewport para a tela grande, verficar como vai fazer para a menor
    // Link para entender o viewport: https://docs.cypress.io/api/commands/viewport
  })

  it('should have the menu', () => {
    // Aqui fiz os teste para saber se os elementos estavam visiveis ao clicar no menu
    cy.get('.styles_hamburguerIcon__8WgWU').click() // Clica no menu hamburguer
    cy.get('a.styles_logo__iAjE7 > .styles_logo__iAjE7').should('be.visible')
    cy.getByData('inicio').should('be.visible')
    cy.getByData('duvidas').should('be.visible')
    cy.getByData('acompanhe').should('be.visible')
    cy.getByData('contato').should('be.visible')
  })

  it('should be go to the session Begin', () => {
    cy.get('.styles_hamburguerIcon__8WgWU').click() // Clica no menu hamburguer
    cy.getByData('inicio').click() // Clica no botão inicio
    cy.wait(1000) // Ajuste o tempo de espera conforme necessário
    cy.getByData('Session-begin').should('be.visible')
    cy.getByData('title').should(
      'contain',
      'Impulsionamos pessoas, carreiras e projetos sociais',
    ) // Substitua conforme necessário
  })

  it('should be go to the session duvida', () => {
    cy.get('.styles_hamburguerIcon__8WgWU').click() // Clica no menu hamburguer
    cy.getByData('duvidas').click() // Clica no botão inicio
    // cy.wait(1000) // Ajuste o tempo de espera conforme necessário
    // cy.getByData('Session-begin').should('be.visible')
    // cy.getByData('title').should(
    //  'contain',
    //  'Impulsionamos pessoas, carreiras e projetos sociais',
    // ) // Substitua conforme necessário
  })

  it('should be go to the session acompanhe', () => {
    cy.get('.styles_hamburguerIcon__8WgWU').click() // Clica no menu hamburguer
    cy.getByData('acompanhe').click() // Clica no botão inicio
    // cy.wait(1000) // Ajuste o tempo de espera conforme necessário
    // cy.getByData('Session-begin').should('be.visible')
    // cy.getByData('title').should(
    //  'contain',
    //  'Impulsionamos pessoas, carreiras e projetos sociais',
    // ) // Substitua conforme necessário
  })
  it('should be go to the session contato', () => {
    cy.get('.styles_hamburguerIcon__8WgWU').click() // Clica no menu hamburguer
    cy.getByData('contato').click() // Clica no botão inicio
    // cy.wait(1000) // Ajuste o tempo de espera conforme necessário
    // cy.getByData('Session-begin').should('be.visible')
    // cy.getByData('title').should(
    //  'contain',
    //  'Impulsionamos pessoas, carreiras e projetos sociais',
    // ) // Substitua conforme necessário
  })
})
