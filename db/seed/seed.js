const mongoose = require("mongoose");
const { seedDecks } = require("./decks");
const { seedCards } = require("./cards");
const { seedUsers } = require("./users");

const seed = () => {
  return Promise.all([seedDecks(), seedCards(), seedUsers()])
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
};

module.exports = seed;
