
## Description

Lottery app - implemented with nodejs (nestjs) and React (with styled-components and material-ui)

##Design
Lottery Design.png (root directory)

## Installation

```bash
$ npm install && npm run install:client && npm run build:client
```

## Running the app

```bash
* The app is served on 8080

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Vulnerabilities

* The app should have an authentication & authorization mechanism, each client should be able to view only is tickets.
* The authentication token should be refreshed from time to time, the client will ask for a new token in case it's invalid - in case it's expired he will redirect to the login page again.
* On validate ticket, we should check if it's related to the connected client.
* The api should have Rate limit, it will prevent attackers who trying to shut down the system.
* The api should have some captcha mechanize, it will prevent bots to try log-in in the name of another user, event if the rate of the request is valid.

