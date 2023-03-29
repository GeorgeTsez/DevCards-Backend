const decksRouter = require("./decks-router");

const apiRouter = require("express").Router();

// BELOW ARE ROUTERS FOR LATER USE!

apiRouter.use("/decks", decksRouter);
apiRouter.use("/users", usersRouter);
// apiRouter.use("/cards", cardsRouter);

module.exports = apiRouter;
