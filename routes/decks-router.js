const {
  getDecks,
  getCardsByDeckId,
  postSingleDeck,
  patchSingleDeck,
} = require("../controllers/decks-controllers");

const decksRouter = require("express").Router();

decksRouter.route("/").get(getDecks);

decksRouter.route("/:deck_id").patch(patchSingleDeck);

decksRouter.route("/:user_id").post(postSingleDeck);

decksRouter.route("/:deck_id/cards").get(getCardsByDeckId);

module.exports = decksRouter;
