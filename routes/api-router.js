const apiRouter = require("express").Router();
const decksRouter = require("./decks-router");
const usersRouter = require("./users-Router");
const cardsRouter = require("./cards-Router");

apiRouter.use("/decks", decksRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/cards", cardsRouter);

module.exports = apiRouter;
