describe('editing public gist automation script', function(){
    // assumption: editing the uppermost gist
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
        it('click on Edit button', function(){
            cy.get('.pagehead-actions > :nth-child(1) > .btn').click()
        })
        it('fill in gist description', function(){
            cy.get('.input-block').type('hello you')
        })
        it('click on Update public gist button', function(){
            cy.get('.btn-primary').click()
        })

    })
    
})