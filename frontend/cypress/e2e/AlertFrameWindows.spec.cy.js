import alert from '../support/pages/AlertFrameWindowsPage'

describe('Alert Frame & Windows', () => {
    it('Validar a mensagem This is a sample page', () => {
        // Acessando site DEMOQA
        alert.go()

        alert.clickAlertsFrameWindows()

        alert.clickBrowserWindows()
    })
})