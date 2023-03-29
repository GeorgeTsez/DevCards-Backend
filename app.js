const express = require("express");
const {
  handle404Paths,
  handle500Errors,
} = require("./controllers/error-handling-controllers");
const app = express();
app.use(express.json());
const options = { useNewUrlParser: true, useUnifiedTopology: true };

//do we need cors??

const apiRouter = require("./routes/api-router");

app.use("/api", apiRouter);

app.use(handle404Paths);
app.use(handle500Errors);

module.exports = app;
