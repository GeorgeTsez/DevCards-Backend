const connection = require("../db/connection");
const { Deck } = require("../db/models/decks");
const mongoose = require("mongoose");

exports.fetchDecks = () => {
  return connection().then(() => {
    return Deck.find({}).then((decks) => {
      mongoose.connection.close();
      return decks;
    });
  });
};
