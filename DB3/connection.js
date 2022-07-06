const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/Human-Resource-mongoose";

const connectionWithMongoose = async () => {
  try {
    const connection = await mongoose.connect(connectionString);
    console.log("Connected to Database.....");
    return connection;
  } catch (e) {
    console.error("Error while connecting to DB", e);
  }
};

connectionWithMongoose();
// module.exports = connectionWithMongoose;
