/// <reference types="cypress" />


describe('Login', () => {
  it('Deve fazer login com falha na senha', () => {
    cy.visit('https://comercialhml.drcash.com.br/');

    // Preencher os campos de nome de usuário certo e senha errada
    cy.get('#inputEmailLogin').type('comercialadmin@drcash.com.br');
    cy.get('#inputPasswordLogin').type('drcas22!');

    // Clicar no botão "Fazer login"
    cy.get('#buttonSubmitFormLogin').click();

  });

  it('Deve fazer login com falha no email', () => {
    cy.visit('https://comercialhml.drcash.com.br/');

    // Preencher os campos de nome de usuário errado e senha certa
    cy.get('#inputEmailLogin').type('comercialadmi@drcash.com.br');
    cy.get('#inputPasswordLogin').type('drcash22!');

    // Clicar no botão "Fazer login"
    cy.get('#buttonSubmitFormLogin').click();

  });

  it('Deve fazer login com sucesso', () => {
    cy.visit('https://comercialhml.drcash.com.br/');

    // Preencher os campos de nome de usuário e senha 
    cy.get('#inputEmailLogin').type('comercialadmin@drcash.com.br');
    cy.get('#inputPasswordLogin').type('drcash22!');

    // Clicar no botão "Fazer login"
    cy.get('#buttonSubmitFormLogin').click();

  });
});

/* 
Autora: rebeca treta
Data: 01/04/24
*/