/// <reference types="cypress" />

describe('Funcionalidade: Fazer um post via API', () => {

    let token

    beforeEach(() => {
        cy.token().then((tkn) => {
            token = tkn
        })
    });

    it('Deve criar um post via API', () => {
        cy.request({
            method: 'POST',
            url: 'api/posts',
            headers: {
                Cookie: token
            },
            body:
            {
                "text": "Qualidade de Softwares"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.text).contains("Qualidade")
        })
    });
});