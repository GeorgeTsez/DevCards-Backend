// const { Card, Deck, User } = require("../models/models");
const connection = require("../connection");
const mongoose = require("mongoose");
// const testData = require("../data/testdata");
const { seedDecks } = require("./decks");
const { seedCards } = require("./cards");

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

const seed = () => {
  // await connection
  // console.log("Connection Succesfull");
  // await seedDecks().then((res) => {
  //   console.log(res);
  // });
  // await mongoose.connection.close()

  return Promise.all([seedDecks(), seedCards()])
    .then((res) => {
      console.log(res, "seed completed");
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = seed;
