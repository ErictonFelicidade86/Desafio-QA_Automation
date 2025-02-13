class AlertFrameWindowsPage {
    go() {
        cy.demoQA()
    }

    clickAlertsFrameWindows() {
        cy.contains('.card-body', 'Alerts, Frame & Windows').should('be.visible').click() // redirecionado para alertsWindows
    }

    clickBrowserWindows() {
        cy.browserWindowsMenu()
        cy.validacaoTexto()
    }
}

export default new AlertFrameWindowsPage()
