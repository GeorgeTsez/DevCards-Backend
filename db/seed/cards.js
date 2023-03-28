const { Card } = require("../models/cards");

const cards = [
  {
    _id: "57725bdf60e7284b66fb3466",
    front: "What is the difference between let and var in JavaScript?",
    back: "The main difference between let and var is that let has block scope, which means it is only accessible within the block it was declared in, while var has function scope and can be accessed throughout the function it was declared in.",
  },
  {
    _id: "e9b5443b704d23390e1da999",
    front: "What is the purpose of the 'use strict' directive in JavaScript?",
    back: "The 'use strict' directive enables strict mode, which enforces stricter parsing and error handling rules in JavaScript, making it easier to write secure and reliable code.",
  },
  {
    _id: "6147ff219369a989c0f71235",
    front: "What is a closure in JavaScript?",
    back: "A closure is a function that has access to variables in its outer (enclosing) function's scope chain, even after the outer function has returned.",
  },
  {
    _id: "4f8f32d5b789dfdc929b9eba",
    front: "What is the difference between == and === in JavaScript?",
    back: "The == operator compares values for equality after converting both operands to a common type, while the === operator compares values for equality without type conversion (strict equality).",
  },
  {
    _id: "f9f821dbd3ae0e3e35ac9b08",
    front: "What is the difference between null and undefined in JavaScript?",
    back: "null is an assignment value that represents no value or no object, while undefined is a variable that has been declared but has not been assigned a value.",
  },
  {
    _id: "5bafd044562ab6c1655ffce5",
    front: "What is an IIFE in JavaScript?",
    back: "An IIFE (Immediately Invoked Function Expression) is a function that is executed as soon as it is defined, typically used to encapsulate and isolate code.",
  },
  {
    _id: "ee2cdcf4b669c8091b62cbf2",
    front: "What is the difference between call and apply in JavaScript?",
    back: "Both call and apply are used to invoke a function with a specific value of this, but call accepts arguments as a comma-separated list, while apply accepts arguments as an array.",
  },
  {
    _id: "bb629a91e12cb3ddc656193c",
    front: "What is the purpose of the bind method in JavaScript?",
    back: "The bind method is used to create a new function with a specific value of this, allowing for more flexible function invocation.",
  },
];

const seedCards = () => {
  return Card.insertMany(cards);
};

module.exports = { seedCards };
