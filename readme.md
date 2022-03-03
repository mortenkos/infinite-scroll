# Infinite Scroll
***Ongoing development, missing login page styles!***

App with infinite scrolling view - responsive.

Tech used:<br />
    1. NodeJs<br />
    2. ApolloServer<br />
    3. ReactJs<br />
    4. ApolloClient<br />
    5. GraphQl<br />
    6. PostgresSQL<br />
    7. JWT<br />
    8. Prisma<br />

## Functionality

User can't see content if not logged in.
User can create account and log in.
Logged in user email is displayed in header.
Logged in user can see 2 views: Items and contact form.

## Local setup

Clone or download repo into your computer.
First you need to run postgres on your pc and make empty db for this application.

### SERVER

cd into server

make .env file into server root folder
example .env file

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"<br />
APP_SECRET='I-Like-GraphQL'<br />
PORT=4000<br />

then:

```
npm install
npm run migrate
npm start
```

Now your server is running! And migrate file contains demo items data but not users!

### CLIENT

new terminal
cd into client folder

```
npm install
npm start
```

that should be it and your app is running

## DB Creation and Migrations

If you modify prisma schema then you need to run:

```
npx prisma migrate dev --name nameYourMigration
```
