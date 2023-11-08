describe('Desktop - session about us', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.viewport(1935, 1080)
  })

  it('should have the class about', () => {
    cy.get('[class^="style_about"]').should('exist')
  })

  it(`should have the title "Quem somos" e subtitle "Como funciona"`, () => {
    cy.get('h2').contains('Quem somos')
    cy.get('h3').contains('Como funciona?')
  })
  it('should have the text on the block 1', () => {
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
  it('should have the text on the block 2', () => {
    cy.get('[class^="style_text__block_2"]')
      .find(':nth-child(2)')
      .contains(
        'Selecionamos uma organização sem fins lucrativos que entrou em contato conosco e passou por um alinhamento de objetivos e expectativas. A cada ciclo realizamos um processo seletivo para formar nossas equipes com',
      )
  })

  it('verifica padding da sessao about', () => {
    cy.get('[class^="style_about"]').should('have.css', 'padding-top', '130px')
    cy.get('[class^="style_about"]').should(
      'have.css',
      'padding-bottom',
      '232px',
    )
  })

  it('should check height and width of section about', () => {
    cy.get('[class^="style_about"]').then(($elemento) => {
      const larguraElemento = $elemento[0].clientWidth
      const alturaElemento = $elemento[0].clientHeight
      expect(larguraElemento).to.be.equal(1920) // 1920 ± 2
      expect(alturaElemento).to.be.within(631, 635) // 633 ± 2
    })
  })

  it('should check height and width of section about', () => {
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
      expect(larguraElemento).to.be.within(1918, 1922) // 1920 ± 2
      expect(alturaElemento).to.be.within(631, 635) // 633 ± 2
    })
  })

  it('should check width of container', () => {
    cy.get('.container').should('exist')
    cy.get('.container').then(($elemento) => {
      const larguraElemento = $elemento[1].clientWidth
      expect(larguraElemento).to.equal(1170)
    })
  })

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

  it('verifica se os possui 2 paragrafos dentro da div text__block_1', () => {
    cy.visit('http://localhost:3000')
    cy.get('[class^="style_text__block_1"]').should('have.length', 1)

    cy.get('[class^="style_text__block_1"]').find('p').should('have.length', 2)

    cy.get('[class^="style_text__block_1"]')
      .find(':first-child')
      .should(($paragrafo) => {
        const texto = $paragrafo.text()
        expect(texto.length).to.be.lessThan(165)
      })

    cy.get('[class^="style_text__block_1"]')
      .find(':nth-child(2)')
      .should(($paragrafo) => {
        const texto = $paragrafo.text()
        expect(texto.length).to.be.lessThan(210)
      })
  })
})
