const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  front: String,
  back: String,
});

const Card = mongoose.model("Card", cardSchema);

module.exports = { Card };
