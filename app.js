const express = require("express");
// Make sure all schemas are initialised before loading routes
require("./db/models/decks");
require("./db/models/cards");
require("./db/models/users");
const {
  handle404Paths,
  handle500Errors,
  handle400Errors,
} = require("./controllers/error-handling-controllers");
const setupDB = require("./db/connection");

const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

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

server.listen(3000, () => {
  console.log("listening on *:3000");
});

module.exports = { app, init, io };
