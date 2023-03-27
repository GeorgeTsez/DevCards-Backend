const mongoose = require('mongoose');
const {cardSchema, deckSchema, userSchema} = require("../schemas/schemas")

const Card = mongoose.model("Card", cardSchema);
const Deck = mongoose.model("Deck", deckSchema);
const User = mongoose.model("User", userSchema);

module.exports = {Card, Deck, User};