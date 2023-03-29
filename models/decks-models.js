const { Deck } = require("../db/models/decks");

exports.fetchDecks = async () => {
  return Deck.find({});
};
