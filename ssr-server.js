const express = require("express");
const next = require("next");

const isDevEnv = process.env.NODE_ENV !== "production";
const app = next({ isDevEnv });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/", (req, res) => {
      app.render(req, res, "/");
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(63070, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:63070");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
