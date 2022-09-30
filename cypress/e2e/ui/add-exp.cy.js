/// <reference types="cypress" />

describe('Funcionalidade: Adicionar Experiência', () => {

    beforeEach(() => {
      cy.loginApp()   
      //cy.visit('criar-perfil')
      cy.visit('adicionar-experiencia')
    });

    it('Adicionar Experiência com sucesso', () => {
        cy.get('[data-test="experience-title"]').type('QA III')
        cy.get('[data-test="experience-company"]').type('Ambev Tech LTDA')
        cy.get('[data-test="experience-location"]').type('Blumenau/SC')
        cy.get('#from').type('01/12/1989')
        cy.get('#to')
        cy.get('[rows="1"]')
    });
});