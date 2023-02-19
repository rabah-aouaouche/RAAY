require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./User");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(
    "mongodb+srv://rabehaou:3ORXtOFw7js33R0B@cluster0.cbrwp0i.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(3000, () => {
      console.log(`Server Started at ${3000}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

run();
async function run() {
  try {
    const user = await User.create({
      name: "rania",
      age: "26",
    });

    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
