<p align="center">
  <img src="public/tpblogo.svg" width="400px" align="center" alt="Logo da Tech" />
  <h1 align="center">Tech Pro Bem</h1>
  <p align="center">
    ✨ <a href="https://www.techprobem.com.br">https://www.techprobem.com.br</a> ✨
    <br/>
    Uma comunidade onde impulsionamos pessoas, carreiras e projetos sociais!
  </p>
</p>

# Sumário

- [Sumário](#sumário)
- [Introdução](#introdução)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Setup](#setup)
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
- [Husky](https://typicode.github.io/husky/) - Ferramenta para validar commits


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