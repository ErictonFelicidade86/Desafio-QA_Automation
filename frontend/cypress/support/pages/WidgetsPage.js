class WidgetsForms {
    go() {
        cy.visit("https://demoqa.com/progress-bar")
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
        cy.wait(100)
        cy.get('#progressBar').invoke('text').then((progressText) => {
            let progressValue = parseInt(progressText.replace('%', ''), 10)

            if (progressValue <= 25) {
                cy.get('#startStopButton').click() // Para a barra se estiver ≤ 25%
                cy.log(`Barra parada em ${progressValue}%`)

                cy.wait(3000)
            } else {
                cy.wait(100)
                this.stopBeforeOrAt25()
            }
        })
    }

    validateProgress() {
        cy.get('#progressBar').invoke('text').then((progressText) => {
            const progressValue = parseInt(progressText.replace('%', ''), 10)
            cy.log(`Validando progresso: ${progressValue}%`)

            cy.wait(3000)
            
            expect(progressValue).to.be.lte(25) // Verifica se o progresso é menor ou igual a 25%
        })
    }

    restartAndWaitFor100() {
        cy.get('#startStopButton').click() // Reinicia a barra

        const checkProgress = () => {
            cy.get('#progressBar').invoke('text').then((progressText) => {
                let progressValue = parseInt(progressText.replace('%', ''), 10)

                if (progressValue < 100) {
                    cy.wait(100)
                    checkProgress() // Continua verificando até 100%
                } else {
                    cy.log(`✔ Barra atingiu ${progressValue}%, aguardando para resetar...`)

                    cy.wait(3000)

                    cy.get('#resetButton').should('be.visible').click()
                    cy.get('#progressBar').should('have.text', '0%')
                    cy.log('Barra resetada com sucesso!')
                }
            })
        }

        checkProgress()
    }
}

export default new WidgetsForms()
