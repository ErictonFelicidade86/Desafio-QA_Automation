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

// PAGE ALERT FRAME WINDOWS