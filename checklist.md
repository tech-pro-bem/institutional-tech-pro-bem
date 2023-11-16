# Checklist

### Início da Task:

- [ ] Criar nova branch para task seguindo o padrão:

```
feature/nome-da-feature

bugfix/nome-do-bug
```

### Estrutura de pasta:

- [ ] Componentes

```components
NomeComponente
	index.tsx
	style.module.css
```

### Typescript:

- [ ] Atribuir tipo para retorno de função;
- [ ] Atribuir tipo para parâmetro de função
- [ ] Atribuir tipo ao fazer requisição no contentful

### Estilização:

#### Testar componente em telas

- [ ] mobile: 360X640 - Breakpoint: 0-767px
- [ ] tablet 768X1024 - Breakpoint: 768px - 1279px -> (min-width: 48em)
- [ ] desktop: 1920X1080 - Breakpoint: 1280 ou acima -> (min-width: 80em)
- [ ] Checar via dev tools se algum elemento está transbordando

### Acessibilidade

- [ ] Aumentar font-size do html para 32px e ver se o layout ainda funciona
- [ ] verificar se o layout quebra com zoom de 200%
- [ ] Testar navegação apenas com o teclado

### Documentação

- [ ] Descrever o que foi feito no card do Coda
- [ ] Adicionar informações relevantes ao readme do projeto

### Teste:

- [ ] Testar com cypress as funcionalidades da sessão;
- [ ] Testar os tamanhos de tela e se possível overflow.

### Commit:

- [ ] Abrir PR para branch de desenvolvimento
- [ ] Após verificar erros abrir PR para staging
