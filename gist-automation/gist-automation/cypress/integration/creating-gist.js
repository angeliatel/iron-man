describe('creating public gist automation script', function(){
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
        it('click on New Gist', function(){
            cy.get('#user-links > :nth-child(1) > .HeaderNavlink').click()
            cy.url().should('https://gist.github.com/')
        })
        it('fill in gist description', function(){
            cy.get('.input-block').type('hello world')
        })
        it('fill in the filename', function(){
            cy.get('.input-group > .form-control').type('hello-world.py')
        })
        it('fill in the code mirror', function(){
            cy.get('.CodeMirror cm-s-github-light').click()
            cy.get('.CodeMirror cm-s-github-light').type('print("Hello World")')
        })
        it('click on Create public gist button', function(){
            cy.get('[value="1"]').click()
        })
    })
    context('leaving gist description empty', function(){
        it('click on New Gist', function(){
            cy.get('#user-links > :nth-child(1) > .HeaderNavlink').click()
            cy.url().should('https://gist.github.com/')
        })
        it('fill in the filename', function(){
            cy.get('.input-group > .form-control').type('hello-world.py')
        })
        it('fill in the code mirror', function(){
            cy.get('.CodeMirror cm-s-github-light').click()
            cy.get('.CodeMirror cm-s-github-light').type('print("Hello World")')
        })
        it('click on Create public gist button', function(){
            cy.get('[value="1"]').should('be', 'disabled')
        })
    })
    context('leaving gist filename empty', function(){
        it('click on New Gist', function(){
            cy.get('#user-links > :nth-child(1) > .HeaderNavlink').click()
            cy.url().should('https://gist.github.com/')
        })
        it('fill in gist description', function(){
            cy.get('.input-block').type('hello world')
        })
        it('fill in the code mirror', function(){
            cy.get('.CodeMirror cm-s-github-light').click()
            cy.get('.CodeMirror cm-s-github-light').type('print("Hello World")')
        })
        it('click on Create public gist button', function(){
            cy.get('[value="1"]').should('be', 'disabled')
        })
    })
    context('leaving the code mirror empty', function(){
        it('click on New Gist', function(){
            cy.get('#user-links > :nth-child(1) > .HeaderNavlink').click()
            cy.url().should('https://gist.github.com/')
        })
        it('fill in gist description', function(){
            cy.get('.input-block').type('hello world')
        })
        it('fill in the filename', function(){
            cy.get('.input-group > .form-control').type('hello-world.py')
        })
        it('click on Create public gist button', function(){
            cy.get('[value="1"]').should('be', 'disabled')
        })
    })
    context('leaving gist desc & filename empty', function(){
        it('click on New Gist', function(){
            cy.get('#user-links > :nth-child(1) > .HeaderNavlink').click()
            cy.url().should('https://gist.github.com/')
        })
        it('fill in the code mirror', function(){
            cy.get('.CodeMirror cm-s-github-light').click()
            cy.get('.CodeMirror cm-s-github-light').type('print("Hello World")')
        })
        it('click on Create public gist button', function(){
            cy.get('[value="1"]').should('be', 'disabled')
        })
    })
    context('leaving desc & code mirror empty', function(){
        it('click on New Gist', function(){
            cy.get('#user-links > :nth-child(1) > .HeaderNavlink').click()
            cy.url().should('https://gist.github.com/')
        })
        it('fill in the filename', function(){
            cy.get('.input-group > .form-control').type('hello-world.py')
        })
        it('click on Create public gist button', function(){
            cy.get('[value="1"]').should('be', 'disabled')
        })
    })
    context('leaving filename & code mirror empty', function(){
        it('click on New Gist', function(){
            cy.get('#user-links > :nth-child(1) > .HeaderNavlink').click()
            cy.url().should('https://gist.github.com/')
        })
        it('fill in gist description', function(){
            cy.get('.input-block').type('hello world')
        })
        it('click on Create public gist button', function(){
            cy.get('[value="1"]').should('be', 'disabled')
        })
    })
    context('all input field are empty', function(){
        it('click on Create public gist button', function(){
            cy.get('[value="1"]').should('be', 'disabled')
        })
    })
    
})