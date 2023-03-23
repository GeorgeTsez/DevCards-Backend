const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(
    "mongodb+srv://Cluster72529:T9xm2L7l1D8k5Ld1@cluster72529.8kzzf3d.mongodb.net/test",options
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({name: String, age: Number})
const User = mongoose.model("User",userSchema)
const newUser = new User({name:"Reem", age: 18})
newUser.save()
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})