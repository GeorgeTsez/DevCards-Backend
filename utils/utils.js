const mongoose = require("mongoose");
const { seed } = require("../db/seed/seed");

const runBefore = async () => {
  await seed();
};

const runAfter = async () => {
  await mongoose.connection.close();
};

module.exports = { runBefore, runAfter };
