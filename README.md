# TSUNIA - Tecnologia Sem Um Nome Interessante Ainda [![Build Status](https://travis-ci.org/guilhermesteves/tsunia.svg)](https://travis-ci.org/guilhermesteves/tsunia)

### [English Version README](./README-EN.md)

[<img title="TSUNIA" src="http://i.imgur.com/txVNoNA.jpg" width="300px" alt="TSUNIA logo"/>](https://github.com/guilhermesteves/tsunia)

O objetivo desse projeto é prover uma arquitetura (boilerplate) de projeto **front-end** com as seguintes tecnologias:

- [AngularJS](https://angularjs.org/)
- [Jade](http://jade-lang.com/)
- [SASS](http://sass-lang.com/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/)

Seguindo as diretrizes do [Material Design](http://www.google.com/design/spec/material-design/introduction.html) com o [Material Angular](https://material.angularjs.org/), o projeto é estruturado de maneira modular, tendo a sua arquitetura facilmente reaproveitável.

As documentações são integradas na build e usam o [KSS](http://warpspire.com/kss/) e o [JsDoc](http://usejsdoc.org/).

# Instalação

Para instalar, basta clonar o projeto

    git clone git@github.com:guilhermesteves/tsunia.git
    
E rodar o **npm** e o **bower**:

    npm install && bower install
    
Tudo pronto!

# Rodando o projeto

## Endpoints

## Grunt

Esse projeto tem diversas maneiras de ser executado pelo Grunt, as principais tarefas são:

- **Server** - Executando `grunt server`
- **Build** - Executando `grunt build`
- **Test** - Executando `grunt test`
- **Default** - Executando `grunt`

### Server

Gera uma versão de desenvolvimento do seu app e faz reload automático ao detectar mudanças. Os arquivos são salvos em um diretório temporária e não é gerada uma versão de produção.

#### Urls

Essa tarefa usa por padrão, a url definida como **development**, no seu **endpoints.js**. Caso queira usar a versão de produção apontada para o servidor de homologação ou produção, basta usar os seguintes comandos com a flag `--url`:

- Homologação

Para rodar em homologação, as seguintes flags são válidas: `--url:r`, `--url:rat` e `--url:ratification`

Exemplo: `grunt server --url:ratification`

- Produção

Para rodar em produção, as seguintes flags são válidas: `--url:p`, `--url:prod` e `--url:production`

Exemplo: `grunt server --url:production`

**OBS:** Não será feita uma versão de produção e os arquivos ficam em um diretório temporário, essa flag só muda o url do servidor.

Se quiser montar uma versão de produção, use a tarefa **Build** ou a flag **dist**.

#### Dist

Existe a opção de gerar automaticamente a build de produção junto com o servidor a cada mudança (apesar de não recomendado), usando a opção **dist**. Basta rodar `grunt server:dist`.

### Build

Gera uma versão de produção do seu app, com tudo minificado e otimizado.

#### Urls

Essa tarefa usa por padrão, a url definida como **production**, no seu **endpoints.js**. Caso queira usar a versão de produção apontada para o servidor de desenvolvimento ou homologação, basta usar os seguintes comandos com a flag `--url`:

- Desenvolvimento

Para rodar em modo desenvolvimento, as seguintes flags são válidas: `--url:d`, `--url:dev` e `--url:development`

Exemplo: `grunt build --url:development`

- Homologação

Para rodar em homologação, as seguintes flags são válidas: `--url:r`, `--url:rat` e `--url:ratification`

Exemplo: `grunt build --url:ratification`

**OBS:** Os arquivos serão minificados e ofuscados como a versão de produção, essa flag só muda o url do servidor.

### Test

Ao rodar essa tarefa, todos os testes serão realizados. 

#### Watch

Existe a opção **watch** que monitora por mudanças e executa novamente os testes. Basta rodar `grunt test:watch`.

### Default

Essa tarefa roda as tarefas **Build** e **Test**.

# TODO

- [Travis CI](https://travis-ci.org/) integração
- [Electron](https://github.com/atom/electron/) integração (na build e separado)
- [Angulartics](http://luisfarzati.github.io/angulartics/) no projeto

# License

Copyright (c) 2015 Guilherme Esteves Licensed under the MIT License.


