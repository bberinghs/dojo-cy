/// <reference types="cypress" />
import addExpPage from "../../support/pages/add-exp.page";
import AddexpPage from "../../support/pages/add-exp.page";

// const AddexpPage = require ('../../support/pages/add-exp.page')

describe('Funcionalidade: Adicionar Experiência', () => {

    beforeEach(() => {
      cy.loginApp()
      addExpPage.visitar()       
    });

    it('Deve adicionar uma experiência com sucesso', () => {
        AddexpPage.addExperiencia('QA Pleno' , 'Ambev Tech' , 'Blumenau' , '01/01/2022' , '01/01/2040', 'Empresa de TI' )
        cy.get('[data-test="experience-delete"]').should('exist')
    });

    it('Deve adicionar uma experiência Atual com sucesso', () => {
      AddexpPage.addExperienciaAtual('QA Pleno III' , 'Ambev Tech' , 'Blumenau' , '01/01/2023' , 'Empresa de TI' )
      cy.get('[data-test="experience-delete"]').should('exist')
  });

});