// Starting pont for the application

const express = require("express");

const app = express();

const userAuth = require("./middlewares/userAuth");
const adminAuth = require("./middlewares/adminAuth");

app.use("/admin", adminAuth);

app.get(
  "/admin/getAllUsers",
  (req, res) => {
    res.send("All users data");
  }
);

app.delete(
  "/admin/deleteUser",
  (req, res) => {
    res.send(
      "User Deleted successfully"
    );
  }
);

app.get("/user/login", (req, res) => {
  res.send(
    "User logged in successfully"
  );
});

app.get(
  "/user/data",
  userAuth,
  (req, res) => {
    res.send("User data");
  }
);

app.get("/user", (req, res) => {
  res.send({
    firstName: "Harsh",
    lastName: "jain",
  });
});

// app.get(
//   "/user",
//   (req, res, next) => {
//     next();
//     res.send({
//       firstName: "Harsha",
//       lastName: "jain",
//     });
//   },
//   (req, res) => {
//     res.send({
//       firstName: "Harsh",
//       lastName: "jain",
//     });
//   },
//   (req, res) => {
//     res.send({
//       firstName: "Harsh",
//       lastName: "jai",
//     });
//   }
// );

app.post("/user", (req, res) => {
  res.send("Data Posted successfully");
});

app.delete("/user", (req, res) => {
  res.send("Data Deleted successfully");
});

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
