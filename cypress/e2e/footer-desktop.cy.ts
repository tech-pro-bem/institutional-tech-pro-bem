describe('Footer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.viewport(1920, 807)
  })

  it('should render the footer', () => {
    cy.get('footer').should('exist')
  })

  it('Should open social media links in a new tab', () => {
    cy.get('[class^="style_infoContainer"] a').each(($link) => {
      cy.wrap($link).should('have.attr', 'target', '_blank')
    })
  })

  it('should display the Tech Pro Bem logo', () => {
    cy.get('[class^="style_tpblogo"]').should('exist')
  })

  it('Should load images without errors', () => {
    cy.get('[class^="style_tpblogo"]').should('be.visible')
  })

  it('should check width and height of section our impact', () => {
    cy.get('[class^="style_infoContainer"]').then(($element) => {
      const elementWidth = $element[0].clientWidth
      const elementHeight = $element[0].clientHeight
      expect(elementWidth).to.be.equal(1170)
      expect(elementHeight).to.be.equal(287)
    })
  })
})
