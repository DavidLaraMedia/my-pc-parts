<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

MYPCPARTS está diseñada para proporcionar a los usuarios estimaciones de precios para piezas de computadoras, basadas en reportes generados por la comunidad de usuarios registrados. Los usuarios pueden enviar reportes sobre los precios y la ubicacion de componentes de hardware, contribuyendo así a una base de datos compartida.

## Endpoints API
Registro de Usuario:
Método: POST
Endpoint: /auth/signup

Inicio de Sesión:
Método: POST
Endpoint: /auth/signin

Enviar Reporte:
Método: POST
Endpoint: /reports

Registro de Usuario:
Método: POST
Endpoint: /auth/signup
Cuerpo de Solicitud:
{
    "email": "user@mypcparts.com",
    "password": "user123"
}

Inicio de Sesión:
Método: POST
Endpoint: /auth/signin
Cuerpo de Solicitud:
{
    "email": "user@mypcparts.com",
    "password": "sjdfsgsg"
}

Cerrar Sesión:
Método: POST
Endpoint: /auth/signout
Cuerpo de Solicitud:
{
    "email": "user@mypcparts.com",
    "password": "sjdfsgsg"
}

Obtener Usuario por ID:
Método: GET
Endpoint: /auth/:userId

Obtener Usuario por Email:
Método: GET
Endpoint: /auth?email=user@mypcparts.com

Eliminar Usuario por ID:
Método: DELETE
Endpoint: /auth/:userId

Actualizar Usuario:
Método: PATCH
Endpoint: /auth/:userId
Cuerpo de Solicitud:
{
    "email": "user@mypcparts.com"
}

Enviar Reporte:
Método: POST
Endpoint: /reports
Cuerpo de Solicitud:
{
    "type": "Procesador",
    "make": "Intel",
    "model": "12400k",
    "lng": 50,
    "lat": 90,
    "price": 70
}

Aprobar Informe:
Método: PATCH
Endpoint: /reports/:reportId
Cuerpo de Solicitud:
{
    "approved": true
}

Estimación de Parte:
Método: GET
Endpoint: /reports?type=Procesador&make=Intel&model=12400k&lng=50&lat=90


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
