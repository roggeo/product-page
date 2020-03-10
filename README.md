# Product Page

## Pre-reqs

- Install [Node.js](https://nodejs.org/en/)
- Install [Yarn](https://classic.yarnpkg.com/en/docs/install)
- Install [Mysql](https://dev.mysql.com/downloads/mysql/)

## Install

- Clone the repository
```
git clone --depth=1 https://github.com/roggeo/product-page.git <YOUR_PROJECT_NAME>
```
- Install dependencies
```
cd <YOUR_PROJECT_NAME>
yarn install
```

## Usage

- Run at `http://localhost:3000`

```
yarn run db db:create
yarn run db db:migrate
yarn run dev
```

or

```
yarn run db db:create
yarn run db db:migrate
yarn build
yarn start
```

## Test

- Run tests
```
yarn test
```

## Database Migration

- Generate model for migration

```
yarn run db model:generate --name <NameModel> --attributes <NAME:TYPE,OTHER:TYPE>
```

- Generate just a single migration

```
yarn run db migration:generate --name 0000-fix-dbcharsert
```

- Run migration (create tables on database)

```
yarn run db db:migrate
```