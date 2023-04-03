const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  front: {type: String, required:[true, 'Front Card Text required']},
  back: {type: String, required:[true, 'Back Card Text required']},
});

const Card = mongoose.model("Card", cardSchema);

module.exports = { Card };
