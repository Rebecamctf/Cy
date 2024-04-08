/// <reference types="cypress" />

describe('Adding Terms', () => {
    it('should upload a document', () => {
      cy.login();
      cy.uploadDocument();
    });
  });
  