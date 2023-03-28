const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const ENV = process.env.NODE_ENV || "production";

require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`,
});

if (!process.env.TEST && !process.env.PRODUCTION) {
  throw new Error("TEST db or PRODUCTION db not set");
}

let dbURI;
if (ENV === "test") {
  dbURI = process.env.TEST;
}
if (ENV === "production") {
  dbURI = process.env.PRODUCTION;
}

const connection = mongoose.connect(dbURI, options).then((connect) => {
  console.log(connect);
});

console.log(mongoose.connection.readyState);
module.exports = connection;
