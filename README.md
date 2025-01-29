<div align="center">
 <a href="https://www.speakeasy.com/" target="_blank">
   <picture>
       <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/21dd5d3a-aefc-4cd3-abee-5e17ef1d4dad">
       <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/0a747f98-d228-462d-9964-fd87bf93adc5">
       <img width="100px" src="https://github.com/user-attachments/assets/21dd5d3a-aefc-4cd3-abee-5e17ef1d4dad#gh-light-mode-only" alt="Speakeasy">
   </picture>
 </a>
  <h1>Speakeasy</h1>
  <p>Build APIs your users love ❤️ with Speakeasy</p>
  <div>
   <a href="https://speakeasy.com/docs/create-client-sdks/" target="_blank"><b>Docs quickstart</b></a>&nbsp;&nbsp;//&nbsp;&nbsp;<a href="https://join.slack.com/t/speakeasy-dev/shared_invite/zt-1cwb3flxz-lS5SyZxAsF_3NOq5xc8Cjw" target="_blank"><b>Join us on Slack</b></a>
  </div>
 <br />

</div>
<hr />

<h2>Speakeasy Hono OpenAPI example</h2>

This example Hono app demonstrates the Speakeasy-recommended practices for creating clear OpenAPI documents and SDKs.

This project was bootstrapped with the [Hono Node.js starter template](https://hono.dev/docs/getting-started/basic#starter). It has three example API endpoints in `src/routes/users/users.index.ts`, which can be used to get all users, to get a user by ID, and to create a user.

## Prerequisites

You need to have [Node.js version >= 18](https://nodejs.org/) installed on your system to run this project.

To generate an SDK, you'll also need to [install the Speakeasy CLI](https://github.com/speakeasy-api/speakeasy#installation) or use the Speakeasy dashboard.

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

3. Install all the dependencies for the application using npm:

    ```bash
    npm install
    ```

4. Install the Speakeasy CLI:

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

Before starting the dev server, move the `sdk-typescript` folder to a new location outside of this project.

## Generating an OpenAPI document

Run the following command to generate an OpenAPI document in the form of a YAML file in your root folder:

```bash Terminal
npm run create:openapi
```

## Generating an SDK with Speakeasy

Run the following command to generate a Speakeasy SDK:

```bash
speakeasy quickstart
```

## License

This project is licensed under the terms of the Apache 2.0 license.
