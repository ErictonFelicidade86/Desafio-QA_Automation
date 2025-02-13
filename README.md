# Desafio QA Automation

📦 projeto
├── 📂 .github/workflows
│   ├── cypress-tests-e2e.yml   # Pipeline para testes automatizados
│
├── 📂 backend
│   ├── 📂 cypress
│   │   ├── 📂 doc
│   │   │   ├── CenarioDeTeste.md  # 📄Documentação dos testes backend
│   │   ├── 📂 e2e/integration/tests
│   │   │   ├── LivrosReserva.cy.js  # Testes automatizados
│   │   ├── 📂 fixtures              # 📄 Dados mock para os testes
│   │   ├── 📂 support
│   │   │   ├── commands.js  # 🔧 Funções auxiliares para Cypress
│   │   ├── cypress.config.js  # Configuração do Cypress
│   ├── package.json
│   ├── README.md     # Instrução de como rodar o projeto
│   ├── yarn.lock
│
├── 📂 frontend
│   ├── 📂 cypress
│   │   ├── 📂 doc
│   │   │   ├── CenarioDeTeste.md  # 📄 Documentação dos testes frontend
│   │   ├── 📂 e2e
│   │   │   ├── AlertFrameWindows.spec.cy.js
│   │   │   ├── Elements.spec.cy.js
│   │   │   ├── Forms.spec.cy.js
│   │   │   ├── Interactions.spec.cy.js
│   │   │   ├── Widgets.spec.cy.js
│   │   ├── 📂 fixtures
│   │   │   ├── assets/files
│   │   │   │   ├── bem_vindo_teste.txt
│   │   │   │   ├── praticeForm.json
│   │   │   │   ├── user.json
│   │   ├── 📂 support
│   │   │   ├── 📂 pages
│   │   │   │   ├── AlertFrameWindowsPage.js
│   │   │   │   ├── ElementsPage.js
│   │   │   │   ├── FormsPage.js
│   │   │   │   ├── InteractionsPage.js
│   │   │   │   ├── WidgetsPage.js
│   │   │   ├── commands.js
│   │   │   ├── e2e.js
│   │   ├── cypress.config.js
│   ├── package.json
│   ├── README.md     # # Instrução de como rodar o projeto 
│   ├── yarn.lock
│
├── .gitignore
├── README.md
