const { fetchDecks, createSingleDeck } = require("../models/decks-models");

exports.getDecks = (req, res, next) => {
  fetchDecks()
    .then((decks) => {
      res.status(200).send({ decks });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postSingleDeck = (req, res, next) => {
  const {body} = req
  createSingleDeck(body)

    .then((createdDeck) => {
      res.status(201).send({ createdDeck });
    })
    .catch((err) => {
      console.log(err)
      next(err);
    });
};