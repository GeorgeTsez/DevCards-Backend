const {
  getDecks,
  getCardsByDeckId,
  postSingleDeck,
} = require("../controllers/decks-controllers");

const decksRouter = require("express").Router();

decksRouter.route("/").get(getDecks);

decksRouter.route("/:user_id").post(postSingleDeck);

decksRouter.route("/:deck_id/cards").get(getCardsByDeckId);

module.exports = decksRouter;
