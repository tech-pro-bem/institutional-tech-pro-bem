<p align="center">
  <img src="public/tpblogo.svg" width="400px" align="center" alt="Logo da Tech" />
  <h1 align="center">Tech Pro Bem</h1>
  <p align="center">
    ✨ <a href="https://www.techprobem.com.br">Acesse o site do projeto</a> ✨
    <br/>
    Uma comunidade onde impulsionamos pessoas, carreiras e projetos sociais.
  </p>
</p>

# Sumário

- [Sumário](#sumário)
- [Introdução](#introdução)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Setup](#setup)
- [Testes](#testes)
- [Husky + Lint Staged](#husky--lint-staged)
- [Contentful](#contentful)
  - [Configurações do Contentful](#configurações-do-contentful)
- [Material UI](#material-ui)
- [Contribuições](#contribuições)
  - [Corrigindo Bugs ou adicionando novas funcionalidades](#corrigindo-bugs-ou-adicionando-novas-funcionalidades)
  - [Padrão de commits](#padrão-de-commits)
- [Design e Guias de Estilo](#design-e-guias-de-estilo)
  - [Projeto no Figma](#projeto-no-figma)

# Introdução

Nós da Tech Pro Bem somos uma comunidade de profissionais de tecnologia que atua voluntariamente para ONGs e projetos sociais por meio de consultoria estratégica gratuita.

Neste projeto desenvolvemos o website institucional da Tech pro bem para apresentar nosso trabalho.

# Tecnologias utilizadas

- HTML5 semântico
- Método Mobile-first
- [NextJS](https://nextjs.org/) - React framework for the web
- [Typescript](https://www.typescriptlang.org/pt/) - Para tipos no javascript
- [CSS Modules](https://github.com/css-modules/css-modules) - Para definir classes localmente
- [Contentful](https://www.contentful.com/) - Headless CMS
- [Material UI](https://mui.com/) - Biblioteca de componentss
- [ES Lint](https://eslint.org/) - Ferramenta para validação de código
- [Husky](https://typicode.github.io/husky/) + [Lint Staged](https://github.com/okonet/lint-staged) - Ferramenta para validar commits
- [Cypress](https://www.cypress.io/) - Framework de testes para aplicações front-end

# Setup

> Antes de começar, você vai precisar ter instalado o Node.js no mínimo na versão 18.

1. Clone localmente este repositório.

2. Instale as dependências:

```sh
npm install
```

3. Execute a aplicação em modo de desenvolvimento:

```sh
npm run dev
```

# Testes

Utilizamos o [Cypress](https://www.cypress.io/) para realizar testes automatizados nos componentes do nosso projeto. Os testes são desenvolvidos no diretório `/cypress` e podem ser executados locamente para garantir a integridade e o bom funcionamento dos componentes.

Para executar os testes com Cypress, siga os passos abaixo:

1. Certifique-se de que a aplicação está sendo executada locamente. Caso contrário, inicie-a com o seguinte comando:

```bash
npm run dev
```

2. Abra uma nova janela do terminal e execute o seguinte comando para iniciar o Cypress:

```bash
npx cypress open
```

Na interface do Cypress, selecione o teste que deseja executar e acompanhe os resultados.

3. Ou você pode executar todos os testes na aba do terminal executando o seguinte comando:

```bash
npx cypress run
```

# Husky + Lint Staged

Para assegurar a uniformidade do código e aderência às regras definidas, implementamos o Husky em conjunto com Lint Staged.

O Husky atua acionando ganchos (hooks) do Git antes de eventos específicos, como commits. O Lint Staged executa linting apenas nos arquivos que estão sendo commitados. Dessa forma, antes de confirmar um commit, o Husky aciona o Lint Staged para garantir que o código esteja formatado corretamente e siga as convenções definidas.

# Contentful

Todas as informações exibidas no site, incluindo imagens, símbolos, títulos e textos, são gerenciados pelo Contentful, um Headless CMS. Isso permite uma fácil atualização e manutenção do conteúdo sem a necessidade de modificar diretamente o código do projeto.

Alguns textos apresentam formatações específicas, como negrito, itálico e links. Nem todos os retornos do Contentful foram codificados para receber e formatar corretamente essas nuances. Portanto, **pode ser necessário ajustar o código para processar essas formatações** de maneira adequada.

Atualmente, o Contentful está configurado com um webhook que aciona automaticamente um novo deploy na Vercel sempre que há alterações no conteúdo. Isso elimina a necessidade de realizar manualmente um deploy para atualizar o conteúdo.

## Configurações do Contentful

No Contentful, o conteúdo está organizado em tabelas, cada uma com um identificador. Manter os identificadores existentes é crucial para garantir a integridade das requisições de conteúdo no código. Evite modificar esses identificadores, pois podem estar sendo utilizados em requisições existentes.

* A tipagem de cada identificador está definida no arquivo `types.tsx` de cada componente.
- Para obter mais detalhes sobre as configurações do Contentful, [clique aqui](https://docs.google.com/document/d/1WY30hDmkRWt4-N8uIg2J5ojYi0xA78U5sEpxdxkI42c/edit?usp=sharing).

# Material UI
Em nossa implementação da **seção Dúvidas**, optamos por incorporar a biblioteca Material UI para aprimorar a experiência do usuário. Para facilitar a navegação entre as diferentes categorias de perguntas, utilizamos o componente **Tabs**. Além disso, para apresentar as perguntas e respostas de maneira organizada e expansível, empregamos o componente **Accordion**.

# Contribuições

## Corrigindo Bugs ou adicionando novas funcionalidades

1. Crie uma branch com o tópico para as suas mudanças:

```bash
git checkout -b fix/fix-for-that-thing
```

2. Se tudo estiver certo após as alterações, faça um push para a sua branch:

```bash
git push origin fix/fix-for-that-thing
```

3. [Abra um pull request.](https://help.github.com/articles/creating-a-pull-request)

## Padrão de commits

- `feat` - Commits do tipo feat indicam que seu trecho de código está incluindo um **novo recurso** (se relaciona com o MINOR do versionamento semântico).

- `fix` - Commits do tipo fix indicam que seu trecho de código commitado está **solucionando um problema** (bug fix), (se relaciona com o PATCH do versionamento semântico).

- `docs` - Commits do tipo docs indicam que houveram **mudanças na documentação**, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).

- `test` - Commits do tipo test são utilizados quando são realizadas **alterações em testes**, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)

- `build` - Commits do tipo build são utilizados quando são realizadas modificações em **arquivos de build e dependências**.

- `perf` - Commits do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a **performance**.

- `style` - Commits do tipo style indicam que houveram alterações referentes a **formatações de código**, semicolons, trailing spaces, lint... (Não inclui alterações em código).

- `refactor` - Commits do tipo refactor referem-se a mudanças devido a **refatorações que não alterem sua funcionalidade**, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.

- `chore` - Commits do tipo chore indicam **atualizações de tarefas** de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código)

- `ci` - Commits do tipo ci indicam mudanças relacionadas a **integração contínua** (_continuous integration_).

Mais infos [aqui](https://github.com/iuricode/padroes-de-commits#:~:text=%F0%9F%93%84-,Padr%C3%B5es%20de%20commits,a%20cria%C3%A7%C3%A3o%20de%20ferramentas%20automatizadas.).

---

# Design e Guias de Estilo

## Projeto no Figma

- Link para o projeto no Figma: https://www.figma.com/file/ww3DjLyHa7rFPX9xQzsmHj/Site---Tech-Pro-Bem?type=design&node-id=0-1&mode=design
