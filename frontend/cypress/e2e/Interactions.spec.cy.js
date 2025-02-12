import interactions from '../support/pages/InteractionsPage';

describe('Interactions - Sortable', () => {
    beforeEach(() => {
        interactions.go();
        interactions.clickInteractions();
        interactions.clickSortable();
    });

    it('Deve reorganizar os elementos na ordem decrescente usando drag and drop', () => {
        interactions.moverDragDrop()
    })
});
