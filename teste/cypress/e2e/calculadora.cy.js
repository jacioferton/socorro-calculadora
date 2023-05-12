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

describe('testando função subitrair', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:5500/teste/')
  })
  
  it('testando 6-7', () => {
    cy.get('#x').click()
    cy.get('#x').type('6')
    cy.get('#y').click()
    cy.get('#y').type('7')
    cy.get('#subtracaoN').click()
    cy.get('#resultado').should('have.text','-1')
    cy.get('#limparN').click()
  })
  
  it('testando 7-6', () => {
    cy.get('#x').click()
    cy.get('#x').type('7')
    cy.get('#y').click()
    cy.get('#y').type('6')
    cy.get('#subtracaoN').click()
    cy.get('#resultado').should('have.text','1')
    cy.get('#limparN').click()
  })
  
  it('testando 4-0', () => {
    cy.get('#x').click()
    cy.get('#x').type('4')
    cy.get('#y').click()
    cy.get('#y').type('0')
    cy.get('#subtracaoN').click()
    cy.get('#resultado').should('have.text','4')
    cy.get('#limparN').click()
  })
  
  it('testando 0-4', () => {
    cy.get('#x').click()
    cy.get('#x').type('0')
    cy.get('#y').click()
    cy.get('#y').type('4')
    cy.get('#subtracaoN').click()
    cy.get('#resultado').should('have.text','-4')
    cy.get('#limparN').click()
  })
  
  it('testando 400-600', () => {
    cy.get('#x').click()
    cy.get('#x').type('400')
    cy.get('#y').click()
    cy.get('#y').type('600')
    cy.get('#subtracaoN').click()
    cy.get('#resultado').should('have.text','-200')
    cy.get('#limparN').click()
  })
  
  it('testando 600-400', () => {
    cy.get('#x').click()
    cy.get('#x').type('600')
    cy.get('#y').click()
    cy.get('#y').type('400')
    cy.get('#subtracaoN').click()
    cy.get('#resultado').should('have.text','200')
    cy.get('#limparN').click()
  })
  
  it('testando 0-0', () => {
    cy.get('#x').click()
    cy.get('#x').type('0')
    cy.get('#y').click()
    cy.get('#y').type('0')
    cy.get('#subtracaoN').click()
    cy.get('#resultado').should('have.text','0')
    cy.get('#limparN').click()
  })
  
  it('testando 0-(-3)', () => {
    cy.get('#x').click()
    cy.get('#x').type('0')
    cy.get('#y').click()
    cy.get('#y').type('-3')
    cy.get('#subtracaoN').click()
    cy.get('#resultado').should('have.text','3')
    cy.get('#limparN').click()
  })
  
  it('testando (-3)-0', () => {
    cy.get('#x').click()
    cy.get('#x').type('-3')
    cy.get('#y').click()
    cy.get('#y').type('0')
    cy.get('#subtracaoN').click()
    cy.get('#resultado').should('have.text','-3')
    cy.get('#limparN').click()
  })
  
  it('testando "" - ""', () => {
    cy.get('#subtracaoN').click()
    cy.get('#resultado').should('have.text','Por favor insira um valor para ser calculado')
    cy.get('#limparN').click()
  })
})

describe('testando função multiplicar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/teste/')
  });
  it('testando 6x7', () => {
    cy.get('#x').click()
    cy.get('#x').type('6')
    cy.get('#y').click()
    cy.get('#y').type('7')
    cy.get('#multiplicacaoN').click()
    cy.get('#resultado').should('have.text','42')
  })
  
  it('testando 4x0', () => {
    cy.get('#x').click()
    cy.get('#x').type('4')
    cy.get('#y').click()
    cy.get('#y').type('0')
    cy.get('#multiplicacaoN').click()
    cy.get('#resultado').should('have.text','0')
  })
  
  it('testando 400x600', () => {
    cy.get('#x').click()
    cy.get('#x').type('400')
    cy.get('#y').click()
    cy.get('#y').type('600')
    cy.get('#multiplicacaoN').click()
    cy.get('#resultado').should('have.text','240000')
  })
  
  it('testando 0x0', () => {
    cy.get('#x').click()
    cy.get('#x').type('0')
    cy.get('#y').click()
    cy.get('#y').type('0')
    cy.get('#multiplicacaoN').click()
    cy.get('#resultado').should('have.text','0')
  })
  
  it('testando 1x(-3)', () => {
    cy.get('#x').click()
    cy.get('#x').type('1')
    cy.get('#y').click()
    cy.get('#y').type('-3')
    cy.get('#multiplicacaoN').click()
    cy.get('#resultado').should('have.text','-3')
  })
  
  it('testando "" x ""', () => {
    cy.get('#adicaoN').click()
    cy.get('#resultado').should('have.text','Por favor insira um valor para ser calculado')
    cy.get('#limparN').click()
  })
})

describe('testando função dividir', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/teste/')
  });
    it('testando 2/10', () => {
      cy.get('#x').click()
      cy.get('#x').type('2')
      cy.get('#y').click()
      cy.get('#y').type('10')
      cy.get('#divisaoN').click()
      cy.get('#resultado').should('have.text','0.2')
    })
    
    it('testando 10/2', () => {
      cy.get('#x').click()
      cy.get('#x').type('10')
      cy.get('#y').click()
      cy.get('#y').type('2')
      cy.get('#divisaoN').click()
      cy.get('#resultado').should('have.text','5')
    })
    
    it('testando 4/0', () => {
      cy.get('#x').click()
      cy.get('#x').type('4')
      cy.get('#y').click()
      cy.get('#y').type('0')
      cy.get('#divisaoN').click()
      cy.get('#resultado').should('have.text','ERRO!')
    })

    it('testando 0/4', () => {
      cy.get('#x').click()
      cy.get('#x').type('0')
      cy.get('#y').click()
      cy.get('#y').type('4')
      cy.get('#divisaoN').click()
      cy.get('#resultado').should('have.text','0')
    })
    
    it('testando 400/500', () => {
      cy.get('#x').click()
      cy.get('#x').type('400')
      cy.get('#y').click()
      cy.get('#y').type('500')
      cy.get('#divisaoN').click()
      cy.get('#resultado').should('have.text','0.8')
    })
    
    it('testando 500/400', () => {
      cy.get('#x').click()
      cy.get('#x').type('500')
      cy.get('#y').click()
      cy.get('#y').type('400')
      cy.get('#divisaoN').click()
      cy.get('#resultado').should('have.text','1.25')
    })
    
    it('testando 0x0', () => {
      cy.get('#x').click()
      cy.get('#x').type('0')
      cy.get('#y').click()
      cy.get('#y').type('0')
      cy.get('#divisaoN').click()
      cy.get('#resultado').should('have.text','ERRO!')
    })
    
    it('testando "" x ""', () => {
      cy.get('#divisaoN').click()
      cy.get('#resultado').should('have.text','Por favor insira um valor para ser calculado')
      cy.get('#limparN').click()
    })
  })

  describe('testando função potencia', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5500/teste/')
    });
    it('testando 5³', () => {
      cy.get('#x').click()
      cy.get('#x').type('5')
      cy.get('#y').click()
      cy.get('#y').type('3')
      cy.get('#potenciaN').click()
      cy.get('#resultado').should('have.text','125')
    })
    
    it('testando 5⁻³', () => {
      cy.get('#x').click()
      cy.get('#x').type('5')
      cy.get('#y').click()
      cy.get('#y').type('-3')
      cy.get('#potenciaN').click()
      cy.get('#resultado').should('have.text','0.008')
    })
    
    it('testando -5³', () => {
      cy.get('#x').click()
      cy.get('#x').type('-5')
      cy.get('#y').click()
      cy.get('#y').type('3')
      cy.get('#potenciaN').click()
      cy.get('#resultado').should('have.text','-125')
    })
    
    it('testando -5⁻³', () => {
      cy.get('#x').click()
      cy.get('#x').type('-5')
      cy.get('#y').click()
      cy.get('#y').type('-3')
      cy.get('#potenciaN').click()
      cy.get('#resultado').should('have.text','-0.008')
    })
    
    it('testando -5²', () => {
      cy.get('#x').click()
      cy.get('#x').type('-5')
      cy.get('#y').click()
      cy.get('#y').type('2')
      cy.get('#potenciaN').click()
      cy.get('#resultado').should('have.text','25')
    })
    
    it('testando 5²', () => {
      cy.get('#x').click()
      cy.get('#x').type('5')
      cy.get('#y').click()
      cy.get('#y').type('2')
      cy.get('#potenciaN').click()
      cy.get('#resultado').should('have.text','25')
    })
    
    it('testando -5⁻²', () => {
      cy.get('#x').click()
      cy.get('#x').type('-5')
      cy.get('#y').click()
      cy.get('#y').type('-2')
      cy.get('#potenciaN').click()
      cy.get('#resultado').should('have.text','0.04')
    })
    
    it('testando "" x ""', () => {
      cy.get('#potenciaN').click()
      cy.get('#resultado').should('have.text','Por favor insira um valor para ser calculado')
      cy.get('#limparN').click()
    })
})

describe('testando função fatorial', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/teste/')
  });
  it('testando -5!', () => {
    cy.get('#x').click()
    cy.get('#x').type('-5')
    cy.get('#fatorialN').click()
    cy.get('#resultado').should('have.text','Não é possível calcular o fatorial de um número negativo')
  })
  
  it('testando 0!', () => {
    cy.get('#x').click()
    cy.get('#x').type('0')
    cy.get('#fatorialN').click()
    cy.get('#resultado').should('have.text','1')
  })
  
  it('testando 5!', () => {
    cy.get('#x').click()
    cy.get('#x').type('5')
    cy.get('#fatorialN').click()
    cy.get('#resultado').should('have.text','120')
  })
  
  it('testando "" n! ""', () => {
    cy.get('#fatorialN').click()
    cy.get('#resultado').should('have.text','Por favor insira um valor para ser calculado')
    cy.get('#limparN').click()
  })
})

describe('testando função raiz', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/teste/')
  });
  it('testando √9', () => {
    cy.get('#x').click()
    cy.get('#x').type('9')
    cy.get('#raizN').click()
    cy.get('#resultado').should('have.text','3')
  })
  
  it('testando √3', () => {
    cy.get('#x').click()
    cy.get('#x').type('3')
    cy.get('#raizN').click()
    cy.get('#resultado').should('have.text','1.7320508075688772')
  })
  
  it('testando √-3', () => {
    cy.get('#x').click()
    cy.get('#x').type('3')
    cy.get('#raizN').click()
    cy.get('#resultado').should('have.text','1.7320508075688772')
  })
  
  it('testando "" √n ""', () => {
    cy.get('#raizN').click()
    cy.get('#resultado').should('have.text','Por favor insira um valor para ser calculado')
    cy.get('#limparN').click()
  })
})

describe('testando função impar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/teste/')
  });
  it('testando 15', () => {
    cy.get('#x').click()
    cy.get('#x').type('15')
    cy.get('#imparN').click()
    cy.get('#resultado').should('have.text','15 é impar')
  })
  
  it('testando 0.5', () => {
    cy.get('#x').click()
    cy.get('#x').type('0.5')
    cy.get('#imparN').click()
    cy.get('#resultado').should('have.text','0.5 é impar')
  })
  
  it('testando 4', () => {
    cy.get('#x').click()
    cy.get('#x').type('4')
    cy.get('#imparN').click()
    cy.get('#resultado').should('have.text','4 não é impar')
  })
  
  it('testando "" é impar ""', () => {
    cy.get('#imparN').click()
    cy.get('#resultado').should('have.text','Por favor insira um valor para ser calculado')
    cy.get('#limparN').click()
  })
})

describe('testando função par', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/teste/')
  });
  it('testando 15', () => {
    cy.get('#x').click()
    cy.get('#x').type('15')
    cy.get('#parN').click()
    cy.get('#resultado').should('have.text','15 não é par')
  })
  
  it('testando 0.2', () => {
    cy.get('#x').click()
    cy.get('#x').type('0.2')
    cy.get('#parN').click()
    cy.get('#resultado').should('have.text','0.2 não é par')
  })
  
  it('testando 4', () => {
    cy.get('#x').click()
    cy.get('#x').type('4')
    cy.get('#parN').click()
    cy.get('#resultado').should('have.text','4 é par')
  })
  
  it('testando "" é par ""', () => {
    cy.get('#parN').click()
    cy.get('#resultado').should('have.text','Por favor insira um valor para ser calculado')
    cy.get('#limparN').click()
  })
})

describe('testando função primo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/teste/')
  });
  it('testando 15', () => {
    cy.get('#x').click()
    cy.get('#x').type('15')
    cy.get('#primoN').click()
    cy.get('#resultado').should('have.text','15 não é primo')
  })
  
  it('testando 3', () => {
    cy.get('#x').click()
    cy.get('#x').type('3')
    cy.get('#primoN').click()
    cy.get('#resultado').should('have.text','3 é primo')
  })
  
  it('testando 73', () => {
    cy.get('#x').click()
    cy.get('#x').type('73')
    cy.get('#primoN').click()
    cy.get('#resultado').should('have.text','73 é primo')
  })
  
  it('testando "" é primo ""', () => {
    cy.get('#primoN').click()
    cy.get('#resultado').should('have.text','Por favor insira um valor para ser calculado')
    cy.get('#limparN').click()
  })
})