describe('Criar uma reserva de livros', () => {
  before(() => {
    cy.generateUserName() // Cria os nomes aleatório
  })

  it('Criar um usuário com sucesso', () => {
    cy.createUser()
  })

  it('Gerar um token de acesso', () => {
    cy.generateToken()
  })

  it('Confirmar se o usuário criado está autorizado', () => {
    cy.verifyUserAuthorization()
  })

  it('Listar os livros disponíveis', () => {
    cy.listBooks()
  })

  it('Alugar dois livros de livre escolha', () => {
    cy.rentBooks()
  })

  it('Listar os detalhes do usuário com os livros escolhidos', () => {
    cy.getUserDetails()
  })
})
