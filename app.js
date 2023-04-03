const express = require("express");
// Make sure all schemas are initialised before loading routes
require("./db/models/decks");
require("./db/models/cards");
require("./db/models/users");
const {
  handle404Paths,
  handle500Errors,
  handle400Errors
} = require("./controllers/error-handling-controllers");
const setupDB = require("./db/connection");

const app = express();
app.use(express.json());

const init = () => {
  setupDB()
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
};

const apiRouter = require("./routes/api-router");

app.use("/api", apiRouter);

app.use(handle400Errors);
app.use(handle404Paths);
app.use(handle500Errors);

module.exports = { app, init };
