const mongoose = require("mongoose");

const deckSchema = new mongoose.Schema({
  title: String,
  description: String,
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
});

const Deck = mongoose.model("Deck", deckSchema);

module.exports = { Deck };
