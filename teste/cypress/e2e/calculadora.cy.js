describe('testando função somar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/teste/')
  });
  it('testando 6+7', () => {
    cy.get('#x').click()
    cy.get('#x').type('6')
    cy.get('#y').click()
    cy.get('#y').type('7')
    cy.get('#adicaoN').click()
    cy.get('#resultado').should('have.text','13')
    cy.get('#resultado').type('')

    
  })
})