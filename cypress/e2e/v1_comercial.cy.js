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
    // *** REDES ***

    // Criando uma nova rede
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

    // EDITAR DADOS DA REDE
    

     // ==*====*====*====*====*====*====*====*====*====*====*====*====*==
    // *** CLÍNICAS ***   

    // Editar Clínica
    cy.get('#index0NetworkCardClinics').click()

    // Criar nova Clínica pela Rede
    cy.get('#buttonAddPartnerClinicDetails').click()

    // Preencher formulário
    /* Step 1 */
    cy.get('#companyNameFieldClinicCreation').type('Razão Social')
    cy.get('#tradingNameFieldClinicCreation').type('Nome Fantasia')
    cy.get('#cpfCnpjFieldClinicCreation').type('34.144.542/0001-50')
    cy.get('#buttonSubmitActionModal').click()

    /* Step 2 */
    cy.get('#emailFieldClinicCreation').type('principal@email.com')
    cy.get('#financeEmailFieldClinicCreation').type('finance@email.com')
    cy.get('#phoneNumberFieldClinicCreation').type('1136363636')
    cy.get('#cellPhoneNumberFieldClinicCreation').type('11993633636')
    cy.get('#buttonSubmitActionModal').click()

    /* Step 3 */
    cy.get('#operatingFeeAutocompleteClinicCreation').select('first') // esse campo vai precisar ser removido
    cy.get('#clinicTypeIdAutocompleteClinicCreation').select('first')
    cy.get('#button-close-dialog').click()

    /* Step 4 */


    /* Step 5 */


    /* Step 6 */


    // ==*====*====*====*====*====*====*====*====*====*====*====*====*==
    // *** RESPONSÁVEIS *** 

    cy.get('#advisorsMenuItem').click()
    // Criar novo Assessor

    cy.get('#tabAdvisorsResponsibles').click()
    cy.get('#buttonAddResponsibles').click('')
    cy.get('#nameFieldResponsibleCreation').type('')
    cy.get('#cpfFieldResponsibleCreation').type('')
    cy.get('#birthdateFieldResponsibleCreation').type('')
    cy.get('#emailFieldResponsibleCreation').type('')
    cy.get('#phoneNumberFieldResponsibleCreation').type('')
    cy.get('#passwordFieldResponsibleCreation').type('')
    cy.get('#confirmPasswordFieldResponsibleCreation').type('')
    cy.get('#cdcFeePercentageFieldResponsibleCreation').type('')
    cy.get('#saasFeePercentageFieldResponsibleCreation').type('')
    cy.get('#membershipFeePercentageFieldResponsibleCreation').type('')
    cy.get('#operatingFeePercentageFieldResponsibleCreation').type('')
    cy.get('#membershipFeePercentageFieldResponsibleCreation').click()


    // Criar novo Consultor

    cy.get('#tabConsultantsResponsibles').click()
    cy.get('#buttonAddResponsibles').click('')
    cy.get('#nameFieldResponsibleCreation').type('')
    cy.get('#cpfFieldResponsibleCreation').type('')
    cy.get('#birthdateFieldResponsibleCreation').type('')
    cy.get('#emailFieldResponsibleCreation').type('')
    cy.get('#phoneNumberFieldResponsibleCreation').type('')
    cy.get('#passwordFieldResponsibleCreation').type('')
    cy.get('#confirmPasswordFieldResponsibleCreation').type('')
    cy.get('#membershipFeePercentageFieldResponsibleCreation').type('')
    cy.get('#membershipFeePercentageFieldResponsibleCreation').click()


    // Criar novo Analista

    cy.get('#tabAnalystsResponsibles').click()
    cy.get('#buttonAddResponsibles').click('')
    cy.get('#nameFieldResponsibleCreation').type('')
    cy.get('#cpfFieldResponsibleCreation').type('')
    cy.get('#birthdateFieldResponsibleCreation').type('')
    cy.get('#emailFieldResponsibleCreation').type('')
    cy.get('#phoneNumberFieldResponsibleCreation').type('')
    cy.get('#passwordFieldResponsibleCreation').type('')
    cy.get('#confirmPasswordFieldResponsibleCreation').type('')
    cy.get('#membershipFeePercentageFieldResponsibleCreation').click()

    // Criar novo Parceiro Indicação

    cy.get('#tabPartnerResponsibles').click()
    cy.get('#buttonAddResponsibles').click('')
    cy.get('#nameFieldResponsibleCreation').type('')
    cy.get('#cpfFieldResponsibleCreation').type('')
    cy.get('#birthdateFieldResponsibleCreation').type('')
    cy.get('#emailFieldResponsibleCreation').type('')
    cy.get('#phoneNumberFieldResponsibleCreation').type('')
    cy.get('#passwordFieldResponsibleCreation').type('')
    cy.get('#confirmPasswordFieldResponsibleCreation').type('')
    cy.get('#cdcFeePercentageFieldResponsibleCreation').type('')
    cy.get('#saasFeePercentageFieldResponsibleCreation').type('')
    cy.get('#membershipFeePercentageFieldResponsibleCreation').type('')
    cy.get('#membershipFeePercentageFieldResponsibleCreation').click()


    // ==*====*====*====*====*====*====*====*====*====*====*====*====*==
    // *** TERMOS *** 

    cy.get('#termsMenuItem').click()
    
    // Gerar 
    cy.get('#buttonAddTermTerms').click()
    cy.get('#termTypeAutocompleteTermCreation').select(first)
    cy.get('#inputFileTermCreation').attachFile('')
    // adicionar o arquivo na pasta FIXTURES e chamar o nome dele em attachFile
    cy.get('#buttonSubmitActionModal').click()


    // ==*====*====*====*====*====*====*====*====*====*====*====*====*==
    // *** BUSCA GLOBAL ***

    cy.get('#networksMenuItem').click()
    //cy.get('#searchFieldGlobalSearch').select(first)
    cy.get('#searchFieldGlobalSearch').type('treinamento')
    

  })
});


/* 
Autora: rebeca treta
Data: 01/04/24
*/