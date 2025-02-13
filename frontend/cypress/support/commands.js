import data from '../fixtures/user.json'
import user from '../fixtures/praticeForm.json'
import 'cypress-xpath'

// COMPONENTS
Cypress.Commands.add('btnSubmit', () => {
    cy.get('#submit').click()
})

Cypress.Commands.add('addUser', () => {
    cy.get('#addNewRecordButton').should('be.visible').click()
})

Cypress.Commands.add('demoQA', () => {
    cy.visit("https://demoqa.com/")
})

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
Cypress.Commands.add('createUser', () => {
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


// PAGE FORMS PAGE
Cypress.Commands.add('dataUserPractice', () => {
    cy.get("input[placeholder='First Name']").type(user.first_name) 
    cy.get("input[placeholder='Last Name']").type(user.last_name)
    cy.get("#userEmail").type(user.email).click()
})

Cypress.Commands.add('dataUserPracticeOther', () => {
    cy.get('input[value="Male"]').click({ force: true} )
    cy.xpath("//input[@pattern='\\d*']").type(user.number_mobile, { force: true })
    cy.get('#dateOfBirthInput').should('be.visible').click()
    cy.get("select.react-datepicker__month-select").select(user.month)
    cy.get("select.react-datepicker__year-select").select(user.year)
    cy.get(".react-datepicker__day--023").click()
    cy.get("div.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3")
        .click()
        .type("Computer Science{enter}")
    cy.get("input[value='1']").check( {force: true})
    cy.get('input[type="file"]')
        .attachFile('assets/files/bem_vindo_teste.txt')
})

Cypress.Commands.add('dataUserPracticeForms', () => {
    cy.get("textarea[placeholder='Current Address']")
        .type('Rua 4, casa 33 Gilberto Mestrinho')
    cy.xpath("//div[@class=' css-1wa3eu0-placeholder'][contains(.,'Select State')]")
        .should('be.visible')
        .click()
    
    cy.xpath("//div[contains(text(), 'NCR')]").click()

    cy.xpath("//div[@class=' css-1wa3eu0-placeholder'][contains(.,'Select City')]")
        .should('be.visible')
        .click()
    cy.xpath("//div[contains(text(), 'Delhi')]").click()
})

Cypress.Commands.add('closeModal', () => {
    cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
        cy.wait(2000)
        cy.get('#closeLargeModal').click()
})

// PAGE INTERACTIONS PAGE
Cypress.Commands.add('moveItems', (itemsToMove, target) => {
    itemsToMove.forEach((item) => {
        cy.contains('.list-group-item', item)
            .should('be.visible')
            .trigger('mousedown', { which: 1, force: true })

        cy.contains('.list-group-item', target) // Alvo do movimento
            .should('be.visible')
            .trigger('mousemove', { which: 1, force: true })
            .trigger('mouseup', { force: true })

        cy.wait(500)
    })

    cy.log('Os elementos deverão ficar na ordem decrescente')
})

// PAGE WIDGETS PAGE
Cypress.Commands.add('stopBeforeOrAt25', () => {
    cy.wait(100)
    cy.get('#progressBar').invoke('text').then((progressText) => {
        let progressValue = parseInt(progressText.replace('%', ''), 10)

        if (progressValue <= 25) {
            cy.get('#startStopButton').click() // Para a barra se estiver ≤ 25%
            cy.log(`Barra parada em ${progressValue}%`)

            cy.wait(3000)
        } else {
            cy.wait(100)
            cy.stopBeforeOrAt25() // Recursão para continuar verificando
        }
    })
})

Cypress.Commands.add('validateProgress', () => {
    cy.get('#progressBar').invoke('text').then((progressText) => {
        const progressValue = parseInt(progressText.replace('%', ''), 10)
        cy.log(`Validando progresso: ${progressValue}%`)
        cy.wait(3000)
        expect(progressValue).to.be.lte(25) // Verifica se o progresso é menor ou igual a 25%
    })
})

Cypress.Commands.add('monitorarProgresso', () => {
    cy.get('#startStopButton').click() // Inicia a barra

    const checkProgress = () => {
        cy.get('#progressBar').invoke('text').then((progressText) => {
            let progressValue = parseInt(progressText.replace('%', ''), 10)

            if (progressValue < 100) {
                cy.wait(100)
                checkProgress() // Continua verificando até atingir 100%
            } else {
                cy.log(`Barra atingiu ${progressValue}%, aguardando para resetar...`)

                cy.wait(3000)

                cy.get('#resetButton').should('be.visible').click()
                cy.get('#progressBar').should('have.text', '0%')
                cy.log('Barra resetada com sucesso!')
            }
        })
    };

    checkProgress()
})
