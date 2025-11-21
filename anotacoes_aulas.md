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
    - Criada a pasta `test`
    - Função `expect` – Valor gerado dinamicamente
    - Função `toBe` – Valor esperado (hardcoded)
    - O teste verifica se o **valor esperado** é igual ao **valor gerado**; quando isso não acontece, o teste falha.

  - Criar um teste real (“teste de verdade”)
    - Criação da função calculadora na pasta `models` (onde devem ficar as funções do projeto)
    - Criado um teste para verificar se a função `somar` retorna um valor válido/esperado.
    - **TDD (Test Driven Development)**
      - Desenvolvimento orientado por testes: escrever primeiro o teste e depois a função em si.

- **Os testes dessa aula não subiram para o repositório!**

---

## Dia 16

- **Testes automatizados**
  - **Testes unitários**
    - O teste funciona por conta própria, sem depender de outras dependências (como um banco de dados, por exemplo).
    - Criação da pasta `tests/unit`.
  - **Testes de integração (service)**
    - Testes que envolvem várias camadas da infraestrutura.
    - Criação da pasta `tests/integration`.
  - **Testes E2E (UI)**
    - Testes end-to-end.
- Criar endpoint `/status`.
- **Endpoint** → endereço final de um serviço ou recurso.
- **API (Application Programming Interface)**
- Criada a pasta `pages/api`.
- Criado o arquivo `pages/api/status.js`.
- Apenas criar o arquivo acima já gera automaticamente um endpoint no site em `api/status`.
- Teste via terminal:
  ```bash
  curl http://localhost:3000/api/status -v
  ```
- **Versionamento da API**
  - Basta criar uma nova pasta dentro da pasta `api` chamada `v1`.

---

## Dia 17

- **Banco de dados — como escolher?**
  - **DBMS (Database Management System / SGBD)**
    - Ex: MySQL, Postgres, SQL Server, MongoDB...
    - No projeto foi escolhido o **Postgres**
  - **Query — Consulta**
    - ORM (Object-Relational Mapping)
    - No projeto, as queries serão feitas _na mão_
    - Uso do módulo `pg`
  - **Migrations — Migrações**
    - Arquivos que instruem modificações na estrutura do banco de dados
    - No projeto será usado `node-pg-migrate`

- **Docker**
  - Permite isolar processos em um mesmo host
  - `Docker Compose` serve para monitorar e orquestrar diferentes containers no Docker
  - No Codespaces o Docker já vem instalado
  - No Docker Hub (`https://hub.docker.com`) ficam as imagens disponibilizadas, como a do Postgres
  - Baixar uma versão `alpine` do Postgres, pois essa versão ocupa menos espaço
  - Criar o arquivo `infra/compose.yaml` na raiz do projeto
    - No arquivo devem ser passados os serviços que serão instalados no container
    - Depois de configurar o arquivo `compose.yaml`, rodar no terminal:
      - `docker compose -f infra/compose.yaml up` - pra subir
      - `docker compose -f infra/compose.yaml up --detach` para poder usar o terminal normalmente
      - `docker compose down` - pra destruir
  - O comando `docker ps` serve para listar os containers que estão rodando
  - O comando `docker logs NOME_DO_PROCESSO` verifica o log do processo em questão
  - O `psql` é o cliente de linha de comando do Postgres
  - Instalar o client do Postgres → `sudo apt install postgresql-client`
  - Passar as configurações para acesso ao Postgres →  
    `psql --host=localhost --username=postgres --port=5432`

---

## Dia 18

- Criar módulo `database.js`
  - É uma abstração da nossa infraestrutura e que vai ser responsável por abrir conexão com o Banco de Dados e enviar queries pra ele;
  - Necessário instalar o `pg` na versão 8.11.3
    - Terminal -> `npm install pg@8.11.3`
  - Criação do arquivo `infra/database.js`
  - Criação do arquivo `.env` para passar as variáveis de ambiente

---

## Dia 19

- O professor instruiu a criar o arquivo `.env.development` para as variáveis de ambiente locais.
- Aula sobre caminho relativo e caminho absoluto dos diretórios:
  - Criação do arquivo `jsconfig.json`, que, estando na raiz do projeto, permite ao Node entender onde é a raiz.
- Criação dos scripts dentro do `package.json` para subir o Docker:
  - `"services:up": "docker compose -f infra/compose.yaml up --detach"`
  - `"services:stop": "docker compose -f infra/compose.yaml stop"`
  - `"services:down": "docker compose -f infra/compose.yaml down"`
- Juntar o `"services:up"` com o `"dev"`:
  - `"dev": "npm run services:up && next dev"`

---

## Dia 20

- O objetivo deste dia é configurar a página do endpoint `api/v1/status` (página de saúde do sistema).
  - Configuração dos arquivos `pages/api/v1/status/index.js` e do arquivo de testes dessa página.
  - Criação dos campos: versão do Postgres, máximo de conexões do banco e número de conexões utilizadas na tela de `status`.
  - Explicação sobre vazamento de dados através de SQL Injection e como evitar isso utilizando os campos `text` e `value` nas queries com `where`.

---

## Dia 21

- Invertigar pq o endopoint em produção `api/v1/status` não está funcionando (Error 500 - Internal Server Error)
  - Acessar os logs do servidor - Entrar no Painel da Vercel `https://vercel.com/home`, aba `logs` dentro do projeto
    - O erro estava acontecendo quando tentava acessar o postgres com as configurações de localhost
    - **Não foi feito a configuração das variaveis de ambiente para o ambiente de produção**
    - Adicionar um tratamento de erro parte do ato de se conectar ao banco no arquivo `database,js`
    - Adicionar o serviço da `Neon` - https://console.neon.tech/app/org-red-water-60184778/welcome para usar o ambiente em produção para o banco `postegres`
    - No arquivo `database.js` configurar o ssl para produção e para local não usar o ssl (pois não é aceito)
      - `ssl: process.env.NODE_ENV === "development" ? false : true`

---

## Dia 22

---

## Dia 23

---
