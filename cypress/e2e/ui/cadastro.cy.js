/// <reference types="cypress" />
var faker = require('faker-br');

describe('Funcionalidade: Cadastro do Conexão QA', () => {
    
    beforeEach(() => {
        cy.visit('cadastrar')
    });

    it('Deve fazer cadastro com sucesso', () => {
        let nome = faker.name.findName()
        let email = faker.internet.email(nome)


        cy.get('[data-test="register-name"]')
          .type(nome)
        cy.get('[data-test="register-email"]')
          .type(email)
        cy.get('[data-test="register-password"]')
          .type('1234567')
        cy.get('[data-test="register-password2"]')
          .type('1234567')
        cy.get('[data-test="register-submit"]')
          .click()

        cy.get('[data-test="dashboard-noProfile"]')
          .should('be.visible')
        cy.get('[data-test="dashboard-welcome"]')
          .should('contain', nome)
    });

});