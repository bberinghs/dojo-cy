/// <reference types="cypress" />
import usuario from "../../fixtures/usuario.json"

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('[data-test="login-email"]')
          .type('bruno.teste@teste.com')
        cy.get('[data-test="login-password"]')
          .type('123456')
        cy.get('[data-test="login-submit"]')
          .click()
        cy.get('[data-test="dashboard-welcome"]')
          .should('contain','Bem-vindo Bruno Teste')
    });

    it('Deve validar mensagem de erro ao fazer login com dados inválidos', () => {
        cy.get('[data-test="login-email"]')
          .type('bruno.teste1234@teste.com')
        cy.get('[data-test="login-password"]')
          .type('123456')
        cy.get('[data-test="login-submit"]')
          .click()
        cy.get('[data-test="alert"]')
          .should('contain','Credenciais inválidas')
    });

    it('Deve fazer login com sucesso usando Command', () => {
        cy.login('bruno.teste@teste.com','123456')
        cy.get('[data-test="dashboard-welcome"]')
          .should('contain','Bem-vindo Bruno Teste')
    });

    it('Deve fazer login com sucesso usando importação Massa de Dados', () => {
        cy.login(usuario.usuario, usuario.senha)
        cy.get('[data-test="dashboard-welcome"]')
          .should('contain', usuario.nome)
    });

    it.only('Deve fazer login com sucesso usando Fixture', () => {
        cy.fixture("multi-usuarios")
          .then((multiusuario) =>{
        cy.login(multiusuario[0].usuario, multiusuario[0].senha)
        cy.get('[data-test="dashboard-welcome"]')
          .should('contain', multiusuario[0].nome)   
          })
    });

});