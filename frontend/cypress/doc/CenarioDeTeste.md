# 🧪 Testes Automatizados - Frontend

## 📌 Resumo

Este documento descreve os testes automatizados para a interface do usuário no site [DemoQA](https://demoqa.com/). Os testes verificam a funcionalidade de diversos componentes e interações.

---

## 📝 Cenários de Teste

### 📋 **Forms - Preenchimento de Formulário**
1. Acessar o site: [https://demoqa.com/](https://demoqa.com/)
2. Escolher a opção **Forms** na página inicial.
3. Clicar no submenu **Practice Form**.
4. Preencher todo o formulário com valores aleatórios.
5. Fazer upload de um arquivo **.txt** (deve estar na pasta correta do repositório do GitHub).
6. Submeter o formulário.
7. Garantir que um **popup** foi aberto após o submit.
8. Fechar o popup.

---

### 🌐 **Alerts, Frame & Windows - Validação de Nova Janela**
1. Acessar o site: [https://demoqa.com/](https://demoqa.com/)
2. Escolher a opção **Alerts, Frame & Windows** na página inicial.
3. Clicar no submenu **Browser Windows**.
4. Clicar no botão **New Window**.
5. Certificar-se de que uma nova janela foi aberta e validar a mensagem `"This is a sample page"`.
6. Fechar a nova janela aberta.

---

### 📊 **Elements - Gerenciamento de Tabelas**
1. Acessar o site: [https://demoqa.com/](https://demoqa.com/)
2. Escolher a opção **Elements** na página inicial.
3. Clicar no submenu **Web Tables**.
4. Criar um novo registro.
5. Editar o novo registro criado.
6. Deletar o novo registro criado.

#### 🎯 **Bônus (Pontos adicionais na avaliação)**
- Criar **12 novos registros** de forma dinâmica utilizando **Cucumber**.
- Deletar **todos os registros** criados dinamicamente.

---

### ⏳ **Widgets - Barra de Progresso**
1. Acessar o site: [https://demoqa.com/](https://demoqa.com/)
2. Escolher a opção **Widgets** na página inicial.
3. Clicar no submenu **Progress Bar**.
4. Clicar no botão **Start**.
5. Parar antes de atingir **25%**.
6. Validar que o valor da barra de progresso é **≤ 25%**.
7. Clicar em **Start** novamente e, ao chegar em **100%**, resetar a barra de progresso.

---

### 🎮 **Interactions - Ordenação de Itens**
1. Acessar o site: [https://demoqa.com/](https://demoqa.com/)
2. Escolher a opção **Interactions** na página inicial.
3. Clicar no submenu **Sortable**.
4. Utilizar métodos de **drag and drop** para colocar os elementos na **ordem decrescente**.
   - *Observação:* A lista original não permitia uma ordenação crescente, por isso foi utilizada a ordem decrescente.

---

## 🔍 Observações
- Os testes serão executados utilizando **Cypress**.
- O arquivo **.txt** necessário para upload deve estar localizado na pasta `fixtures/assets/files/` dentro do projeto.
- O método de **drag and drop** pode ser testado utilizando bibliotecas adicionais, como `cypress-drag-drop`.

---

