const { createSingleCard, removeCardById, updateSingleCard } = require("../models/cards-models");

exports.postSingleCard = (req, res, next) => {
  const { body } = req;
  const deckId = req.params.deck_id;
  createSingleCard(body, deckId)
    .then((createdCard) => {
      res.status(201).send({ createdCard });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteCardById = (req, res, next) => {
  const { card_id } = req.params;
  removeCardById(card_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      next(err);
    });
};

exports.patchSingleCard = (req, res, next) => {
    const { body } = req
    const cardId = req.params.card_id
    updateSingleCard(body, cardId)
      .then((updatedCard) => {
        res.status(200).send({ updatedCard });
      })
      .catch((err) => {
        next(err);
      });
  };
