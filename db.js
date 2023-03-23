const mongoose = require("mongoose");

const options = { useNewUrlParser: true, useUnifiedTopology: true };

const goose = mongoose
  .connect(
    "mongodb+srv://Cluster64244:bIkmux@cluster64244.fhbnizy.mongodb.net/?retryWrites=true&w=majority",
    options
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log(err);
  });

// const userSchema = new mongoose.Schema({ name: String, age: Number });

// const User = mongoose.model("User", userSchema);

// const newUser = new User({ name: "Reem", age: 18 });

// newUser
//   .save()
//   .then((result) => {
//     // console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({name: 'Reem' }, 'name')
// .then(result => {
//   // console.log(result)
// })
// .catch(err => {
//   console.log(err)
// })

// User.insertMany([
//   { name: "Matt"},
//   { name: "Rogerio" },
//   { name: "Danny" },
//   { name: "Georgios" },
// ])
// .then(result => {
//   // console.log(result)
// })
// .catch(err => console.log(err))

// User.updateOne({name: 'Reem'}, {age: 15})
// .then(result => {
//   // console.log(result)
// })
// .catch(err => console.log(err))

// User.find()
// .then(users => console.log(users))
// .catch(err => console.log(err))

module.exports = goose;