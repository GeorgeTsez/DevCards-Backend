const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const options = { useNewUrlParser: true, useUnifiedTopology: true };

//do we need cors??

const apiRouter = require("./routes/api-router");

app.use("/api", apiRouter);

module.exports = app;
