// Starting pont for the application
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const details = req.body
// create an instance of the User model
const user = new User(details);

try {
  await user.save();
res.status(201).send({message: "User signed up successfully" });
} catch (error) {
res.status(400).send("Error signing up user" + error.message);
}
});


connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => {
  console.log("server created successfully");
})
  },
).catch((err) =>
    console.err(" Error in DB connection", err)
  );


