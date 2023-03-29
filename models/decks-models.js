const db = require("../db/connection");
const { Deck } = require("../db/models/decks");

exports.fetchDecks = async () => {
  return await Deck.find({}).then((decks) => {
    return decks;
  });
};
