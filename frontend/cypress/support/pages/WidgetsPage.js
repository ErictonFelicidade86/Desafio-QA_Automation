class WidgetsForms {
    go() {
        cy.visit("https://demoqa.com/")
    }

    clickWidgets() {
        cy.contains('.card-body', 'Widgets').should('be.visible').click()
    }

    clickProgressBar() {
        cy.contains('span', 'Progress Bar').should('be.visible').click()
    }

    clickStart() {
        cy.get('#startStopButton').should('be.visible').click()
    }

    stopBeforeOrAt25() {
        cy.stopBeforeOrAt25()
    }

    validateProgress() {
        cy.validateProgress()
    }

    restartAndWaitFor100() {
        cy.monitorarProgresso()
    }
}

export default new WidgetsForms()
