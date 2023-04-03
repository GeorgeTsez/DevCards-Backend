const { Card } = require("../db/models/cards");
const { Deck } = require("../db/models/decks");
const { modelValidator } = require("../utils/model-validator");

exports.createSingleCard = async (body, deckId) => {
  return Card.create(body).then((card) => {
    return Deck.findByIdAndUpdate(deckId, {
      $addToSet: { cards: card._id },
    }).then(() => {
      return card;
    });
  });
};

exports.removeCardById = async (card_id) => {
  await Card.findByIdAndRemove(card_id);
  await Deck.updateMany({ cards: card_id }, { $pull: { cards: card_id } });
};

exports.createSingleCard = async (body) => {
  return Card.create(body);
};

exports.updateSingleCard = async (body, card_id) => {
  if (modelValidator(Card, body)) {
    return Card.findByIdAndUpdate(
      card_id,
      { $set: body },
      { returnDocument: "after" }
    ).then((updatedCard) => {
      return updatedCard;
    });
  } else {
    throw { status: 400, msg: "Invalid Card Format" };
  }
};
