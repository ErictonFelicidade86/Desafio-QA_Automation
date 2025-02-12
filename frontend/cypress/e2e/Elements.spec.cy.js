import elements from '../support/pages/ElementsPage'
import userData from '../fixtures/user.json'

describe('Elements', () => {
    beforeEach(() => {
        elements.go()
        elements.clickElements()
        elements.clickWebTables()
    })

    it('Deve criar um novo usuário', () => {
        elements.registrationForm(userData.user)
    })

    it('Deve editar o novo usuário criado', () => {
        elements.registrationForm(userData.user)
        elements.editUser(userData.user)
    })

    it('Deve deletar o novo usuário criado', () => {
        elements.registrationForm(userData.user)
        elements.deleteUser(userData.user)
    })
})
