// Starting pont for the application

const express = require("express");

const app = express();

app.use("/home",(req, res) => {
  res.send(
    "<h1>Hello from express</h1>"
  );
});

app.use("/", (req, res) => {
  res.send(
    "<h1>Hello from Dashboard</h1>"
  );
});

app.listen(3000, () => {
  console.log(
    "server created successfully"
  );
});
