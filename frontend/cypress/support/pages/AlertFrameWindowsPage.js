class AlertFrameWindowsPage {
    go() {
        cy.visit("https://demoqa.com/")
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
