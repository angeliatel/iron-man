describe('deleting public gist automation script', function(){
    before(function(){
        cy.visit('https://gist.github.com/discover')
        // login function
        // assumption: 2 factor authentication code is inserted manually if it's existed
        cy.login('email', 'password')
    })
    beforeEach(function(){
        Cypress.Cookies.preserveOnce('__Host-gist_user_session_same_site', cy.getCookie('__Host-gist_user_session_same_site'))
        cy.visit('https://gist.github.com/discover')
    })
    context('normal flow', function(){
        it('click on profile avatar on the top right -> click on Your gist menu', function(){
            cy.get('.dropdown').click()
            cy.get(':nth-child(3) > .dropdown-item').click()
        })
    })
    
})