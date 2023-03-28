const mongoose = require("mongoose");
const { seedDecks } = require("./decks");

const seed = () => {
  return seedDecks()
    .then((res) => {
      console.log(res, "seed completed");
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = seed;
