// const { Card, Deck, User } = require("../models/models");
const connection = require("../connection");
const mongoose = require("mongoose");
// const testData = require("../data/testdata");
const { seedDecks } = require("./decks");

// const seed = async () => {

//   await connection
//   return Promise.all([seedDecks()])
//     .then(() => {
//       console.log("Seed Completed!");
//     })

//     .catch((err) => {
//       console.log(err);
//     });
// };

const seed = async () => {
  await connection;
  console.log("Connection Succesfull");
  await seedDecks();
  await mongoose.connection.close();
};

module.exports = seed;
