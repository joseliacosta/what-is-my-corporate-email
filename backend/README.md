# Backend

## Requirements

- Node v14

## How to install

```
npm install

```

## Running the application

As it is a fullstack application, you can also see the result of the APIs on the frontend application, so it's necessary toinitialize the it to have a better experience.

```
cd ../frontend
npm install OR yarn install
npm run dev OR yarn dev
```

You can also check all server scripts on frontend directory

After running the frontend, you can run the backend!

```
cd ../backend
npm run dev
```

## Running the tests

```
npm run test
```

## How to consume this API

`GET /domains` - retrieve all company domains knew by server data

```json

{
    data: string[]
}
```

`POST /email` - given a full name and company domain, returns a email based on company pattern

### Payload:

```json
{
    "fullName": string
    "companyDomain": string
}
```

## What to expect from this project?

This project is a restart of a frontend person who also likes javascript in the server.
However, this was a 4 hours project, so, using [TDD](https://en.wikipedia.org/wiki/Test-driven_development) mostly to create this code, some refactors can still be done!

However, you can have things like:

- Express
- controler>service>repository pattern to organize the files and the responsabilities
- CORS, otherwise the frontend cannot access it, once the front application runs in a different port
- Unit and integration tests: the main part of the domain is covered by automated tests

## Next steps

Check the [backlog board](https://github.com/users/joseliacosta/projects/1/views/1) on Projects tab
