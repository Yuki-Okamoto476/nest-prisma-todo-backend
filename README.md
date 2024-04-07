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

## dockerの起動
```
docker compose up -d
```

## DBの起動
```
docker exec -it postgres psql -U prisma_todo_user prismadb
```

## prisma migrate
```
npx prisma migrate dev --name ${任意の名前}
```

## prisma studioの起動
```
npx prisma studio
```
