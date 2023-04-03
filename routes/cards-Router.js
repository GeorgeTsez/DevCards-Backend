const {
  postSingleCard,
  deleteCardById,
} = require("../controllers/cards-controller");

const cardsRouter = require("express").Router();

cardsRouter.route("/:deck_id").post(postSingleCard);

cardsRouter.route("/:card_id").delete(deleteCardById);

module.exports = cardsRouter;
