describe('Teste- Header desktop', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1935, 1080)
  })

  it('should have all names and logo', () => {
    cy.get('a.styles_logo__iAjE7 > .styles_logo__iAjE7').should('exist')
    cy.get('.styles_activeLink__VnNRK > a > span').should('exist')
    cy.get('[data-id="duvidas"] > a > span').should('exist')
    cy.get('[data-id="acompanhe"] > a > span').should('exist')
    cy.get('[data-id="contato"] > a > span').should('exist')
  })

  it('should check the width and height', () => {
    cy.get('.styles_header__pWH_0').should('be.visible')

    cy.wait(1000)

    cy.get('.styles_header__pWH_0').then(($elemento) => {
      const estiloCalculado = window.getComputedStyle($elemento[0])
      const larguraElemento = parseInt(
        estiloCalculado.getPropertyValue('width'),
      )
      const alturaElemento = parseInt(
        estiloCalculado.getPropertyValue('height'),
      )

      // Verifique as dimensões do elemento
      expect(larguraElemento).to.be.within(1912, 1922)
      expect(alturaElemento).to.be.within(90, 96)
    })
  })

  it('should check if the element link works to the session Begin', () => {
    cy.get('.styles_activeLink__VnNRK > a > span').click()
    cy.wait(1000)
    cy.get('.styles_activeLink__VnNRK > a > span')
      .invoke('css', 'color')
      .then((corDoTexto) => {
        // Verifique se a cor do texto é a desejada (substitua pela sua cor esperada)
        expect(corDoTexto).to.eq('rgb(135, 66, 255)') // Exemplo: vermelho
      })
    cy.wait(1000) // Ajuste o tempo de espera conforme necessário

    // Verifique se a sessão está visível na janela de visualização
    cy.get('#inicio').should('be.visible')

    // Você também pode verificar outras coisas na sessão, se necessário
    cy.get('.title--big').should(
      'contain',
      'Impulsionamos pessoas, carreiras e projetos sociais',
    )
  })
  it('should check if the element link works session Dúvidas', () => {
    cy.get('[data-id="duvidas"] > a > span').click()
    // cy.wait(1000)
    // cy.get('[data-id="duvidas"] > a > span')
    //   .invoke('css', 'color')
    //   .then((corDoTexto) => {
    //     expect(corDoTexto).to.eq('rgb(135, 66, 255)')
    //   })
    // cy.wait(1000)

    // cy.get('tag do elemento').should('be.visible')

    // cy.get('tag do elemento').should('contain', 'texto')
  })
  it('should check if the element link works session Acompanhe', () => {
    cy.get('[data-id="acompanhe"] > a > span').click()
    // cy.wait(1000)
    // cy.get('[data-id="acompanhe"] > a > span')
    //   .invoke('css', 'color')
    //   .then((corDoTexto) => {
    //     expect(corDoTexto).to.eq('rgb(135, 66, 255)')
    //   })
    // cy.wait(1000)

    // cy.get('tag do elemento').should('be.visible')

    // cy.get('tag do elemento').should('contain', 'texto')
  })
  it('should check if the element link works session Contato', () => {
    cy.get('[data-id="contato"] > a > span').click()
    // cy.wait(1000)
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
