const mongoose = require("mongoose");
const seed = require("../db/seed/seed");
const connection = require("../db/connection");

const runBefore = () => {
 return connection().then(() => {
    return mongoose.connection.db.dropDatabase().then(() => {
      return seed();
    });
  });
};

const runAfter = () => {
  return mongoose.connection.close();
};

module.exports = { runBefore, runAfter };
