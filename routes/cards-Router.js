const { postSingleCard } = require("../controllers/cards-controller")

const cardsRouter = require("express").Router();

cardsRouter.route("/:deck_id").post(postSingleCard);



module.exports = cardsRouter