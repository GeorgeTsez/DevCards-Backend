const { Deck } = require("../db/models/decks");

exports.fetchDecks = async () => {
  return Deck.find({});
};

exports.fetchCardsByDeckId = async (deckId) => {
  const deck = await Deck.findById(deckId)
  if (!deck) {
    throw { status: 404, msg: "Deck not found" };
  }
  return deck.cards;
};