Cypress.Commands.add('login', (email, password) => { 
    describe('login', function(){
        cy.get('[data-ga-click="Header, sign in"]').click()
        cy.get('#login_field').type(email, {force: true})
        cy.get('#password').type(password, {force: true})
        cy.get('.btn').click()     
    })
})
