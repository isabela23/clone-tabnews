# Aulas

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
  - Instalar o Prettier no vsCode pra precisar ficar rodando o omando na mão.