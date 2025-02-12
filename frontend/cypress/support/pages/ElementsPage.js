import userData from '../../fixtures/user.json'

class ElementsPages {
    go() {
        cy.visit("https://demoqa.com/")
    }

    clickElements() {
        cy.contains('.card-body', 'Elements').should('be.visible').click()
    }

    clickWebTables() {
        cy.contains('span', 'Web Tables').should('be.visible').click()
    }

    // Criar um único usuário
    registrationForm(user) {
        cy.get('#addNewRecordButton').should('be.visible').click()
        cy.get('#firstName').type(user.first_name)
        cy.get('#lastName').type(user.last_name)
        cy.get('input[placeholder="name@example.com"]').type(user.email)
        cy.get('#age').type(user.age)
        cy.get("#salary").type(user.salary)
        cy.get('#department').type(user.department)
        cy.get('#submit').click()
    }

    // Editar usuário
    editUser(user) {
        cy.contains('.rt-td', user.email)
            .parent()
            .within(() => {
                cy.get('[id^="edit-record-"]').click()
            })

        cy.get('#age').clear().type('50')
        cy.get('#salary').clear().type('60000')
        cy.get('#submit').click()

        // Validar edição
        cy.contains('.rt-td', user.email).parent().contains('50').should('exist')
        cy.contains('.rt-td', user.email).parent().contains('60000').should('exist')
    }
}

export default new ElementsPages()
