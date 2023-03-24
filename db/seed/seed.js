const connection = require("../../connection");
const mongoose = require("mongoose");
const testdata = require("../data/testdata/testcards.json");

connection
  .then(() => {
    const cardSchema = new mongoose.Schema({ front: String, back: String });
    const Card = mongoose.model("Card", cardSchema);
    Card.insertMany(testdata)
      .then((res) => {
        console.log(res);
        mongoose.connection.close();
      })
      .catch((err) => {
        console.log(err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.log(err);
  });

// never gonna give you up , never gonna let you down
// never gonna run around or dessert you!!!!!!
