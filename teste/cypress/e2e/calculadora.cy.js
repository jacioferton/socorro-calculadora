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
    cy.get('#limparN').click()
  })

  it('testando 4+0', () => {
    cy.get('#x').click()
    cy.get('#x').type('4')
    cy.get('#y').click()
    cy.get('#y').type('0')
    cy.get('#adicaoN').click()
    cy.get('#resultado').should('have.text','4')
    cy.get('#limparN').click()
  })

  it('testando 400+600', () => {
    cy.get('#x').click()
    cy.get('#x').type('400')
    cy.get('#y').click()
    cy.get('#y').type('600')
    cy.get('#adicaoN').click()
    cy.get('#resultado').should('have.text','1000')
    cy.get('#limparN').click()
  })

  it('testando 0+0', () => {
    cy.get('#x').click()
    cy.get('#x').type('0')
    cy.get('#y').click()
    cy.get('#y').type('0')
    cy.get('#adicaoN').click()
    cy.get('#resultado').should('have.text','0')
    cy.get('#limparN').click()
  })

  it('testando 0+(-3)', () => {
    cy.get('#x').click()
    cy.get('#x').type('0')
    cy.get('#y').click()
    cy.get('#y').type('-3')
    cy.get('#adicaoN').click()
    cy.get('#resultado').should('have.text','-3')
    cy.get('#limparN').click()
  })
  
  it('testando "" + ""', () => {
    cy.get('#adicaoN').click()
    cy.get('#resultado').should('have.text','Por favor insira um valor para ser calculado')
    cy.get('#limparN').click()
  })
})
//