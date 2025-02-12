import forms from '../support/pages/FormsPage'


describe('Forms', () => {
  it('Deve acessar página forms', () => {
     forms.go()

     forms.clickForms()

     forms.clickPracticeForms()

     forms.formsPractice()
  })
})