const { deleteCardById } = require("../controllers/cards-controller");

const cardsRouter = require("express").Router();

cardsRouter.route("/:card_id").delete(deleteCardById);

module.exports = cardsRouter;
