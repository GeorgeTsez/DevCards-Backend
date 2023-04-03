const mongoose = require("mongoose");
const seed = require("../db/seed/seed");
const { MongoMemoryServer } = require("mongodb-memory-server");
const setupDB = require("../db/connection");

let mongo;

const runBefore = async () => {
  mongo = await MongoMemoryServer.create();
  await setupDB(mongo.getUri());
};

const runBeforeEachTest = async () => {
  await mongoose.connection.dropDatabase();
  await seed();
}

const runAfter = async () => {
  await mongoose.disconnect();
  await mongo.stop();
};

const modelValidator = (Model, data) => {
  const check = new Model(data)
  const err = check.validateSync();
  if (err) {
    return false
  } else {
    return true
  }
}

module.exports = { runBefore, runAfter, runBeforeEachTest, modelValidator };
