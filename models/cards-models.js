const { Card } = require("../db/models/cards")

exports.createSingleCard = async (body) => {
    return  Card.create(body)
    
  };