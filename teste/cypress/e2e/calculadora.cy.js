/// <reference types='cypress'/>

describe('testando função somar', () => {
beforeEach(() => {
  cy.visit('http://localhost:5500/teste/index.html')
});
  it('testando 6+7', ()=>{
    cy.get('#x').click()
    cy.get('#x').type('6')
    cy.get('#operacoes').type('#somar')
    cy.get('#y').click()
    cy.get('#y').type('7')
  });
});