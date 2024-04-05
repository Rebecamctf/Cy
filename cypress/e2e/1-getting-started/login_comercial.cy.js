/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.fixture('urlLogin').as('siteData'); //chamando a fixtures c/ alias
  });                 

  it('Should login with invalid password', function () {
    cy.visit(this.siteData.baseUrl); //chamando a url precisa do this.
    cy.get('@siteData').then((siteData) => { 
      cy.get('#inputEmailLogin').type(siteData.loginCredentials.username);
      cy.get('#inputPasswordLogin').type('senha_incorreta'); // Usando uma senha incorreta
      cy.get('#buttonSubmitFormLogin').click();
      cy.get('.errorContainer', { timeout: 10000 }).should('be.visible'); // Asserção para verificar a mensagem de erro
      // Incluir asserção para verificar a mensagem de erro
    });
  });

  it('Should login with invalid email', function () {
    cy.visit(this.siteData.baseUrl);
    cy.get('@siteData').then((siteData) => {
      cy.get('#inputEmailLogin').type('email_incorreto@drcash.com.br'); // Usando um email incorreto
      cy.get('#inputPasswordLogin').type(siteData.loginCredentials.password);
      cy.get('#buttonSubmitFormLogin').click();
      cy.get('.errorContainer', { timeout: 10000 }).should('be.visible'); // Asserção para verificar a mensagem de erro
      // Incluir asserção para verificar a mensagem de erro
    });
  });

  it('Should login successfully', function () {
    cy.visit(this.siteData.baseUrl);
    cy.get('@siteData').then((siteData) => {
      cy.get('#inputEmailLogin').type(siteData.loginCredentials.username);
      cy.get('#inputPasswordLogin').type(siteData.loginCredentials.password);
      cy.get('#buttonSubmitFormLogin').click();
      // Incluir asserção para verificar o redirecionamento para a página de sucesso
    });
  });
});


