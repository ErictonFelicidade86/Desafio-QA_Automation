class AlertFrameWindowsPage {
    go() {
        cy.visit("https://demoqa.com/");
    }

    clickAlertsFrameWindows() {
        cy.contains('.card-body', 'Alerts, Frame & Windows').should('be.visible').click();
    }

    clickBrowserWindows() {
        cy.contains('span', 'Alerts, Frame & Windows').should('be.visible');
        cy.contains('span', 'Browser Windows').click();

        // Interceptor
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        cy.get('#windowButton').should('be.visible').click();

        // Nova janela
        cy.get('@windowOpen').should('be.calledWithMatch', /\/sample$/);

        // Acessa a URL
        cy.get('@windowOpen').then((stub) => {
            const url = stub.args[0][0]
            cy.visit(url)
        });

        cy.contains('h1', 'This is a sample page').should('be.visible');
    }
}

export default new AlertFrameWindowsPage();
