const mongoClient = require("mongodb").MongoClient;
const userData = require("./userData.json");

const connectionString = "mongodb://127.0.0.1:27017";

const connectDatabase = async () => {
  try {
    const cluster = await mongoClient.connect(connectionString);
    const connection = cluster.db("Human-Resource-client");
    console.log("connected to database.............");
    return connection;
  } catch (err) {
    console.error("error while connecting to DB", err);
  }
};
// connectDatabase();

const insertData = async () => {
  try {
    const connection = await connectDatabase();
    const response = await connection
      .collection("employee")
      .insertMany(userData);
    console.log("successfully created multiple", response);
  } catch (err) {
    console.error("error while connecting", err);
  }
};
// insertData();

const findAll = async () => {
  try {
    const connection = await connectDatabase();
    const response = await connection.collection("employee").find().toArray();
    console.log(response);
  } catch (err) {
    console.error("error while connecting", err);
  }
};
// findAll();
const find1 = async () => {
  try {
    const connection = await connectDatabase();
    const response = await connection
      .collection("employee")
      .find({ salary: { $gt: "30000" } })
      .toArray();
    console.log(response);
  } catch (err) {
    console.error("error while connecting", err);
  }
};
// find1();
const find2 = async () => {
  try {
    const connection = await connectDatabase();
    const response = await connection
      .collection("employee")
      .find({ overallExp: { $gt: "2" } })
      .toArray();
    console.log(response);
  } catch (err) {
    console.error("error while connecting", err);
  }
};
// find2();
const find3 = async () => {
  try {
    const connection = await connectDatabase();
    const response = await connection
      .collection("employee")
      .find({
        $and: [{ overallExp: { $gt: "1" } }, { yearGrad: { $gt: "2015" } }],
      })
      .toArray();
    console.log(response);
  } catch (err) {
    console.error("error while connecting", err);
  }
};
// find3();
const update1 = async () => {
  try {
    const connection = await connectDatabase();
    const response = await connection
      .collection("employee")
      .updateMany({ salary: { $gt: "70000" } }, { $set: { salary: "65000" } });
    console.log(response);
  } catch (err) {
    console.error("error while connecting", err);
  }
};
// update1();
const delete1 = async () => {
  try {
    const connection = await connectDatabase();
    const response = await connection
      .collection("employee")
      .deleteMany({ lastCompany: "Y" });
    console.log(response);
  } catch (err) {
    console.error("error while connecting", err);
  }
};
// delete1();
