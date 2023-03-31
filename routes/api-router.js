const decksRouter = require("./decks-router");
const usersRouter = require("./users-Router")
const apiRouter = require("express").Router();
const cardsRouter= require("./cards-Router")

// BELOW ARE ROUTERS FOR LATER USE!
apiRouter.use("/decks", decksRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/cards", cardsRouter);

module.exports = apiRouter;
