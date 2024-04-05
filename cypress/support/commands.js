/*
const faker = require('faker');


Cypress.Commands.add('login', () => {
    cy.visit('https://comercialhml.drcash.com.br/').then(() => {
      // Esperar até que a URL mude para indicar que a página foi carregada
      cy.url().should('not.eq', 'about:blank');
    });
  
    cy.get('#inputEmailLogin').type('comercialadmin@drcash.com.br');
    cy.get('#inputPasswordLogin').type('drcash22!');
    cy.get('#buttonSubmitFormLogin').click();
  });
   


  Cypress.Commands.add('createNetwork', () => {
    // Continuar com as interações para criar a rede
    cy.get('#buttonAddNetworkClinics').click();
    cy.get('#nameFieldNetworkCreation').type(faker.company.companyName());
    cy.get('#radioAdminDontExistsNetworkCreation').click();
    cy.get('#adminNameFieldNetworkCreation').type(faker.name.findName());
    cy.get('#adminEmailFieldNetworkCreation').type(faker.internet.email());
    cy.get('#adminCpfFieldNetworkCreation').type(faker.br.cpf());
    cy.get('#adminPhoneFieldNetworkCreation').type(faker.phone.phoneNumber());
    cy.get('#adminBirthdateFieldNetworkCreation').type(faker.date.past().toLocaleDateString('pt-BR'));
    const password = faker.internet.password();
    cy.get('#adminPasswordFieldNetworkCreation').type(password);
    cy.get('#adminConfirmPasswordFieldNetworkCreation').type(password);
    cy.get('#buttonSubmitActionModal').click();
  });
 */  
// ==+====+====+====+====+====+====+====+====+====+====+====+====+====+====+==
// NÃO FUNCIONA COM O FAKER, DÁ ERRO NO CAMPO CPF


// SEM O FAKER

Cypress.Commands.add('login', () => {
    cy.visit('https://comercialhml.drcash.com.br/').then(() => {
      // Esperar até que a URL mude para indicar que a página foi carregada
      cy.url().should('not.eq', 'about:blank');
    });
  
    cy.get('#inputEmailLogin').type('comercialadmin@drcash.com.br');
    cy.get('#inputPasswordLogin').type('drcash22!');
    cy.get('#buttonSubmitFormLogin').click();
  });
   
  
  Cypress.Commands.add('createNetwork', () => {
    cy.get('#buttonAddNetworkClinics').click();
    cy.get('#nameFieldNetworkCreation').type('Rede automáticaz');
    cy.get('#radioAdminDontExistsNetworkCreation').click();
    cy.get('#adminNameFieldNetworkCreation').type('Admz da Rede Automática');
    cy.get('#adminEmailFieldNetworkCreation').type('autooR@rede.com');
    cy.get('#adminCpfFieldNetworkCreation').type('456.365.877-40');
    cy.get('#adminPhoneFieldNetworkCreation').type('11912345644');
    cy.get('#adminBirthdateFieldNetworkCreation').type('01012000');
    cy.get('#adminPasswordFieldNetworkCreation').type('123456');
    cy.get('#adminConfirmPasswordFieldNetworkCreation').type('123456');
    cy.get('#buttonSubmitActionModal').click();
  });
 