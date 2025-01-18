# Projeto Cypress - Automação de API do Trello

Este projeto contém automações para a API do Trello utilizando o Cypress. O objetivo é validar as funcionalidades básicas da API (criação e exclusão de boards e cards) enquanto aplica boas práticas como reaproveitamento de código, geração de relatórios e integração contínua (CI/CD).

---

## 📂 Estrutura do Projeto

A estrutura do projeto está organizada para garantir modularidade e facilidade de manutenção:

- **cypress/e2e**: Contém os testes organizados por funcionalidades:
  - `boards.cy.js`: Testes relacionados à criação e exclusão de boards.
  - `cards.cy.js`: Testes relacionados à criação e exclusão de cards.
- **cypress/fixtures**: Armazena dados reutilizáveis, como `APIKey` e `APIToken`, para facilitar a manutenção.
- **cypress/support**:
  - `commands.js`: Contém comandos personalizados para reaproveitamento de código.
  - `e2e.js`: Configurações globais executadas antes dos testes.
- **node_modules**: Dependências do projeto (ignorado no controle de versão).
- **reports**: Relatórios de testes gerados com `mochawesome`.
- **.github/workflows**: Contém a configuração do pipeline CI/CD para execução no GitHub Actions.
- **cypress.config.js**: Configurações gerais do Cypress, como base URL e reporter.
- **package.json**: Gerenciamento de dependências e scripts úteis para execução.
- **.gitignore**: Lista arquivos e diretórios ignorados pelo Git.

---

## 🛠️ Instalação e Configuração

### Pré-requisitos
1. Instale o [Node.js](https://nodejs.org/).
2. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/trello-cypress-tests.git
   cd trello-cypress-tests
   ```

### Instalação
1. Instale as dependências do projeto:
   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto (ou configure diretamente no código):
     ```plaintext
     APIKey=sua-chave-aqui
     APIToken=seu-token-aqui
     ```

---

## 🚀 Execução

### Localmente

#### Interface visual do Cypress:
```bash
npx cypress open
```

#### Execução em segundo plano:
```bash
npx cypress run
```

### Relatórios
Após a execução dos testes:
1. Gere o relatório consolidado com o comando:
   ```bash
   npm run report
   ```
2. O relatório estará disponível na pasta `cypress/reports`.

---

## 📊 Relatórios

### Mochawesome
Este projeto utiliza o `mochawesome` para gerar relatórios em formatos HTML e JSON, detalhando os resultados de cada execução. Esses relatórios podem ser gerados localmente ou automaticamente pelo pipeline de CI/CD.

---

## 📦 CI/CD

### Pipeline no GitHub Actions

O pipeline é configurado no arquivo `.github/workflows/cypress.yml`. Ele executa automaticamente os testes a cada push na branch principal (`main`) e gera relatórios. Passos principais:

1. **Checkout do código**: Clona o repositório.
2. **Instalação de dependências**: Instala os pacotes necessários.
3. **Execução dos testes**: Roda os testes do Cypress.
4. **Geração de relatórios**: Consolida os resultados com o `mochawesome`.
5. **Upload de relatórios**: Salva os relatórios como artefatos no GitHub Actions.

---

## 🔍 Funcionalidades Testadas

### Boards
- **Criação de Boards**: Valida a criação de boards usando a API do Trello.
- **Exclusão de Boards**: Garante que boards podem ser excluídos corretamente.

### Cards
- **Criação de Cards**: Valida a criação de cards em uma lista específica.
- **Exclusão de Cards**: Garante que cards podem ser excluídos corretamente.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork deste repositório.
2. Crie uma branch para suas alterações:
   ```bash
   git checkout -b minha-feature
   ```
3. Envie suas alterações em um pull request.

---

# Sites utilizados:
- [Trello Developer Documentation](https://developer.atlassian.com/cloud/trello/)
- [Trello Power-Ups Admin](https://trello.com/power-ups/admin)

---

# Link mapa mental:
- [Mapa mental miro](https://miro.com/app/board/uXjVLs968H0=/?share_link_id=55009597042)
