describe('session about us', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.wait(3000)
  })

  it('verifica se a classe about existe', () => {
    cy.get('[class^="style_about"]').should('exist')
  })

  it('title Quem somos e subtitulo como funciona', () => {
    cy.get('h2').contains('Quem somos')
    cy.get('h3').contains('Como funciona?')
    cy.get('[class^="style_right"]')
      .find(':first-child') // Seleciona o primeiro elemento filho da div.text-right
      .should(
        'have.text',
        'A Tech Pro Bem é uma comunidade de tecnologia onde conectamos profissionais de diferentes áreas para criar soluções digitais para ONGs e projetos sociais.',
      ) // Substitua 'Texto Esperado' pelo conteúdo esperado
  })

  it('tamanho section about', () => {
    cy.viewport(1935, 1080)
    cy.get('[class^="style_about"]').then(($elemento) => {
      // Obtém as dimensões reais do elemento
      const larguraElemento = $elemento[0].clientWidth
      const alturaElemento = $elemento[0].clientHeight

      // Realize as asserções para verificar as dimensões
      expect(larguraElemento).to.equal(1920) // px
      expect(alturaElemento).to.equal(685) // 544
    })
  })

  it('verifica container', () => {
    cy.viewport(1920, 1080)

    cy.get('.container').should('exist')
    cy.get('.container').then(($elemento) => {
      const larguraElemento = $elemento[1].clientWidth
      expect(larguraElemento).to.equal(1170) // px
    })
  })
})
