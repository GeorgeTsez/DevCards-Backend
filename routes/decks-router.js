const {
  getDecks,
  getCardsByDeckId,
} = require("../controllers/decks-controllers");

const decksRouter = require("express").Router();

decksRouter.route("/").get(getDecks);

// BELOW ARE ADDITIONAL ROUTES FOR LATER USE!

decksRouter.route("/:deck_id/cards").get(getCardsByDeckId)

module.exports = decksRouter;
