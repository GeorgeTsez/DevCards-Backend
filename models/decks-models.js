const { Deck } = require("../db/models/decks");

exports.fetchDecks = async () => {
  return Deck.find({});
};

exports.createSingleDeck = async (body) => {
  return Deck.create(body)  
}


exports.fetchCardsByDeckId = async (deckId) => {
  const deck = await Deck.findById(deckId).populate("cards");
  if (!deck) {
    throw { status: 404, msg: "Deck not found" };
  }
  return deck.cards;
};

