import data from '../../fixtures//praticeForm.json'
class FormsPage {
    go(){
        cy.visit("https://demoqa.com/")
    }

    urlSample() {
        cy.visit("https://demoqa.com/sample")

    }

    clickForms() {
        cy.contains('.card-body', 'Forms').click()
    }

    clickPracticeForms() {
        cy.contains('span', 'Practice Form').click()
    }

    formsPractice() {
        cy.get("input[placeholder='First Name']").type(data.first_name)
        cy.get("input[placeholder='Last Name']").type(data.last_name)
        cy.get("#userEmail").type(data.email).click()
        cy.get('input[value="Male"]').click({ force: true} )
        cy.xpath("//input[@pattern='\\d*']").type(data.number_mobile, { force: true })
        cy.get('#dateOfBirthInput').should('be.visible').click()
        cy.get("select.react-datepicker__month-select").select(data.month)
        cy.get("select.react-datepicker__year-select").select(data.year)
        cy.get(".react-datepicker__day--023").click()
        cy.get("div.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3")
            .click()
            .type("Computer Science{enter}")
        cy.get("input[value='1']").check( {force: true})
        cy.get('input[type="file"]')
            .attachFile('assets/files/bem_vindo_teste.txt')
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

        cy.get('#submit').click()

        cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
        cy.wait(2000)
        cy.get('#closeLargeModal').click()
        
    }

} export default new FormsPage