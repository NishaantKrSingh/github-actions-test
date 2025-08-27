# GitHub Actions Demo

This is a simple Node.js application created to demonstrate a basic GitHub Actions workflow. You can find the full tutorial [here](https://gradus.dev/labs/automating-ci-with-github-actions-8IRt6j).

## Application

The application is a simple "Hello World" app using the Express framework. It has a single endpoint, `/hello`, which returns a JSON object with the message "Hello World!".

To run the application:

```bash
npm install
npm start
```

The server will start on port 3000.

## Testing

The project uses `vitest` and `supertest` for testing. To run the tests:

```bash
npm test
```

## GitHub Actions Workflow

The `.github/workflows/ci.yaml` file defines a simple CI workflow that runs on every push and pull request to the `main` branch.

The workflow has a single job, `test`, which does the following:

1.  Checks out the repository.
2.  Sets up Node.js version 20.
3.  Installs the project dependencies.
4.  Runs the tests.
5.  Sends a Discord notification on success.
