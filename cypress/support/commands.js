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
   

// CREATE 
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
   
  /*  ADD NETWORK
   ==+====+====+====+====+====+====+====+====+====+====+====+====+====+====+==
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
  ==+====+====+====+====+====+====+====+====+====+====+====+====+====+====+==
 */
// UPDATE + READ -- REDE
  Cypress.Commands.add('updateNetwork', () => {
    // Adicionar asserções necessárias aqui
    cy.get('#networksMenuItem', { timeout: 10000, force: true }).should('be.visible')
   
    // rede automatica
    // INFORMAÇÕES - editar nome sem alterar e salvar
    cy.get('#index0NetworkCardClinics').click()
    //cy.get('#tabActivitiesNetworkDetails').click()
    //cy.get('#editFieldNetworkNameNetworkDetailsEdit').click()
    //cy.get('#editFieldNetworkNameNetworkDetailsSubmit').click()

    // UPDATE + READ -- CLÍNICA
    cy.get('#networkClinicsTableRowIndex0', { timeout: 10000, force: true }).click()
    cy.get('#tabInformationsClinicDetails', { timeout: 10000, force: true }).should('be.visible')
    cy.waitUntil(() => cy.get('#editFieldContactTradingNameClinicDetailsEdit').should('exist'), { timeout: 10000, interval: 1000 })
    cy.get('.MuiInputBase-root-70.MuiOutlinedInput-root-58 input[type="text"]').clear().type('Novo valor do campo')

  });


  /*  ADD TERMS -> NÃO FINALIZOU
   ==+====+====+====+====+====+====+====+====+====+====+====+====+====+====+==
  Cypress.Commands.add('uploadDocument', () => {
    cy.get('#termsMenuItem').click();
    cy.get('#buttonAddTermTerms').click();
  
    // Verificar se o campo está visível antes de selecionar
    cy.get('#termTypeAutocompleteTermCreation').first();
      //cy.get('#termTypeAutocompleteTermCreation').should('be.visible', { timeout: 30000 }).select(firstOptionText);
    
    // Esperar pelo carregamento do arquivo
    
    cy.get('#inputFileTermCreation', { timeout: 10000, force: true }).then(($inputFile) => {
      cy.fixture('termo.pdf').then((fileContent) => {
        // Cria um objeto de arquivo
        const file = new File([fileContent], 'termo.pdf', { type: 'application/pdf' });
        // Cria um evento de alteração de arquivo
        const event = { dataTransfer: { files: [file] } };
        // Aciona o evento de alteração de arquivo no elemento
        cy.wrap($inputFile).click({force: true});
      });
    });
    
  
    // Verificar se o botão está visível antes de clicar
    cy.get('#buttonSubmitActionModal').should('be.visible').click( {force: true});
  });
    ==+====+====+====+====+====+====+====+====+====+====+====+====+====+====+==
 */
//==+====+====+====+====+====+====+====+====+====+====+====+====+====+====+== 
/*
// CREATING ASSESSORS

Cypress.Commands.add('createAdvisor', () => {

  // Criar novo Assessor
  cy.get('#advisorsMenuItem', { timeout: 10000 }).should('be.visible').click()
  cy.get('#buttonAddResponsibles').click()
  cy.get('#nameFieldResponsibleCreation').type('Novo Assessor auto')
  cy.get('#cpfFieldResponsibleCreation').type('37233485569')
  cy.get('#birthdateFieldResponsibleCreation').type('01012000')
  cy.get('#emailFieldResponsibleCreation').type('advisor@example.com')
  cy.get('#phoneNumberFieldResponsibleCreation').type('11987654322')
  cy.get('#passwordFieldResponsibleCreation').type('senha123')
  cy.get('#confirmPasswordFieldResponsibleCreation').type('senha123')
  cy.get('#cdcFeePercentageFieldResponsibleCreation').type('5000')
  cy.get('#saasFeePercentageFieldResponsibleCreation').type('5000')
  cy.get('#membershipFeePercentageFieldResponsibleCreation').type('5000')
  cy.get('#operatingFeePercentageFieldResponsibleCreation').type('5000')
  cy.get('#buttonSubmitActionModal').click()
});
*/
//==+====+====+====+====+====+====+====+====+====+====+====+====+====+====+==
/*
// CREATE CONSULTANT

Cypress.Commands.add('createConsultant', () => {

  cy.get('#advisorsMenuItem', { timeout: 10000 }).should('be.visible').click()
  cy.get('#tabConsultantsResponsibles').click()
  cy.get('#buttonAddResponsibles').click()
  cy.get('#nameFieldResponsibleCreation').type('New consultant auto')
  cy.get('#cpfFieldResponsibleCreation').type('08522137196')
  cy.get('#birthdateFieldResponsibleCreation').type('01012000')
  cy.get('#emailFieldResponsibleCreation').type('consultant@example.com')
  cy.get('#phoneNumberFieldResponsibleCreation').type('11987654323')
  cy.get('#passwordFieldResponsibleCreation').type('senha123')
  cy.get('#confirmPasswordFieldResponsibleCreation').type('senha123')
  cy.get('#membershipFeePercentageFieldResponsibleCreation').type('5000')
  cy.get('#buttonSubmitActionModal').click()
});
*/
//==+====+====+====+====+====+====+====+====+====+====+====+====+====+====+==
/*
// CREATE ANALYST

Cypress.Commands.add('createAnalyst', () => {

    cy.get('#advisorsMenuItem', { timeout: 10000 }).should('be.visible').click();
    cy.get('#tabAnalystsResponsibles').click()
    cy.get('#buttonAddResponsibles').click()
    cy.get('#nameFieldResponsibleCreation').type('New Analyst auto')
    cy.get('#cpfFieldResponsibleCreation').type('38673420326')
    cy.get('#birthdateFieldResponsibleCreation').type('01012000')
    cy.get('#emailFieldResponsibleCreation').type('analyst@example.com')
    cy.get('#phoneNumberFieldResponsibleCreation').type('11987654324')
    cy.get('#passwordFieldResponsibleCreation').type('senha123')
    cy.get('#confirmPasswordFieldResponsibleCreation').type('senha123')
    cy.get('#buttonSubmitActionModal').click()

});
*/


//==+====+====+====+====+====+====+====+====+====+====+====+====+====+====+==
/*
// CREATE PARTNER
Cypress.Commands.add('createPartner', () => {
  cy.get('#advisorsMenuItem', { timeout: 10000 }).should('be.visible').click();
  cy.get('#tabPartnerResponsibles').click()
  cy.get('#buttonAddResponsibles', { timeout: 10000 }).should('be.visible').click();

  // Preencher os campos conforme necessário
  cy.get('#nameFieldResponsibleCreation').type('Nome do Parceiro');
  cy.get('#cpfFieldResponsibleCreation').type('27964012436');
  cy.get('#birthdateFieldResponsibleCreation').type('01011980');
  cy.get('#emailFieldResponsibleCreation').type('parceiro@example.com');
  cy.get('#phoneNumberFieldResponsibleCreation').type('11987654321');
  cy.get('#passwordFieldResponsibleCreation').type('senha123');
  cy.get('#confirmPasswordFieldResponsibleCreation').type('senha123');
  cy.get('#cdcFeePercentageFieldResponsibleCreation').type('5000');
  cy.get('#saasFeePercentageFieldResponsibleCreation').type('5000');
  cy.get('#membershipFeePercentageFieldResponsibleCreation').type('5000');

  // Clicar para finalizar o cadastro
  cy.get('#buttonSubmitActionModal').click();
});
*/