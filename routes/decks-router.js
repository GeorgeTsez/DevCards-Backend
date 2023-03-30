const { getDecks, postSingleDeck } = require("../controllers/decks-controllers");

const decksRouter = require("express").Router();


decksRouter.route("/").get(getDecks).post(postSingleDeck);


// BELOW ARE ADDITIONAL ROUTES FOR LATER USE!


module.exports = decksRouter;
