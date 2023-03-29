const { getDecks } = require("../controllers/decks-controllers");

const decksRouter = require("express").Router();

decksRouter.route("/").get(getDecks);

// BELOW ARE ADDITIONAL ROUTES FOR LATER USE!

// decksRouter.route("/:decks_id").get(getDecksById).patch(patchDeck)

module.exports = decksRouter;
