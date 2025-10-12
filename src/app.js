// Starting pont for the application

const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.send({firstName: "Harsha", lastName: "jain"});
});

app.post("/user", (req, res) => {
    res.send("Data Posted successfully");
});

app.delete("/user", (req, res) => {
    res.send("Data Deleted successfully");
})

app.use("/home", (req, res) => {
  res.send(
    "<h1>Hello from express</h1>"
  );
});

app.listen(3000, () => {
  console.log(
    "server created successfully"
  );
});
