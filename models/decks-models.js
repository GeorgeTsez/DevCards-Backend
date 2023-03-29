const db = require("../db/connection");
const { Deck } = require("../db/models/decks");

exports.fetchDecks = () => {
  return Deck.find({}).then((decks) => {
    return decks;
  });
};
