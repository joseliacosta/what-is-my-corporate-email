# Frontend

## Requirements

- Node v14

## How to install

```
npm install
OR
yarn install
```

## Running the application

As it is a fullstack application, you also need to initialize the server to have a better experience.

```
cd ../backend
npm install
npm run dev
```

You can also check all server scripts on backend directory

After running the backend, you can run the frontend!

```
cd ../frontend
npm run dev
```

## Running the tests

```
npm run test
```

## What to expect from this project?

This project is still an MVP [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product), so there's a room for improvements, still.

However, you can have things like:

- Browser native validations, to prevent sending wrong data to the server;
- HTTP errors handling: not ideal but having the react native error pop-up is very sad. So, the current status of this frontend tries to at least show a friendly error if the server is down.
- Unit and integration tests: the main part of the main flow are covered by automated tests
- [useSWR](https://swr.vercel.app/) to fetch data: to have a more reactive way to show what happened after call the API, SWR is really useful and clean using it. On projects it's also available the next steps to scale this implementation.

## Next steps

Check the [backlog board](https://github.com/users/joseliacosta/projects/1/views/1) on Projects tab
