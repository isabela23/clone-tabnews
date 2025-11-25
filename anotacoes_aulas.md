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

- Investigar por que o endpoint em produção `api/v1/status` não está funcionando (Error 500 - Internal Server Error)
  - Acessar os logs do servidor:
    - Entrar no painel da Vercel (aba **Logs**) dentro do projeto.
  - O erro estava acontecendo porque o sistema tentava acessar o Postgres usando configurações de _localhost_.
  - **As variáveis de ambiente para o ambiente de produção não estavam configuradas.**
  - Adicionar tratamento de erro na parte responsável por conectar ao banco no arquivo `database.js`.
  - Adicionar o serviço da **Neon** para usar o ambiente de produção do Postgres.
    - URL de acesso: <https://console.neon.tech/app/org-red-water-60184778/welcome>
  - No arquivo `database.js`, configurar o SSL:
    - Em produção: usar SSL
    - Em desenvolvimento/local: não usar SSL (não é aceito)
    - Exemplo:
      ```js
      ssl: process.env.NODE_ENV === "development" ? false : true;
      ```

---

## Dia 22

- Aulas sobre migrations:
  - As migrations servem para automatizar alterações na estrutura do banco de dados em diferentes ambientes.
  - Elas **proíbem alterações manuais** diretamente no banco.
  - Ao criar um arquivo de migração:
    - No escopo `up` ficam as alterações que **serão aplicadas** ao esquema do banco.
    - No escopo `down` ficam as operações para **desfazer** as alterações (caso necessário) — **cuidado**, pode ser perigoso!
      - Não será implementado nesse projeto!

- Arquivos de migração:
  - Definem a **ordem** das alterações que serão aplicadas.
  - Contêm as **instruções** das modificações no banco de dados.

- Framework de migração:
  - **Garantir** que os arquivos sejam executados **na ordem correta**.
  - **Garantir** que cada arquivo seja executado **uma única vez**.

- Instalação do framework (`node-pg-migrate`):
  - `npm install node-pg-migrate@6.2.2`

- Instalação do módulo `dotenv` (para permitir que o script de migrations leia o arquivo de variáveis de ambiente):
  - `npm install dotenv@16.4.4`

- Criação dos scripts dentro do `package.json`:
  - Para criar uma migration dentro da pasta `infra/migrations`:
    - `"migration:create": "node-pg-migrate --migrations-dir infra/migrations create"`
    - Ao rodar o comando (`npm run migration:create`), é necessário passar um **nome** para a migration. Exemplo:
      - `npm run migration:create primeira_migracao`
    - Explicação do arquivo gerado:
      - O início do nome contém a **data e hora** (timestamp) da criação.
      - Após o `"_"` aparece o **nome** escolhido na criação da migration.
  - Para executar as migrations:
    - `"migration:up": "node-pg-migrate -m infra/migrations --envPath .env.development up"`

- No arquivo de variáveis de ambiente `.env.development`, adicionar a string de conexão com o banco local:
  - `DATABASE_URL=postgres://local_user:local_password@localhost:5432/local_db`

---

## Dia 23

- Criação do endpoint `/migrations`
  - Quando o endpoint receber um `GET`, as migrations são rodadas em **Dry Run**
    - Executa as migrations “de mentira”, apenas para visualizar o que seria feito numa execução real.
  - Quando o endpoint receber um `POST`, as migrations são rodadas em **Live Run**
    - Aqui as migrations são executadas de verdade.

- Criação do teste para `GET` no novo endpoint:  
  `Get to /api/v1/migrations should return 200`

- Criação do arquivo:  
  `tests/integration/api/v1/migrations/get.test.js`

- Criação da tela `index.js` para o endpoint:  
  `pages/api/v1/migrations/index.js`

- Criação do arquivo para teste do `POST`:  
  `tests/integration/api/v1/migrations/post.test.js`

- Para rodar o test watch apenas nos arquivos desejados, por exemplo:
  ```bash
  npm run test:watch -- migrations
  ```

---

## Dia 24

- Colar os testes para rodar de forma serial (um teste atrás do outro) com a opção `--runInBand`. No script, trocar para `"test:watch": "jest --watchAll --runInBand"`.
- Sempre rodar os testes com o banco limpo, ajustes em `get.test.js` e `post.test.js`. **Mas isso não é tão simples :(**
  - Criar um arquivo `jest.config.js` para que os testes consigam usar os recursos do `next/jest`.

---

## Dia 25

- Instalar o pacote `npm install dotenv-expand@11.0.6`.
  - Esse pacote é para permitir variáveis como:  
    `DATABASE_URL=postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB`
- Usar a Migration em produção.

---

## Dia 26

- As `branches` no Git:
  - **3 níveis de compreensão sobre a feature de branches:**
    - **1º nível:**
      - As branches possibilitam a criação de várias “cópias do código do projeto” paralelas.
      - Tudo que é feito nessa cópia não vai alterar a branch `main` ou qualquer outra branch do projeto.
    - **2º nível:**
      - O Git não duplica todos os arquivos para cada branch — isso seria pesado demais.
      - Ele duplica as **linhas do tempo** (os commits).
    - **3º nível:**
      - Na verdade, ele não duplica as linhas do tempo.
      - A branch, na verdade, **só aponta para algum commit** específico.
  - **Comandos:**
    - `git branch` — Mostra a lista das branches que existem. A branch com `*` é a que você está no momento.
    - `git status` — Também é possível ver a branch em que você está.
    - `git branch nome_branch` — Cria uma nova branch.
    - `git checkout nome_da_branch` — Para mudar para uma branch específica.
    - `git checkout -b nome_da_branch` — Para criar uma nova branch e já mudar para ela.
    - `git switch nome_da_branch` — Faz a mesma coisa que o comando acima.
- Criar um novo database (`staging`) na `Neon` para o banco de homologação.
- Na Vercel, configurar as variáveis de ambiente do tipo `preview` com os dados do banco de homologação.
- **Na Vercel funciona assim: todos os commits no `main` serão deployados em produção; commits que não estão no `main` terão deploy em homologação (`preview`).**
- Foi criada uma nova `branch` chamada `fix-migrations-endpoint`:
  - `git branch fix-migrations-endpoint`
  - `git checkout fix-migrations-endpoint`
  - `git push --set-upstream origin fix-migrations-endpoint`
  - Commitando essa nova branch, a Vercel vai fazer o deploy para homologação.
- Realização de testes no banco de homologação.
- Comando curl -> `curl -s  https://clone-tabnews-git-fix-migration-461f1e-isabela-tavares-projects.vercel.app/api/v1/status | python3 -m json.tool`

---

## Dia 27

- Como se deleta branchs no git:
  - **Comandos:**
    - `git branch -d nome_da_branch`
  - **Tem que tomar cuidado pra não deletar uma branch que não foi mergiada ainda**
  - Quando isso acontecer é so entrar na branch da `ref`: por exemplo: `git checkout 4438c0b`
  - E nela criar uma nova branch que vai voltar os dados `git checkout -b fix-migrations-endpoint`
- O `merge` no Git:

---

## Dia 28

---

## Dia 29

---

## Dia 30

---
