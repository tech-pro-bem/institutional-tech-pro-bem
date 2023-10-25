describe('session about us', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.wait(3000)
  })

  it('title Quem somos', () => {
    cy.viewport(1280, 1080)
    cy.get('h2').contains('Quem somos')
    cy.get('h3').contains('Como funciona?')
  })
})
