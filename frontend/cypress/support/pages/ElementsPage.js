import data from '../../fixtures/user.json'

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
    registrationForm() {
        cy.get('#addNewRecordButton').should('be.visible').click()
        cy.get('#firstName').type(data.user.first_name)
        cy.get('#lastName').type(data.user.last_name)
        cy.get('input[placeholder="name@example.com"]').type(data.user.email)
        cy.get('#age').type(data.user.age)
        cy.get("#salary").type(data.user.salary)
        cy.get('#department').type(data.user.department)
        cy.get('#submit').click()
    }

    // Editar usuário
    editUser() {
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
        cy.get('#submit').click()

        // Validar edição
        cy.contains('.rt-td', data.dataUser.user7.email).parent().contains(data.dataUser.user7.email).should('exist')
        cy.contains('.rt-td', data.dataUser.user7.email).parent().contains(data.dataUser.user7.email).should('exist')
    }

    // Deletar usuário
    deleteUser() {
        this.registrationForm()

        // Deletar
        cy.wait(3000)
        cy.contains('.rt-td', data.user.last_name).parent().contains(data.user.email).should('exist')
        cy.get('#delete-record-4').click()
    }
    
}

export default new ElementsPages()
