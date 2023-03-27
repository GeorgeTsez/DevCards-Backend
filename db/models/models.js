const mongoose = require('mongoose');
const schemas = require("../schemas/schemas")

const models = {}

schemas.then(([cardSchema, deckSchema, userSchema]) => {
    Promise.all([
        mongoose.model("Card", cardSchema),
        mongoose.model("Deck", deckSchema),
        mongoose.model("User", userSchema)
    ]).then(([card, deck, user]) => {
        models.Card = card;
        models.Deck = deck;
        models.User = user;
    })
})


module.exports = models;