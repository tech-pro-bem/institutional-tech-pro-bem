/* eslint-disable no-unused-expressions */
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.wait(3000)
  })

  it('should render the template', () => {
    cy.getByData('body').should('exist')
  })

  it('should have the child element inside the parent for computer screens', () => {
    cy.viewport(1280, 1080)
    // Selecione o elemento pai
    cy.getByData('body').then(($elementoPai) => {
      // Selecione o elemento filho
      cy.getByData('filho').then(($elementoFilho) => {
        // Verifique se o elemento filho está contido no elemento pai
        // eslint-disable-next-line no-unused-expressions
        expect($elementoPai[0].contains($elementoFilho[0])).to.be.true
      })
    })
  })
  it('should have the child element inside the parent for mobile screens', () => {
    cy.viewport(320, 568)
    // Selecione o elemento pai
    cy.getByData('body').then(($elementoPai) => {
      // Selecione o elemento filho
      cy.getByData('filho').then(($elementoFilho) => {
        // Verifique se o elemento filho está contido no elemento pai
        // eslint-disable-next-line no-unused-expressions
        expect($elementoPai[0].contains($elementoFilho[0])).to.be.true
      })
    })
  })

  it('Verificar posição do elemento filho em relação ao elemento pai', () => {
    cy.viewport(1280, 1080)
    // Selecione o elemento pai
    cy.getByData('body').then(($elementoPai) => {
      // Selecione o elemento filho
      cy.getByData('filho').then(($elementoFilho) => {
        // Obtém as coordenadas do elemento pai
        const paiRect = $elementoPai[0].getBoundingClientRect()

        // Obtém as coordenadas do elemento filho
        const filhoRect = $elementoFilho[0].getBoundingClientRect()

        // Verifica se o elemento filho está contido no elemento pai com base nas coordenadas
        expect(filhoRect.left >= paiRect.left).to.be.true
        expect(filhoRect.right <= paiRect.right).to.be.true
        expect(filhoRect.top >= paiRect.top).to.be.true
        expect(filhoRect.bottom <= paiRect.bottom).to.be.true
      })
    })
  })

  it(' should check height and width of the Home element on a computer screen', () => {
    cy.viewport(1920, 558)

    // Selecione o elemento cujo tamanho você deseja verificar
    cy.getByData('begin').then(($elemento) => {
      // Obtém as dimensões reais do elemento
      const larguraElemento = $elemento[0].clientWidth
      const alturaElemento = $elemento[0].clientHeight

      // Realize as asserções para verificar as dimensões
      expect(larguraElemento).to.equal(1170) // px
      expect(alturaElemento).to.equal(510) // px
    })
  })

  it('should check height and width of the Home element on a mobile screen', () => {
    cy.viewport(360, 724)

    // Selecione o elemento cujo tamanho você deseja verificar
    cy.getByData('begin').then(($elemento) => {
      // Obtém as dimensões reais do elemento
      const larguraElemento = $elemento[0].clientWidth
      const alturaElemento = $elemento[0].clientHeight

      // Realize as asserções para verificar as dimensões
      // As dimensôes foram baseadas pelo padding do elemento

      // padding: 32px, 24px, 32px, 24px

      expect(larguraElemento).to.equal(312) // 324
      expect(alturaElemento).to.equal(660) // 523
    })
  })
})
