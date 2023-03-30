const { getDecks, postSingleDeck } = require("../controllers/decks-controllers");
const {
  getDecks,
  getCardsByDeckId,
} = require("../controllers/decks-controllers");

const decksRouter = require("express").Router();

decksRouter.route("/").get(getDecks).post(postSingleDeck);

decksRouter.route("/:deck_id/cards").get(getCardsByDeckId)

module.exports = decksRouter;
