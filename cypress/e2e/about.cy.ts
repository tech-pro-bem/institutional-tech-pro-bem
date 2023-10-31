describe('session about us', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have the class about', () => {
    cy.get('[class^="style_about"]').should('exist')
  })

  it(`should have the title "Quem somos" e subtitle "Como funciona"`, () => {
    cy.get('h2').contains('Quem somos')
    cy.get('h3').contains('Como funciona?')
  })
  it('should have the text on the left', () => {
    cy.get('[class^="style_text__block_1"]')
      .find(':first-child')
      .should(
        'have.text',
        'A Tech Pro Bem é uma comunidade de tecnologia onde conectamos profissionais de diferentes áreas para criar soluções digitais para ONGs e projetos sociais.',
      )
    cy.get('[class^="style_text__block_1"]')
      .find(':nth-child(2)')
      .should(
        'have.text',
        'Oferecemos experiência prática em um time multidisciplinar, com o objetivo de impulsionar o aprendizado das competências necessárias para superar desafios de entrada ou de crescimento no mercado de trabalho.',
      )
  })
  it('should have the text on the right', () => {
    cy.get('[class^="style_text__block_2"]')
      .find(':nth-child(2)')
      .contains(
        'Selecionamos uma organização sem fins lucrativos que entrou em contato conosco e passou por um alinhamento de objetivos e expectativas. A cada ciclo realizamos um processo seletivo para formar nossas equipes com',
      )
  })

  it('verifica padding da sessao about', () => {
    cy.viewport(1935, 1080)
    cy.get('[class^="style_about"]').should('have.css', 'padding-top', '130px')
    cy.get('[class^="style_about"]').should(
      'have.css',
      'padding-bottom',
      '232px',
    )
  })

  it('should check height and width of section about', () => {
    cy.viewport(1935, 1080)
    cy.get('[class^="style_about"]').then(($elemento) => {
      const larguraElemento = $elemento[0].clientWidth
      const alturaElemento = $elemento[0].clientHeight
      expect(larguraElemento).to.equal(1920)
      expect(alturaElemento).to.equal(633)
    })
  })

  it('should check height and width of section about', () => {
    // Ajuste a viewport para o tamanho desejado
    cy.viewport(1935, 1080)

    // Selecione o elemento
    cy.get('[class^="style_about"]').then(($elemento) => {
      // Obtenha as dimensões calculadas do elemento, incluindo a barra de rolagem
      const estiloCalculado = window.getComputedStyle($elemento[0])
      const larguraElemento = parseInt(
        estiloCalculado.getPropertyValue('width'),
      )
      const alturaElemento = parseInt(
        estiloCalculado.getPropertyValue('height'),
      )

      // Verifique as dimensões do elemento
      expect(larguraElemento).to.equal(1920)
      expect(alturaElemento).to.equal(633)
    })
  })

  it('should check width of container', () => {
    cy.viewport(1920, 1080)

    cy.get('.container').should('exist')
    cy.get('.container').then(($elemento) => {
      const larguraElemento = $elemento[1].clientWidth
      expect(larguraElemento).to.equal(1170)
    })
  })
})

describe('should check overflow', () => {
  it('verifica se o container está dentro dos limites da sessao about', () => {
    cy.visit('http://localhost:3000')
    cy.get('[class^="style_about"]').then(($about) => {
      const aboutWidth = $about.width()
      const aboutHeight = $about.height()
      cy.get('[class^="style_layout_about"]').then((container) => {
        const containerWidth = container.width()
        const containerHeight = container.height()
        expect(containerWidth).to.be.at.most(Number(aboutWidth))
        expect(containerHeight).to.be.at.most(Number(aboutHeight))
      })
    })
  })
})

describe('should check overflow text', () => {
  it('verifica se o elemento filho está dentro dos limites do elemento pai', () => {
    cy.visit('http://localhost:3000')
    cy.get('[class^="style_text__block_1"]').then(($left) => {
      const leftWidth = $left.width()
      const leftHeight = $left.height()

      cy.get('[class^="style_text__block_1"]')
        .find(':first-child')
        .then((firstParagraph) => {
          const firstParagraphWidth = firstParagraph.width()
          const firstParagraphHeight = firstParagraph.height()
          expect(firstParagraphWidth).to.be.at.most(Number(leftWidth))
          expect(firstParagraphHeight).to.be.at.most(Number(leftHeight))
        })

      cy.get('[class^="style_text__block_1"]')
        .find(':nth-child(2)')
        .then((secondParagraph) => {
          const secondParagraphWidth = secondParagraph.width()
          const secondParagraphHeight = secondParagraph.height()
          expect(secondParagraphWidth).to.be.at.most(Number(leftWidth))
          expect(secondParagraphHeight).to.be.at.most(Number(leftHeight))
        })
    })
  })
})

describe('should check overflow text block 1', () => {
  it('verifica se os 2 paragrafos entao dentro da div text__block_1', () => {
    cy.visit('http://localhost:3000')
    cy.get('[class^="style_text__block_1"]').then(($pai) => {
      const paiWidth = $pai.width()
      const paiHeight = $pai.height()

      cy.get('[class^="style_text__block_1"]')
        .find(':first-child')
        .then((filho) => {
          const filhoWidth = Number(filho.width())
          expect(filhoWidth).to.be.at.most(Number(paiWidth))
          const filhoHeight = Number(filho.height())

          cy.get('[class^="style_text__block_1"]')
            .find(':nth-child(2)')
            .then((filho2) => {
              const filho2Width = Number(filho2.width())
              expect(filho2Width).to.be.at.most(Number(paiWidth))
              const filho2Height = Number(filho2.height())

              const somaAlturas = filhoHeight + filho2Height
              expect(somaAlturas).to.be.at.most(Number(paiHeight))
            })
        })
    })
  })
})
