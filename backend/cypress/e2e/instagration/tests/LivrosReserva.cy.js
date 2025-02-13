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

describe('Testes de API - Caminhos de Falha e Validações', () => {

  it('Tentativa de criar um usuário com dados inválidos', () => {
    cy.createUserInvalid('', '').then(response => {
      expect(response.status).to.be.oneOf([400, 406])  // Atualizado
      expect(response.body).to.have.property('message').that.is.a('string')
    })

    cy.createUserInvalid('testuser', '123').then(response => {
      expect(response.body).to.have.property('message').that.is.a('string')
    })
  })

  it('Gerar um token com credenciais inválidas', () => {
    cy.generateTokenInvalid('user_not_exists', 'InvalidPass1@').then(response => {
      expect(response.status).to.eq(400)  // Confirmado
      expect(response.body).to.have.property('message').that.is.a('string')
    })
  })

  it('Confirmar autorização de um usuário não existente', () => {
    cy.verifyNopUserAuthorization('user_not_exists', 'InvalidPass1@').then(response => {
      expect(response.status).to.be.oneOf([400, 404])
      expect(response.body).to.have.property('message').that.is.a('string')
    })
  })

})



