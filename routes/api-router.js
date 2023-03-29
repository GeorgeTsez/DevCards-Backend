const decksRouter = require("./decks-router");

const apiRouter = require("express").Router();

// BELOW ARE ROUTERS FOR LATER USE!

apiRouter.use("/decks", decksRouter);
// apiRouter.use("/cards", cardsRouter);
// apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
