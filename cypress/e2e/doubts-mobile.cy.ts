describe('Mobile - section doubts', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(375, 640)
  })

  it('should render the doubts section', () => {
    cy.get('[id^="duvidas"]').should('exist')
  })

  it('should check padding of doubts section', () => {
    cy.get('[id^="duvidas"]').should('have.css', 'padding-bottom', '128px')
    cy.get('[id^="duvidas"]').should('have.css', 'padding-top', '72px')
  })

  it('should have a title with 32px of font size', () => {
    cy.get('[id^="duvidas"]').find('h2').should('have.css', 'font-size', '32px')
  })

  it('should check if title has a bottom margin', () => {
    cy.get('[id^="duvidas"]')
      .find('h2')
      .should('have.css', 'margin-bottom', '16px')
  })

  it('should have a description with 20px of font size', () => {
    cy.get('[id^="duvidas"]').find('h3').should('have.css', 'font-size', '20px')
  })

  it('should check if description has a bottom margin', () => {
    cy.get('[id^="duvidas"]')
      .find('h3')
      .should('have.css', 'margin-bottom', '72px')
  })

  it('should check it tabs have a bottom boder', () => {
    cy.get('[data-cy="tabs_box"]').should(
      'have.css',
      'border-bottom',
      '1px solid rgb(189, 186, 185)',
    )
    cy.get('[data-cy="tabs_box"]').should('have.css', 'margin-bottom', '16px')
  })

  it('should check padding and font-size of tab component', () => {
    cy.get('*[data-cy^="tab_box"]').then(($categories) => {
      for (let i = 0; i < $categories.length; i++) {
        cy.wrap($categories[i])
          .invoke('css', 'padding')
          .should('equal', '12px 4px')
        cy.wrap($categories[i])
          .invoke('css', 'font-size')
          .should('equal', '16px')
      }
    })
  })

  it('should click the tab button and check for color change', () => {
    cy.get('[data-cy="tab_box"]').then(($categories) => {
      for (let i = 0; i < $categories.length; i++) {
        $categories[i].click()
        cy.get('[data-cy="tab_box"]')
          .invoke('css', 'background-color')
          .then(() => {
            cy.get('[data-cy="tab_box"]').should(
              'not.have.css',
              'background-color',
              'rgb(135, 66, 255)',
            )
          })
      }
    })
  })

  it('should check padding and font-size of each accordion summary', () => {
    cy.get('[data-cy="accordion_summary"]').then(($accordion) => {
      for (let i = 0; i < $accordion.length; i++) {
        cy.wrap($accordion[i]).invoke('css', 'padding-block', '16px')
        cy.wrap($accordion[i]).invoke('css', 'font-size', '16px')
      }
    })
  })

  it('should check height and width of expand icon', () => {
    cy.get('[data-cy="expand_icon"]').then(($icon) => {
      for (let i = 0; i < $icon.length; i++) {
        const iconHeight = $icon[i].clientHeight
        const iconWidth = $icon[i].clientWidth
        expect(iconHeight).to.be.equal(24)
        expect(iconWidth).to.be.equal(24)
      }
    })
  })

  it('should check if accordion details it is not visible', () => {
    cy.get('[data-cy="accordion_details"]').should('not.be.visible')
  })

  it('should expand and collapse accordion on click', () => {
    cy.get('[data-cy="accordion"]').each(($accordion, index) => {
      cy.wrap($accordion).click()
      cy.get('[data-cy="accordion_details"]').eq(index).should('be.visible')
    })
  })

  it('should check padding and font-size of each accordion details', () => {
    cy.get('[data-cy="accordion"]').each(($accordion, index) => {
      cy.wrap($accordion).click()
      cy.get('[data-cy="accordion_details"]')
        .eq(index)
        .invoke('css', 'padding-block', '8px 24px')

      cy.get('[data-cy="accordion_details"]')
        .eq(index)
        .invoke('css', 'font-size', '14px')
    })
  })
})
