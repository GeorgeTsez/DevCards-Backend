const {
  fetchDecks,
  createSingleDeck,
  fetchCardsByDeckId,
} = require("../models/decks-models");

exports.getDecks = (req, res, next) => {
  fetchDecks()
    .then((decks) => {
      res.status(200).send({ decks });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getCardsByDeckId = (req, res, next) => {
  const { deck_id } = req.params;
  fetchCardsByDeckId(deck_id)
    .then((cards) => {
      res.status(200).send({ cards });
    })
    .catch((err) => {
      next(err);
    });
};
exports.postSingleDeck = (req, res, next) => {
  const { user_id } = req.params;
  const { body } = req;
  createSingleDeck(body, user_id)
    .then((createdDeck) => {
      res.status(201).send({ createdDeck });
    })
    .catch((err) => {
      next(err);
    });
};
