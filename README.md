# deno-calculator-api

A calculator API, with basic arithmetic operators. Built entirely with Deno's
built in HTTP server and standard library.

# Getting started

This covers:

- Running the Server locally
- Running the Unit Tests

## Running the Server

It's as simple as 2 steps!

- Install the required dependencies by running `deno install`.

- Run the Dev Server by running the following command:

```bash
deno task dev
```

## Creating your first request

Using web `fetch` API, run the following code in your favourite runtime. This
example is using Deno, as the API and it's tests are also using it.

```ts
const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // replace x and y with your desired values
    body: JSON.stringify({ x: 10, y: 20 }),
};

let request = await fetch("http://localhost:8000/api/multiply", options);
let result = await request.text();

// => 200 as x * y; where x = 10 and y = 20
console.log(response);
```

# Running the tests

Simply run `deno task test`. For CI, this uses the default Deno GitHub Action.
