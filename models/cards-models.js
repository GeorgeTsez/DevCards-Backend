const { Card } = require("../db/models/cards");
const { Deck } = require("../db/models/decks");

exports.createSingleCard = async (body, deckId) => {
  return Card.create(body).then((card) => {
    return Deck.findByIdAndUpdate(deckId, { $addToSet: { cards: card._id} }).then(()=>{
        return card
    });
  });
};
