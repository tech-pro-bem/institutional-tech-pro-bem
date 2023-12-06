describe('Teste- header/mobile', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.viewport(375, 812)
    cy.wait(2000)
    cy.get('.styles_hamburguerIcon__8WgWU').click({ force: true }) // Clica no menu hamburguer
    cy.wait(1000)
  })
  it('should have all elements', () => {
    cy.get('.styles_activeLink__VnNRK > a > span')
      .parent()
      .scrollIntoView()
      .should('be.visible')
      .invoke('css', 'color')
      .then((corDoTexto) => {
        // Verifique se a cor do texto é a desejada (substitua pela sua cor esperada)
        expect(corDoTexto).to.eq('rgb(135, 66, 255)') // Exemplo: vermelho
      })

    cy.get('[data-id="duvidas"] > a > span')
      .should('be.visible')
      .invoke('css', 'color')
      .then((corDoTexto) => {
        // Verifique se a cor do texto é a desejada (substitua pela sua cor esperada)
        expect(corDoTexto).to.eq('rgb(3, 3, 2)') // Exemplo: vermelho
      })

    cy.get('[data-id="acompanhe"] > a > span').should('be.visible')

    cy.get('[data-id="contato"] > a > span').should('be.visible')
  })

  it('should be go to the session Begin', () => {
    cy.get('.styles_activeLink__VnNRK > a > span').click({ force: true }) // Clica no botão inicio
    cy.wait(1000) // Ajuste o tempo de espera conforme necessário
    cy.get('#inicio').should('be.visible')

    // Você também pode verificar outras coisas na sessão, se necessário
    cy.get('.title--big').should(
      'contain',
      'Impulsionamos pessoas, carreiras e projetos sociais',
    )
    // Substitua conforme necessário
  })

  it('should be go to the session duvida', () => {
    cy.get('[data-id="duvidas"] > a > span').click({ force: true }) // Clica no botão inicio
    // cy.get('[data-id="duvidas"] > a > span')
    //   .invoke('css', 'color')
    //   .then((corDoTexto) => {
    //     expect(corDoTexto).to.eq('rgb(135, 66, 255)')
    //   })
    // cy.wait(1000)

    // cy.get('tag do elemento').should('be.visible')

    // cy.get('tag do elemento').should('contain', 'texto')
  })

  it('should be go to the session acompanhe', () => {
    cy.get('.styles_hamburguerIcon__8WgWU').click({ force: true }) // Clica no menu hamburguer
    cy.wait(1000)
    cy.get('[data-id="acompanhe"] > a > span').click({ force: true }) // Clica no botão inicio
    cy.wait(1000)
    // cy.get('[data-id="acompanhe"] > a > span')
    //   .invoke('css', 'color')
    //   .then((corDoTexto) => {
    //     expect(corDoTexto).to.eq('rgb(135, 66, 255)')
    //   })
    // cy.wait(1000)

    // cy.get('tag do elemento').should('be.visible')

    // cy.get('tag do elemento').should('contain', 'texto')
  })
  it('should be go to the session contato', () => {
    cy.get('[data-id="contato"] > a > span').click({ force: true }) // Clica no botão inicio
    cy.wait(1000)
    // cy.get('[data-id="contato"] > a > span')
    //   .invoke('css', 'color')
    //   .then((corDoTexto) => {
    //     expect(corDoTexto).to.eq('rgb(135, 66, 255)')
    //   })
    // cy.wait(1000)

    // cy.get('tag do elemento').should('be.visible')

    // cy.get('tag do elemento').should('contain', 'texto')
  })
})
