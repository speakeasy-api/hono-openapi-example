<div align="center">

<a href="[Speakeasy](https://speakeasyapi.dev/)">
  <img src="https://github.com/speakeasy-api/speakeasy/assets/68016351/e959f81a-b250-4003-8c5c-a45b9463fc95" alt="Speakeasy Logo" width="400">
<h2>Speakeasy Hono OpenAPI example</h2>
</a>

</div>

This example Hono app demonstrates Speakeasy-recommended practices for creating clear OpenAPI specifications and SDKs.

This project was bootstrapped with the [Hono Node.js starter template](https://hono.dev/docs/getting-started/basic#starter). It has three example API endpoints in `src/routes/users/users.index.ts`, which can be used to get all users, get a user by id, and create a user.

## Prerequisites

You need to have [Node.js version >= 18](https://nodejs.org/) installed on your system to run this project.

To generate an SDK, you'll also need to [install Speakeasy CLI](https://github.com/speakeasy-api/speakeasy#installation) or use the Speakeasy dashboard.

## Installation

Install the application on your local machine.

1. Clone the repository:

    ```bash
    git clone https://github.com/speakeasy-api/hono-openapi-example.git
    ```

2. Navigate into the directory:

    ```bash
    cd hono-openapi-example
    ```

3. Install all dependencies for the application using NPM:

    ```bash
    npm install
    ```

4. Install Speakeasy CLI:

    ```bash
    brew install speakeasy-api/homebrew-tap/speakeasy
    ```

## Running the application

Start the server:

```bash
npm run start
```

### For development

You can use the provided script to run the application in development mode. It will detect any changes in the source code and automatically restart the server.

```bash
npm run dev
```

Before starting the dev server, move the `sdk-typescript` folder to a new location outside this project.

## Creating an OpenAPI specification

Run the following command to create an OpenAPI spec YAML file in your root folder:

```bash Terminal
npm run create:openapi
```

## Creating an SDK with Speakeasy

Run the following command to create a Speakeasy SDK:

```bash
speakeasy quickstart
```

## License

This project is licensed under the terms of the Apache 2.0 license.
