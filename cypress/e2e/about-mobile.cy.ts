describe('Mobile - session about us', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.viewport(375, 640)
  })

  it('should check height and width of section about', () => {
    cy.get('[class^="style_about"]').then(($elemento) => {
      const larguraElemento = $elemento[0].clientWidth
      const alturaElemento = $elemento[0].clientHeight
      expect(larguraElemento).to.be.equal(360) // 1920 ± 2
      // expect(alturaElemento).to.be.equal(1036)
      expect(alturaElemento).to.be.within(1000, 1038) // 633 ± 2
    })
  })

  it('should check width of container', () => {
    cy.get('.container').should('exist')
    cy.get('.container').then(($elemento) => {
      const larguraElemento = $elemento[1].clientWidth
      expect(larguraElemento).to.equal(312)
    })
  })

  it('verifica padding da sessao about', () => {
    cy.get('[class^="style_about"]').should('have.css', 'padding-top', '60px')
    cy.get('[class^="style_about"]').should(
      'have.css',
      'padding-bottom',
      '320px',
    )
  })

  it('should check height and width of text__block_1', () => {
    cy.get('[class^="style_text__block_1"]').then(($elemento) => {
      const larguraElemento = $elemento[0].clientWidth
      const alturaElemento = $elemento[0].clientHeight
      expect(larguraElemento).to.be.equal(312) // 1920 ± 2
      expect(alturaElemento).to.be.equal(238)
    })
  })

  it('should check height and width of text__block_2', () => {
    cy.get('[class^="style_text__block_2"]').then(($elemento) => {
      const larguraElemento = $elemento[0].clientWidth
      const alturaElemento = $elemento[0].clientHeight
      expect(larguraElemento).to.be.equal(312) // 1920 ± 2
      // expect(alturaElemento).to.be.equal(305)
    })
    cy.get('[class^="style_text__block_2"]').should('have.css', 'gap', '16px')
  })
})
