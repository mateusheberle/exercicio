# 10. Pratique

## Objetivo

Refatorar o CSS do projeto "Agência Criativa Web", aplicando os conceitos aprendidos neste módulo de SASS. O foco é transformar o código CSS tradicional em um projeto organizado, modular e escalável, utilizando recursos como partials, variáveis, mixins, aninhamento e operadores, além de seguir a metodologia BEM.

## Requisitos:

### 1. Estrutura com Partials:

- Dividir o código SASS em múltiplos arquivos parciais, organizados por função ou componente:
    - `_base.scss` (estilos base como body, tipografia, reset)
    - `_variaveis.scss` (cores, espaçamentos, fontes)
    - `_mixins.scss` (estilos reutilizáveis)
    - `_layout.scss` (estrutura geral da página)
    - `_componentes.scss` (componentes como botões, cards, menus, etc.)
    - `estilos.scss` (arquivo principal que importa os demais com @use)

### 2. Uso de Variáveis e Mixins:

- Utilizar variáveis SASS para cores, espaçamentos, fontes e tamanhos.
- Criar pelo menos 2 mixins reutilizáveis (ex: espaçamentos padrão, botão básico).
- Utilizar operadores para calcular tamanhos proporcionais (ex: margin-bottom: calc($espacamento / 2)).

### 3. Aninhamento e Organização:

- Aplicar aninhamento de seletores com moderação, seguindo boas práticas.
- Organizar os estilos por seções e componentes usando a metodologia BEM para nomeação das classes (.bloco__elemento--modificador).

### 4. Compilação e Estrutura:

- Configurar o ambiente de desenvolvimento:
- Compilar via linha de comando com Node.js;
- O código final deve gerar um arquivo CSS final compilado.
- O código SASS deve estar na pasta scss/, separado do css/ compilado.

## Entrega

- Atualizar o repositório do projeto Agência Criativa Web no GitHub contendo:
  - A pasta `scss/` com os arquivos parciais
  - A pasta `css/` com o CSS compilado.
  - O index.html atualizado referenciando o arquivo estilos.css.

- Mantenha o repositório público.
- Compartilhe o link do repositório conforme instruções.

## Dicas

- Revise e reaproveite o CSS anterior, transformando em código SASS sem reescrever tudo do zero.
- Use `@use` para importar arquivos de forma moderna.
- Teste responsividade com o DevTools em diferentes larguras de tela.
- Utilize comentários nos arquivos .scss para explicar as partes principais.
- Evite misturar IDs com classes nos seletores — prefira sempre as classes BEM.