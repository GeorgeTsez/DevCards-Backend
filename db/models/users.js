const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  email: String,
  user_decks: Object,
});

const User = mongoose.model("UserModel", userSchema);

module.exports = { User };
