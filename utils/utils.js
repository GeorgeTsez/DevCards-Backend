const mongoose = require("mongoose");
const seed = require("../db/seed/seed");
const { MongoMemoryServer } = require("mongodb-memory-server");
const setupDB = require("../db/connection");

let mongo;

const runBefore = async () => {
  mongo = await MongoMemoryServer.create();
  // console.log(await mongo.getUri());
  await setupDB(mongo.getUri());
  await seed();
  console.log("Seed function completed successfully");
};

const runAfter = async () => {
  // add this to stop the terminal from hanging
  await mongoose.disconnect();
  await mongo.stop();
};

module.exports = { runBefore, runAfter };
