/// <reference types = "cypress"/>

describe('fixing', () => {
   
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
    it('fiininininio', () => {
        cy.visit('https://rojakunala.github.io/yourplayground/')
    })

});