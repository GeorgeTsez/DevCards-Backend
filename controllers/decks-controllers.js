const { fetchDecks } = require("../models/decks-models");

exports.getDecks = (req, res, next) => {
  fetchDecks()
    .then((decks) => {
      res.status(200).send({ decks });
    })
    .catch((err) => {
      next(err);
    });
};
