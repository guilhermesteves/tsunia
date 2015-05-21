# TSUNIA

Obs: TSUNIA is an acronym for Tecnology Without An Interesting Name Yet (in portuguese: **T**ecnologia **S**em **U**m **N**ome **I**nteressante **A**inda)
 
### [Versão em Português do README](./README-PTBR.md)

[<img title="TSUNIA" src="http://i.imgur.com/txVNoNA.jpg" width="300px" alt="TSUNIA logo"/>](https://github.com/guilhermesteves/tsunia)

The objective of this project is to provide a **front-end** architecture (boilerplate) with the following technologies:

- [AngularJS](https://angularjs.org/)
- [Jade](http://jade-lang.com/)
- [SASS](http://sass-lang.com/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/)

Following [Material Design's](http://www.google.com/design/spec/material-design/introduction.html) guidelines with [Material Angular](https://material.angularjs.org/), the project is structured in a modular fashion, with its easily reusable architecture.

The documentation is integrated into the build and use [KSS](http://warpspire.com/kss/) and [JsDoc](http://usejsdoc.org/).

# Installation

You just need to clone the project

    git clone git@github.com:guilhermesteves/tsunia.git
    
Run **npm** and **bower**:

    npm install && bower install
    
Everything is ready!

# Running the project

## Endpoints

Endpoints are the urls of the backend server as the application connects. You need to rename the [endpoints-example.js](./grunt/endpoints-example.js) to **endpoints.js** and put your development, ratification and production urls. 

By default, when you run the `grunt server` task, the development url will be used and when you run`grunt build` or `grunt`, the production url will be used. To change it see the flag `--url` below.

## Grunt

This project has several ways to run via Grunt, the main tasks are:

- **Server** - Running `grunt server`
- **Build** - Running `grunt build`
- **Test** - Running `grunt test`
- **Default** - Running `grunt`

### Server

Generates a development version of your app and makes automatic reload to detect changes. The files are saved in a temporary directory and a production version is not generated.

#### Urls

This task uses by default the url set to **development** in your **endpoints.js**. If you want to use the production version pointed to the ratification or production server, simply use the following commands with the flag `--url`:

- Ratification

To run on ratification, the following flags are valid: `--url:r`, `--url:rat` e `--url:ratification`

Example: `grunt server --url:ratification`

- Production

To run on production, the following flags are valid: `--url:p`, `--url:prod` e `--url:production`

Example: `grunt server --url:production`

**OBS:** There wont be a production version and the files are in a temporary directory, this flag only changes the server url.

If you want to mount a production version, use the **Build** task or the **dist** flag.

#### Dist

There is the option to automatically generate production build along with the server every change (though not recommended), using a **dist** option. Just run `grunt server:dist`.

### Build

Generates a production version of its app, with all minified and optimized.

#### Urls

This task uses by default the url set to **production**, in your **endpoints.js**. If you want to use the production version pointed to the development or ratification server, just use the following commands with the flag `--url`:

- Development

To run on development, the following flags are valid: `--url:d`, `--url:dev` e `--url:development`

Example: `grunt build --url:development`

- Ratification

To run on ratification, the following flags are valid: `--url:r`, `--url:rat` e `--url:ratification`

Example: `grunt server --url:ratification`

**OBS:** The files wont be minified and obfuscated as the production version, this flag only changes the server url.

### Test

When running this task, all tests will be performed.

#### Watch

There is a **watch** option that monitors for changes and rerun the tests. Just run `grunt test:watch`.

### Default

This task runs the tasks **Build** and **Test**.

# TODO

- [Travis CI](https://travis-ci.org/) integration
- [Electron](https://github.com/atom/electron/) integration (in build and apart)
- [Angulartics](http://luisfarzati.github.io/angulartics/) in project

# License

Copyright (c) 2015 Guilherme Esteves Licensed under the MIT License.
