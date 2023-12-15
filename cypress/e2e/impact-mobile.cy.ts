describe('Mobile - section our impact', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.viewport(375, 640)
  })

  it('should render the our impact section', () => {
    cy.get('[id^="impact"]').should('exist')
  })

  it('should check width and height of section our impact', () => {
    cy.get('[id^="impact"]').then(($element) => {
      const elementWidth = $element[0].clientWidth
      const elementHeight = $element[0].clientHeight
      expect(elementWidth).to.be.equal(312)
      expect(elementHeight).to.be.equal(738)
    })
  })

  it('should check padding of section out impact', () => {
    cy.get('[id^="impact"]').should('have.css', 'padding-block', '72px')
  })

  it('should check height of the impact componente title', () => {
    cy.get('[id^="impact"]')
      .find('h2')
      .then(($title) => {
        for (let i = 0; i > $title.length; i++) {
          const titleHeight = $title[i].clientHeight

          expect(titleHeight).to.be.equal(40)
        }
      })
  })

  it('should check width and height of the text in the impact metrics', () => {
    cy.get('[id^="impact"]')
      .find('h1')
      .then(($impact) => {
        for (let i = 0; i > $impact.length; i++) {
          const impactWidth = $impact[i].clientWidth
          const impactHeight = $impact[i].clientHeight

          expect(impactWidth).to.be.equal(190)
          expect(impactHeight).to.be.equal(48)
        }
      })
  })

  it('should check width and height of the description text', () => {
    cy.get('[id^="impact"]')
      .find('p')
      .then(($impact) => {
        for (let i = 0; i > $impact.length; i++) {
          const impactWidth = $impact[i].clientWidth
          const impactHeight = $impact[i].clientHeight

          expect(impactWidth).to.be.equal(190)
          expect(impactHeight).to.be.equal(66)
        }
      })
  })

  it('should check width and height of an impact box item', () => {
    cy.get('[class^="style_impact"]').then(($impact_box) => {
      for (let i = 0; i > $impact_box.length; i++) {
        const impactBoxWidth = $impact_box[i].clientWidth
        const impactBoxHeight = $impact_box[i].clientHeight

        expect(impactBoxWidth).to.be.equal(190)
        expect(impactBoxHeight).to.be.equal(118)
      }
    })
  })

  it('should check width and height of div impact box', () => {
    cy.get('[class^="style_impact_box"]').then(($impact_box) => {
      for (let i = 0; i > $impact_box.length; i++) {
        const impactBoxWidth = $impact_box[i].clientWidth
        const impactBoxHeight = $impact_box[i].clientHeight

        expect(impactBoxWidth).to.be.equal(190)
        expect(impactBoxHeight).to.be.equal(482)
      }
    })
  })
})
