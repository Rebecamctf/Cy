/// <reference types="cypress" />

// e2e/responsavel.spec.js
describe('Criar Novo Consultor', () => {
    beforeEach(() => {
      cy.login();
    });
  
    it('deve criar um novo consultor', () => {
      cy.createConsultant();
    });
  });