import data from '../fixtures/user.json'


// PAGE ALERT FRAME WINDOWS
Cypress.Commands.add('browserWindowsMenu', () => {
    cy.contains('span', 'Alerts, Frame & Windows').should('be.visible') // Browser Windows
    cy.contains('span', 'Browser Windows').click()
})

Cypress.Commands.add('validacaoTexto', () => {
    // Interceptor
    cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
    })

    cy.get('#windowButton').should('be.visible').click()

    // Nova janela
    cy.get('@windowOpen').should('be.calledWithMatch', /\/sample$/)

    // Acessa a URL
    cy.get('@windowOpen').then((stub) => {
        const url = stub.args[0][0]
        cy.visit(url)
    })

    cy.contains('h1', 'This is a sample page').should('be.visible')
})

// PAGE ELEMENTS PAGE

Cypress.Commands.add('btnSubmit', () => {
    cy.get('#submit').click()
})

Cypress.Commands.add('createUser', () => {
    cy.get('#addNewRecordButton').should('be.visible').click()
    cy.get('#firstName').type(data.user.first_name)
    cy.get('#lastName').type(data.user.last_name)
    cy.get('input[placeholder="name@example.com"]').type(data.user.email)
    
    cy.get('#age').type(data.user.age)
    cy.get("#salary").type(data.user.salary)
    cy.get('#department').type(data.user.department)
})

Cypress.Commands.add('editUser', () => {
    cy.contains('.rt-td', data.user.email)
        .parent()
        .within(() => {
            cy.get('[id^="edit-record-4"]').click({force: true})
        })
    cy.get('#firstName').clear().type(data.dataUser.user7.first_name)
    cy.get('#lastName').clear().type(data.dataUser.user7.last_name)
    cy.get('input[placeholder="name@example.com"]').clear().type(data.dataUser.user7.email)
    
    cy.get('#age').clear().type(data.dataUser.user7.age)
    cy.get('#salary').clear().type(data.dataUser.user7.salary)
    cy.get('#department').clear().type(data.dataUser.user7.department)
})






// PAGE ELEMENTS PAGE
// PAGE ELEMENTS PAGE
// PAGE ELEMENTS PAGE
// PAGE ELEMENTS PAGE
// PAGE ELEMENTS PAGE