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
        cy.createUser()
        cy.btnSubmit()
    }

    // Editar usuário
    editUser() {
        cy.editUser()
        cy.btnSubmit()

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
