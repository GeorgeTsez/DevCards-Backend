const mongoose = require("mongoose");
const seed = require("./seed");
const connection = require("../connection");

const runSeed = () => {
  return connection()
    .then(() => {
      return seed()
        .then(() => {
          return mongoose.connection.close();
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

runSeed();
