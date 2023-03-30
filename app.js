const express = require("express");
const {
  handle404Paths,
  handle500Errors,
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

app.use(handle404Paths);
app.use(handle500Errors);

module.exports = { app, init };
