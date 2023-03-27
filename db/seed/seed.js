const connection = require("../../connection");
const mongoose = require("mongoose");
const testCards = require("../data/testdata/testcards.json");
const testdecks = require("../data/testdata/testdecks.json");
const testUsers = require("../data/testdata/testUsers.json")

connection
  .then(() => {
    const cardSchema = new mongoose.Schema({ front: String, back: String });
    const deckSchema = new mongoose.Schema({
      title: String,
      description: String,
      cards: Object,
    })
    const userSchema = new mongoose.Schema({username: String, email: String, user_decks: Object});
    const Card = mongoose.model("Card", cardSchema);
    const Deck = mongoose.model("Deck", deckSchema);
    const User = mongoose.model("User", userSchema)
    Promise.all([Card.insertMany(testCards), Deck.insertMany(testdecks), User.insertMany(testUsers)])
      .then(([cardsFromDb, decksFromDb, usersFromDb]) => {
        Promise.all([
          ...cardsFromDb.map((card, index) => {
            if (index < 7)
              return Deck.updateOne(
                { _id: decksFromDb[0]._id },
                { $addToSet: { cards: card._id } }
              );
            if (index === 7)
              return Deck.updateOne(
                { _id: decksFromDb[1]._id },
                { $addToSet: { cards: card._id } }
              );
            if (index === 8)
              return Deck.updateOne(
                { _id: decksFromDb[3]._id },
                { $addToSet: { cards: card._id } }
              );
            if (index > 8)
              return Deck.updateOne(
                { _id: decksFromDb[4]._id },
                { $addToSet: { cards: card._id } }
              );
          }), User.insertOne({_id: usersFromDb[0]})
        ]).then((resp) => {
          console.log(resp);
          mongoose.connection.close();
        });
      })
      .catch((err) => {
        console.log(err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.log(err);
  });
