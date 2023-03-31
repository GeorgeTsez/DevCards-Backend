const { Card } = require("../db/models/cards");
const { Deck } = require("../db/models/decks");

exports.removeCardById = async (card_id) => {
  await Card.findByIdAndRemove(card_id);
  await Deck.updateMany({ cards: card_id }, { $pull: { cards: card_id } });
};
