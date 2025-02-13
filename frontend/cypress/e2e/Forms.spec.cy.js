import forms from '../support/pages/FormsPage'

describe('Forms', () => {
  it('Deve realizar um cadastro do Practice Form', () => {
     forms.go()
     forms.clickForms()
     forms.clickPracticeForms()
     forms.formsPractice()
  })
})