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
        const itemsToMove = ["One", "Two", "Three", "Four", "Five"];
        const target = "Six";
        cy.moveItems(itemsToMove, target)
    }
}

export default new InteractionsPage();
