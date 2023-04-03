const apiRouter = require("express").Router();
const decksRouter = require("./decks-router");
const usersRouter = require("./users-Router");
const cardsRouter = require("./cards-Router");
const competitionRouter = require("./competition-router");

apiRouter.use("/decks", decksRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/cards", cardsRouter);
apiRouter.use("/competition", competitionRouter);

module.exports = apiRouter;
