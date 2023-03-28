const mongoose = require("mongoose");

const deckSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  cards: Object,
});

const Deck = mongoose.model("Deck", deckSchema);

module.exports = { Deck };
