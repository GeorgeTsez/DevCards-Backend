const { Card } = require("../db/models/cards")

exports.createSingleCard = async (body) => {
  console.log("made it to models")
    return  Card.create(body)
    
  };