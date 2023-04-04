const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  front: String,
  back: String,
});

const Card = mongoose.model("Card", cardSchema);

module.exports = { Card };
