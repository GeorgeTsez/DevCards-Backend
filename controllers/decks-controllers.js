<<<<<<< HEAD
const { fetchDecks, createSingleDeck } = require("../models/decks-models");
=======
const { fetchDecks, fetchCardsByDeckId } = require("../models/decks-models");
>>>>>>> 53ac856 (incomplete, will return)

exports.getDecks = (req, res, next) => {
  fetchDecks()
    .then((decks) => {
      res.status(200).send({ decks });
    })
    .catch((err) => {
      next(err);
    });
};

<<<<<<< HEAD
exports.postSingleDeck = (req, res, next) => {
  const {body} = req
  createSingleDeck(body)

    .then((createdDeck) => {
      res.status(201).send({ createdDeck });
    })
    .catch((err) => {
      console.log(err)
=======
exports.getCardsByDeckId = (req, res, next) => {
  const { deck_id } = req.params;
  fetchCardsByDeckId(deck_id)
    .then((cards) => {
      res.status(200).send({ cards });
    })
    .catch((err) => {
>>>>>>> 53ac856 (incomplete, will return)
      next(err);
    });
};