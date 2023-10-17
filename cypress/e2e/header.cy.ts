describe('Testa se o Header está funcionando', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    // viewport para a tela grande, verficar como vai fazer para a menor
    cy.viewport(1280, 720)
    // Link para entender o viewport: https://docs.cypress.io/api/commands/viewport
    cy.wait(4000)
  })

  it('should be go to session begin', () => {
    // Localize o botão que você deseja clicar

    cy.getByData('inicio').click()
    cy.wait(3000)
    cy.getByData('indicator').should('be.visible')

    // Aguarde um momento para que a animação de rolagem seja concluída (ajuste conforme necessário)
    cy.wait(1000) // Ajuste o tempo de espera conforme necessário

    // Verifique se a sessão está visível na janela de visualização
    cy.getByData('Session-begin').should('be.visible')

    // Você também pode verificar outras coisas na sessão, se necessário
    cy.getByData('title').should(
      'contain',
      'Impulsionamos pessoas, carreiras e projetos sociais',
    ) // Substitua conforme necessário
  })
})
