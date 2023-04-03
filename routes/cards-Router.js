
const {
  postSingleCard,
  deleteCardById,
  patchSingleCard
} = require("../controllers/cards-controller");

const cardsRouter = require("express").Router();

cardsRouter.route("/:deck_id").post(postSingleCard);

cardsRouter.route("/:card_id").delete(deleteCardById).patch(patchSingleCard);

module.exports = cardsRouter;
