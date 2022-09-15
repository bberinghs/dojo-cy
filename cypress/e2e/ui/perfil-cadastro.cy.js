/// <reference types="cypress" />
var faker = require('faker-br');

describe('Funcionalidade: Criar Perfil do Conexão QA', () => {
    
    beforeEach(() => {
        cy.visit('cadastrar')
    });

   it('Criar Perfil com sucesso', () => {
      
    ///Cadastro novo  
    
        let nome = faker.name.findName()
        let email = faker.internet.email(nome)

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input')
          .type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input')
          .type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input')
          .type('1234567')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input')
          .type('1234567')
        cy.get('[data-test="register-submit"]')
          .click()

        cy.get('[data-test="dashboard-noProfile"]')
          .should('be.visible')
        cy.get('[data-test="dashboard-welcome"]')
          .should('contain', nome)

    ///Criando Perfil

        cy.get('[data-test="dashboard-createProfile"]')
          .click()
        cy.get('#mui-component-select-status')
          .click()
        cy.contains('QA Pleno')
          .click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input')
          .click()
          .type('Ambev Tech LTDA')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input')
          .click()
          .type('https://ambevtech.com.br/')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input')
          .click()
          .type('Blumenau/SC')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input')
          .click()
          .type('Análise e montagem de cenários de testes, preparação de ambientes, etc.')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input')
          .click()
          .type('https://github.com/bberinghs')          
        cy.get('[data-test="profile-bio"] > .MuiInputBase-root')
          .click()
          .type('Ampla experiência adquirida atuando em empresas com grande reconhecimento de mercado, passando por diversos setores das empresas e agregando vasto conhecimento principalmente como Analista de Suporte a Banco de dados e atendimento a clientes de alta disponibilidade e escabilidade.')
     
    ///Adicionando as redes sociais     
          
        cy.get('[data-test="profile-socials"]')
          .click()
        cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input')
          .type('https://www.facebook.com/bberinghs')

    ///Cadastro finalizado     
        
          cy.get('[data-test="profile-submit"]')
            .click()
          cy.get('.container > :nth-child(4)')
            .should('be.visible')
          cy.get('[data-test="dashboard-welcome"]')
            .should('contain', nome)
   });

   it('Criar Perfil faltando campo obrigatório', () => {
      
    ///Cadastro novo  
    
        let nome = faker.name.findName()
        let email = faker.internet.email(nome)

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input')
          .type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input')
          .type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input')
          .type('1234567')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input')
          .type('1234567')
        cy.get('[data-test="register-submit"]')
          .click()

        cy.get('[data-test="dashboard-noProfile"]')
          .should('be.visible')
        cy.get('[data-test="dashboard-welcome"]')
          .should('contain', nome)

    ///Criando Perfil

        cy.get('[data-test="dashboard-createProfile"]')
          .click()
        cy.get('#mui-component-select-status')
          .click()
        cy.contains('QA Pleno')
          .click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input')
          .click()
          .type('Ambev Tech LTDA')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input')
          .click()
          .type('https://ambevtech.com.br/')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input')
          .click()
          .type('Blumenau/SC')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input')
          .click()
          .type('')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input')
          .click()
          .type('https://github.com/bberinghs')          
        cy.get('[data-test="profile-bio"] > .MuiInputBase-root')
          .click()
          .type('Ampla experiência adquirida atuando em empresas com grande reconhecimento de mercado, passando por diversos setores das empresas e agregando vasto conhecimento principalmente como Analista de Suporte a Banco de dados e atendimento a clientes de alta disponibilidade e escabilidade.')
     
    ///Adicionando as redes sociais     
          
        cy.get('[data-test="profile-socials"]')
          .click()
        cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input')
          .type('https://www.facebook.com/bberinghs')

    ///Cadastro finalizado     
        
          cy.get('[data-test="profile-submit"]')
            .click()
          cy.get('.container > :nth-child(4)')
            .should('be.visible')
          cy.get('[data-test="dashboard-welcome"]')
            .should('contain', nome)
   });

});