const {
  getDecks,
  getCardsByDeckId,
  postSingleDeck,
  patchSingleDeck,
  patchSingleDeckForUserPercent,
} = require("../controllers/decks-controllers");

const decksRouter = require("express").Router();

decksRouter.route("/").get(getDecks);

decksRouter.route("/:deck_id").patch(patchSingleDeck);

decksRouter
  .route("/:deck_id/user-percent")
  .patch(patchSingleDeckForUserPercent);

decksRouter.route("/:user_id").post(postSingleDeck);

decksRouter.route("/:deck_id/cards").get(getCardsByDeckId);

module.exports = decksRouter;
