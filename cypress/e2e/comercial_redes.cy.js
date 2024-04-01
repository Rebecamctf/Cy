/// <reference types="cypress" />


describe('Login', () => {
    
    it('Deve fazer login com sucesso', () => {
    cy.visit('https://comercialhml.drcash.com.br/');

    // Preencher os campos de nome de usuário e senha 
    cy.get('#inputEmailLogin').type('comercialadmin@drcash.com.br');
    cy.get('#inputPasswordLogin').type('drcash22!');

    // Clicar no botão "Fazer login"
    cy.get('#buttonSubmitFormLogin').click();

    // Aguardar 2 segundos antes de prosseguir
    cy.wait(5000);

    
  // ==*====*====*====*====*====*====*====*====*====*====*====*====*==
    // Criando uma nova rede

    // Clicar no botão +Cadastrar
    cy.get('#buttonAddNetworkClinics').click()

    // Preencher nome da Rede
    cy.get('#nameFieldNetworkCreation').type('Rede automática')

    // Escolher Novo cadastro
    cy.get('#radioAdminDontExistsNetworkCreation').click()

    // Preencher Formulário
    cy.get('#adminNameFieldNetworkCreation').type('Adm da Rede Automática')
    cy.get('#adminEmailFieldNetworkCreation').type('auto@rede.com')
    cy.get('#adminCpfFieldNetworkCreation').type('516.712.824-26')
    cy.get('#adminPhoneFieldNetworkCreation').type('11912345678')
    cy.get('#adminBirthdateFieldNetworkCreation').type('01012000')
    cy.get('#adminPasswordFieldNetworkCreation').type('123456')
    cy.get('#adminConfirmPasswordFieldNetworkCreation').type('123456')
    cy.get('#buttonSubmitActionModal').click()
  })
});