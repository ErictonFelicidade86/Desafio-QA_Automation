class FormsPage {
    go(){
        cy.demoQA()
    }

    clickForms() {
        cy.contains('.card-body', 'Forms').click()
    }

    clickPracticeForms() {
        cy.contains('span', 'Practice Form').click()
    }

    formsPractice() {
        cy.dataUserPractice()
        cy.dataUserPracticeOther()
        cy.dataUserPracticeForms()
        cy.btnSubmit()
        cy.closeModal()
    }

} 

export default new FormsPage()