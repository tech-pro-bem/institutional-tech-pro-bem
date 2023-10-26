describe('session about us', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.wait(3000)
  })

  it('title Quem somos', () => {
    cy.viewport(1935, 1080)
    cy.get('[class^="style_about"]').should('exist')
    cy.get('h2').contains('Quem somos')
    cy.get('h3').contains('Como funciona?')

    cy.get('[class^="style_about"]').then(($elemento) => {
      // Obtém as dimensões reais do elemento
      const larguraElemento = $elemento[0].clientWidth
      const alturaElemento = $elemento[0].clientHeight

      // Realize as asserções para verificar as dimensões
      expect(larguraElemento).to.equal(1920) // px
      expect(alturaElemento).to.equal(510) // 544
    })
  })
})
