import widgetsPage from "../support/pages/WidgetsPage"

describe('Widgets - Sortable', () => {
    beforeEach(() => {
        widgetsPage.go()
        widgetsPage.clickWidgets()
        widgetsPage.clickProgressBar()
    })

    it('Validar o Progress Bar', () => {
        widgetsPage.clickStart()
        widgetsPage.stopBeforeOrAt25()
        widgetsPage.validateProgress()
        widgetsPage.restartAndWaitFor100()
    })
})
