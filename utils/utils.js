const mongoose = require("mongoose");
const seed = require("../db/seed/seed");
const { MongoMemoryServer } = require("mongodb-memory-server");
const setupDB = require("../db/connection");

let mongo;

const runBefore = async () => {
  mongo = await MongoMemoryServer.create();
  console.log(await mongo.getUri());
  await setupDB(mongo.getUri());
  await seed();
};

const runAfter = async () => {
  mongoose.connection.close()
  await mongo.stop();
};

module.exports = { runBefore, runAfter };
