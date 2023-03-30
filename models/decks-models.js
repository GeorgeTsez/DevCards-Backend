const { Deck } = require("../db/models/decks");

exports.fetchDecks = async () => {
  return Deck.find({});
};


exports.createSingleDeck = async (body) => {
  
  return  Deck.create({title: "Any Deck",
  description: "Trying to be Created"})
  
}