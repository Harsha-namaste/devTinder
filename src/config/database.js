const mongoose = require("mongoose");
const connectionString = require("../utils/data");

const connectDB = async () => {
await mongoose.connect(connectionString)
}

module.exports = connectDB;

