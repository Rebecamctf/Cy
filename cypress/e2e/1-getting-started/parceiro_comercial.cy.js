/// <reference types="cypress" />


// integration/parceiro.spec.js
describe('Criar Novo Parceiro de Indicação', () => {
  beforeEach(() => {
    cy.login();
  });

  it('deve criar um novo parceiro de indicação', () => {
    cy.createPartner();
  });
});

  