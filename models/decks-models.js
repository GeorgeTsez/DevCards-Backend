const db = require("../db/connection");
const { Deck } = require("../db/models/decks");

exports.fetchDecks = () => {
  db.then(() => {
    return Deck.find({}).then((decks) => {
      return decks;
    });
  });
};
