const { Card } = require("../db/models/cards");
const { Deck } = require("../db/models/decks");

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
