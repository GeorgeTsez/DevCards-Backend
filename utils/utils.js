const mongoose = require("mongoose");
const seed = require("../db/seed/seed");
const { MongoMemoryServer } = require("mongodb-memory-server");
const setupDB = require("../db/connection");

let mongo;

const runBefore = async () => {
  mongo = await MongoMemoryServer.create();
  await setupDB(mongo.getUri());
};

const runAfter = async () => {
  await mongoose.disconnect();
  await mongo.stop();
};

const runBeforeEachTest = async () => {
  await mongoose.connection.db.dropDatabase()
  await seed()
}

module.exports = { runBefore, runAfter, runBeforeEachTest };
