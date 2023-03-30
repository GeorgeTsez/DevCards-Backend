const { Deck } = require("../db/models/decks");

exports.fetchDecks = async () => {
  return Deck.find({});
};

exports.createSingleDeck = async (body) => {
  
  return  Deck.create({title: "Any Deck",
  description: "Trying to be Created"})
  
}

exports.fetchCardsByDeckId = async (deckId) => {
  const deck = await Deck.findById(deckId)
  if (!deck) {
    throw { status: 404, msg: "Deck not found" };
  }
  return deck.cards;
};
