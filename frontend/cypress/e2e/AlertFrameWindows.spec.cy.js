import alert from '../support/pages/AlertFrameWindowsPage'

describe('Alert Frame & Windows', () => {
    it('Validar a mensagem This is a sample page', () => {
        alert.go()
        alert.clickAlertsFrameWindows()
        alert.clickBrowserWindows()
    })
})