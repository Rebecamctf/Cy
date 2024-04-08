/// <reference types="cypress" />

// e2e/responsavel.spec.js
describe('Criar Novo Assessor', () => {
    beforeEach(() => {
      cy.login();
    });
  
    it('deve criar um novo assessor', () => {
      cy.createAdvisor();
    });
  });
  