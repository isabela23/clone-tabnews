# Aulas

## Dias 1 a 4

- Perdi as anotações depois de um **`git push --force`** :(

---

## Dia 5

- 🧭 Comandos do Git (Offline - local)
  - **`git log`** — Exibe todos os commits e alterações realizadas no repositório.
  - **`git log --stat`** — Mostra os commits junto com um resumo das alterações (arquivos modificados e linhas alteradas).
  - **`git status`** — Verifica os arquivos que foram modificados e o que está diferente em relação ao último commit.
  - **`git commit --amend`** — Permite alterar (remendar) o último commit feito, **desde que o `git push` ainda não tenha sido executado**.
    - ⚠️ _Os commits são imutáveis; portanto, ao usar o `--amend`, um novo commit é criado no lugar do anterior._
  - **`git diff`** — Mostra as diferenças entre o estado atual do repositório e o último commit realizado.
- 🗂️ Estágios dos Arquivos no Git
  - **Modificado (Modified):** O arquivo foi alterado, mas ainda não está preparado para o commit.
  - **Área de preparo (Staged):** O arquivo foi adicionado com `git add` e será incluído no próximo commit.
  - **Commit (Committed):** As alterações foram registradas permanentemente no repositório local.

---

## Dia 6

- 🧭 Comandos do Git (Online - origin)
  - **`git push`** — empurrar alterações locais para o origin.
  - **`git push --force`** — empurrar de forma forçada alterações locais para o origin.
  - **`git pull`** — trazer para o local os arquivos do repositorio no git.

---

## Dia 7

- Resumo do dia:
  1. Conectar a Vercel
  2. Importar repositório
  3. Primeira versão no ar
  4. URLs permanentes e únicas
- Client e Server:
  - Não são papeis fixos e dependem do que exatamente estes componentes estão fazendo;
- Hospedagem e Deploy:
  - Na Vercel (https://vercel.com/home)
  - Automatizado - A cada novo **`git push`** é atualizado automaticamente o site

---

## Dia 8

- Programação Orgânica x Impressora 3D

---

## Dia 9

- Criação da Milestone 'Em construção' no git e criação da issues.
  - Essa é uma forma de dividir o projeto em pequenas tarefas.

---

## Dia 10

- **Ligar sincronização do Editor**
  - O Codespaces perde as formatações definidas para o editor, mas é possível alterar essa configuração no usuário, na opção **"Ativar alterações em nuvem"**, e depois conectar sua conta do Git nas configurações.

- **Configurar o EditorConfig**
  - O EditorConfig é um arquivo `.editorconfig` salvo no repositório com as regras de formatação para o código.
  - Vale ressaltar que o EditorConfig faz a formatação **no momento em que você escreve** o código; ele **não** faz uma varredura no que já foi escrito. Para garantir que todo o código fique padronizado, será usado o Prettier.

- **Configurar o Prettier**
  - Utilizado para garantir a formatação do código.
  - Para instalar, rodar no terminal: `npm install prettier -D`
  - **OBS:** A opção `-D` significa que o Prettier será instalado apenas como dependência de desenvolvimento, já que é usado somente no processo de escrita do código.
  - No arquivo `package.json`, foi adicionado um comando para rodar o Prettier de forma mais amigável:
    - Esse comando faz a conferencia dos arquivos:

    ```json
    "lint:check": "prettier --check ."
    ```

    - Esse comando executa os ajustes nos arquivos:

    ```json
    "lint:fix": "prettier --write ."
    ```

  - Instalar o Prettier no vscode pra precisar ficar rodando o comando na mão.

---

## Dia 11

- **DNS:** Sistema de Nomes de Domínio
  - Os domínios são apenas os “apelidos” dos sites.
  - Os endereços reais são os IPs.
  - O DNS nada mais é que um **DE → PARA** (um mapeamento) dos domínios para seus respectivos IPs.
    - Ex.: `www.test.com` → `000.000.0.00`
    - Como funciona por trás: é como ligar para um atendente e perguntar qual é o IP do site `www.test.com`. O atendente responde: `000.000.0.00`. Com essa informação, você faz a ligação diretamente para esse IP.
    - Ou seja: o servidor DNS **não participa da sua conexão com o site**; ele atua **antes**, apenas para dizer qual IP você deve usar.

---

## Dia 12

- Registrar o próprio domínio:
  - Nessa aula o professor dá um dominio para gente validade de um ano!
  - Cadastro do domínio foi pelo site `https://registro.br/`
  - Eu escolhei o domínio **datatennis.com.br**
- Configurar o Servidor de DNS
  - Configração deve ser feito na conta criada na Vercel: - Entrar na tela 'Domains' e clicar em Add
    **OBS:Esperando o pagamento para poder continuar aqui!**

---

## Dia 13

- Página em "Em construção" e fechamento da Milestone 0
- Aula sobre o status dos serviços, ex: página de status da aws: `https://health.aws.amazon.com/health/status`

---

## Dia 14

- **PoC** (Proof of Concept — Prova de Conceito)
  - Responde à pergunta: **Qual o menor custo que posso ter para descobrir qual caminho seguir?**
  - Responde à pergunta: **Quais evidências afirmam que determinado conceito irá funcionar?**

- **MVP** (Minimum Viable Product — Produto Mínimo Viável)
  - Fazer o mínimo necessário, mas com excelente qualidade.

- Criação da **Milestone 1**: Fundação

- **Overengineering**
  - Complexidade desnecessária que dificulta o progresso do projeto.

- **Arquitetura de Software**
  - Prezar por simplicidade
- **Organização de Pastas e Arquivos**
  📦root/
  ├──📂pages/
  │ └──📄index.js
  ├──📂models/
  │ ├──📄users.js
  │ ├──📄content.js
  │ └──📄password.js
  ├──📂infra/
  │ ├──📄database.js
  │ ├──📂migrations/
  │ └──📂provisioning/
  │ ├──📂staging/
  │ └──📂production/
  └──📂tests/

---

## Dia 15

- **Testes Automatizados**
  - Instalar o Test Runner (usaremos o **Jest** neste curso):
    - No terminal: `npm install --save-dev jest@29.6.2`
    - No arquivo **package.json**, adicionar em **scripts**:
      - `"test": "jest"`
      - `"test:watch": "jest --watch"`  
        _(Este comando fica rodando o tempo todo, monitorando suas alterações.)_
    - Para rodar os testes no terminal:
      - `npm run test`
      - `npm run test:watch`
  - Criar um teste simples (“teste de teste”)
  - Criar um teste real (“teste de verdade”)

---
