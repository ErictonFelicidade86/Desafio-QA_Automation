import 'cypress-xpath';

class InteractionsPage {
    go() {
        cy.visit("https://demoqa.com/");
    }

    clickInteractions() {
        cy.contains('.card-body', 'Interactions').should('be.visible').click()
    }

    clickSortable() {
        cy.contains('span', 'Sortable').should('be.visible').click()
    }

    moverDragDrop() {
       const itemsToMove = ["One", "Two", "Three", "Four", "Five"]
       const  target = "Six";

        itemsToMove.forEach((item) => {
            cy.contains('.list-group-item', item)
            .should('be.visible')
            .trigger('mousedown', { which: 1, force: true });

            cy.contains('.list-group-item', target) // Alvo do movimento
            .should('be.visible')
            .trigger('mousemove', { which: 1, force: true })
            .trigger('mouseup', { force: true })

            cy.wait(500)
        })

        cy.log('Os elementos devemrão ficar na ordem descrescente')

    }
}

export default new InteractionsPage();
