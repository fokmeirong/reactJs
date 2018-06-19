/// <reference types="Cypress" />

context('test app', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:8080')
      })

    it('have title/logo "netflixroulette" ', () => {
        cy.contains("netflixroulette");
    });

    it('have input filed', () => {
        cy.get('input').should('have.length', 1);
    });

    it('have no .abc', () => {
        cy.get('.abc').should('have.length', 0);
    });
  })


