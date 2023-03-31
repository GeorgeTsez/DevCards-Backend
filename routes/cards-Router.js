const { postSingleCard } = require("../controllers/cards-controller")

const cardsRouter = require("express").Router();

cardsRouter.route("/").post(postSingleCard);



module.exports = cardsRouter