// Comando para gerar um nome aleatório
Cypress.Commands.add("generateUserName", () => {
  const nameUrl = Cypress.config("baseNameUrl")

  cy.api({
    method: 'GET',
    url: nameUrl,
    failOnStatusCode: false
  }).then(response => {
    expect(response.status).to.eq(200)
    const firstName = response.body.data[0].firstname
    cy.log('Nome Gerado:', firstName)

    Cypress.env("userData", {
      userName: firstName,
      password: "TesteAlfa23@"
    })
  })
})

Cypress.Commands.add("createUser", () => {
  cy.api({
    method: 'POST',
    url: '/Account/v1/User',
    body: Cypress.env("userData"),
    headers: { "Content-Type": "application/json" }
  }).then(response => {
    expect(response.status).to.eq(201)
    expect(response.body).to.have.property("userID")

    Cypress.env("userID", response.body.userID) // pegando um id do usuário
  })
})

// autenticação do token
Cypress.Commands.add("generateToken", () => {
  cy.api({
    method: 'POST',
    url: '/Account/v1/GenerateToken',
    body: Cypress.env("userData"),
    headers: { "Content-Type": "application/json" }
  }).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body).to.have.property("token")

    Cypress.env("authToken", response.body.token)
  })
})

// Verificar a autorização
Cypress.Commands.add("verifyUserAuthorization", () => {
  cy.api({
    method: 'POST',
    url: '/Account/v1/Authorized',
    body: Cypress.env("userData"),
    headers: { "Content-Type": "application/json" }
  }).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body).to.be.true
  })
})

// Lista disponíveis dos livros 
Cypress.Commands.add("listBooks", () => {
  cy.api({
    method: 'GET',
    url: '/BookStore/v1/Books'
  }).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body.books).to.be.an("array").that.is.not.empty

    Cypress.env("booksList", response.body.books.slice(0, 2))
  })
})

// livros alugar 
Cypress.Commands.add("rentBooks", () => {
  cy.api({
    method: 'POST',
    url: '/BookStore/v1/Books',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${Cypress.env("authToken")}`
    },
    body: {
      userId: Cypress.env("userID"),
      collectionOfIsbns: Cypress.env("booksList").map(book => ({ isbn: book.isbn }))
    }
  }).then(response => {
    expect(response.status).to.eq(201)
  })
})

// Comando para listar os detalhes do usuário
Cypress.Commands.add("getUserDetails", () => {
  cy.api({
    method: 'GET',
    url: `/Account/v1/User/${Cypress.env("userID")}`,
    headers: {
      "Authorization": `Bearer ${Cypress.env("authToken")}`
    }
  }).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body.books).to.have.length(2)
  })
})
