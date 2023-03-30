const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`,
});

if (!process.env.mongoUri) {
  throw new Error("TEST db or PRODUCTION db not set");
}

const setupDB = (URI) => {
  if (URI) return mongoose.connect(URI, options);
  return mongoose.connect(process.env.mongoUri, options);
};

module.exports = setupDB;
