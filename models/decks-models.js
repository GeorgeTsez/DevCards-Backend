const connection = require("../db/connection");
const { Deck } = require("../db/models/decks");

exports.fetchDecks = () => {
  connection();
  return Deck.find({}).then((decks) => {
    return decks;
  });
};
