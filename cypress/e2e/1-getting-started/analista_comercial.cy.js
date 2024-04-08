/// <reference types="cypress" />

describe('Criar Novo Analista', () => {
    beforeEach(() => {
      cy.login();
    });
  
    it('deve criar um novo analista', () => {
      cy.createAnalyst();
    });
  });