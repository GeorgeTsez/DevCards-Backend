const mongoose = require("mongoose");
const seed = require("../db/seed/seed");
const connection = require("../db/connection");

const runBefore = async () => {
  await connection;
  console.log(mongoose.connection.readyState);
  await mongoose.connection.once("open", async () => {
    console.log("after connection.once");
    await mongoose.connection.db.dropDatabase();
    await seed();
  });
};

const runAfter = async () => {
  await mongoose.connection.close();
};

module.exports = { runBefore, runAfter };
