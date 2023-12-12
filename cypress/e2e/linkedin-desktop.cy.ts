describe('Desktop - session Linkedin', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1935, 1080)
  })

  it('should have the class LinkedIn', () => {
    cy.get('.style_section__container_linkedin__2eWkN').should('exist')
  })

  it('should have a title', () => {
    cy.get('.style_section__container_linkedin__2eWkN')
      .find('.style_section__container_text__W_6hw > .title')
      .contains('Acompanhe')
  })
  it('should have a image', () => {
    cy.get('.style_section__container_linkedin__2eWkN')
      .find('.style_image__logo__c6ElF')
      .should('exist')
  })
  it('deve seguir o link do linkedin', () => {
    cy.get('.style_link_linkedin__ejk3E')
      .invoke('attr', 'href')
      .then(() => {
        // Clique no link
        cy.get('.style_link_linkedin__ejk3E').click()
        cy.wait(2000)
        // Aguarde até que a navegação seja concluída
        cy.url().should('equal', 'https://www.linkedin.com/company/techprobem/')
      })
  })
})
