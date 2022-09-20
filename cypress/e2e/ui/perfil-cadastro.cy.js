/// <reference types="cypress" />

describe('Funcionalidade: Criar Perfil do Conexão QA', () => {

  beforeEach(() => {
    cy.login('bruno.teste@teste.com', '123456')
    //cy.loginApp('bruno.teste@teste.com', '123456')   
    cy.visit('criar-perfil')
  });

  it('Criar Perfil com sucesso', () => {
    cy.get('#mui-component-select-status').click()
    cy.contains('QA Pleno').click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Ambev Tech LTDA')
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://ambevtech.com.br/')
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Blumenau/SC')
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Análise e montagem de cenários de testes, preparação de ambientes, etc.')
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('https://github.com/bberinghs')
    cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type('Ampla experiência adquirida atuando em empresas com grande reconhecimento de mercado.')
    //cy.get('[data-test="profile-socials"]').click()
    cy.get('[data-test="profile-submit"]').click()
    cy.get('[data-test="dashboard-editProfile"]').should('exist')
  });

    it('Criar perfil com sucesso - Commands', () => {
      cy.criarPerfil('QA Pleno', 'AmbevTech', 'https://ambevtech.com.br/', 'Blumenau/SC', 'Análise e montagem de cenários de testes, preparação de ambientes, etc.', 'https://github.com/bberinghs', 'Ampla experiência adquirida atuando em empresas com grande reconhecimento de mercado.')
      cy.get('[data-test="dashboard-editProfile"]').should('exist')
    });

    it('Validar mensagem de erro ao cadastrar informação incorreta', () => {
      cy.criarPerfil('QA Pleno', 'AmbevTech', 'www', 'Blumenau/SC', 'Análise e montagem de cenários de testes, preparação de ambientes, etc.', 'https://github.com/bberinghs', 'Ampla experiência adquirida atuando em empresas com grande reconhecimento de mercado.')
      cy.contains('Digite uma url válida').should('be.visible')
    });

  });