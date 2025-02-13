# 🧪 Teste de API

## 📌 Criar um usuário com sucesso
1. Enviar um **POST** para `https://demoqa.com/Account/v1/User` com dados válidos.
2. Validar que o **status code** retornado seja **201 Created**.
3. Verificar se o `userID` foi gerado corretamente na resposta.

---

## 🔑 Gerar um token de acesso
1. Enviar um **POST** para `https://demoqa.com/Account/v1/GenerateToken` com as credenciais criadas.
2. Validar que o **status code** retornado seja **200 OK**.
3. Validar que o **token** seja gerado corretamente.

---

## ✅ Confirmar se o usuário criado está autorizado
1. Enviar um **POST** para `https://demoqa.com/Account/v1/Authorized` com as credenciais criadas.
2. Validar que o **status code** retornado seja **200 OK** e que a resposta seja `true`.

---

## 📚 Listar os livros disponíveis
1. Enviar um **GET** para `https://demoqa.com/BookStore/v1/Books`.
2. Validar que o **status code** seja **200 OK**.
3. Verificar se a resposta contém uma **lista de livros** com detalhes como `ISBN`, `title`, `author`.

---

## 📖 Alugar dois livros de livre escolha
1. Enviar um **POST** para `https://demoqa.com/BookStore/v1/Books` com o `userID` e os **ISBNs escolhidos**.
2. Validar que o **status code** retornado seja **201 Created**.
3. Verificar que os livros foram adicionados ao usuário.

---

## 🔍 Listar os detalhes do usuário com os livros escolhidos
1. Enviar um **GET** para `https://demoqa.com/Account/v1/User/{userID}`.
2. Validar que o **status code** seja **200 OK**.
3. Verificar que os detalhes do usuário retornam corretamente, incluindo os **livros alugados**.

---

### 📝 Observações
- Certifique-se de substituir `{userID}` pelo ID do usuário gerado na criação.
- O token de acesso pode ser necessário para algumas requisições.
- O JSON de resposta pode ser validado com asserts no Cypress ou outra ferramenta de testes.

---

## 🚨 Testes de Caminho de Não Sucesso (Failure Path)

### ❌ Tentativa de criar um usuário com dados inválidos
- Enviar um **POST** para `https://demoqa.com/Account/v1/User` com:
  - Corpo da requisição sem `username` ou `password`
  - Senha fraca (exemplo: "123")
- Validar que o **status code** retornado seja **400 Bad Request**.
- Validar que a resposta contenha um JSON com:
  ```json
  {
    "code": 0,
    "message": "string"
  }

