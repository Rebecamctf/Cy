/// <reference types="cypress" />



describe('Create Network', () => {
  it('should create a new network', () => {
    cy.login();
    cy.createNetwork();
    // Adicionar asserções necessárias aqui
  });
});
