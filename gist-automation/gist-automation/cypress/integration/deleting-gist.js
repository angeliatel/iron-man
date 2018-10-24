describe('deleting public gist automation script', function(){
    // assumption: deleting the uppermost gist
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
        it('click on profile avatar on the top right', function(){
            cy.get('.dropdown').click()
            cy.get(':nth-child(3) > .dropdown-item').click()
        })
        it('click on gist name', function(){
            cy.get(':nth-child(1) > .gist-snippet-meta > .gist-count-links > :nth-child(1) > a').click()
        })
        it('click on Delete button', function(){
            cy.get(':nth-child(2) > form > .btn').click()
        })
    })
    
})