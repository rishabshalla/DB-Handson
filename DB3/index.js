const { default: mongoose } = require("mongoose");
const connetionWithMongoose = require("./connection");
const { employeeShema } = require("./schema");
const employeesData = require("./employeesData.json");
const { insertOneWithMongoose, insertManyWithMongoose } = require("./create");

const employeeModel = mongoose.model("employees", employeeShema);

// insertOneWithMongoose()
insertManyWithMongoose();

const findAllWithMongoose = async () => {
  try {
    await connectionWithMongoose();
    const result = await employeeModel.find();

    console.log("Successfully fetched the record", result);
  } catch (e) {
    console.error("error while fetching the record", e);
  }
};
findAllWithMongoose();
const findWithSalaryMongoose = async () => {
  try {
    await connectionWithMongoose();
    const result = await employeeModel.find({ salary: { $gt: "30000" } });

    console.log("Successfully fetched the record", result);
  } catch (e) {
    console.error("error while fetching the record", e);
  }
};
const findWithExpMongoose = async () => {
  try {
    await connectionWithMongoose();
    const result = await employeeModel.find({ overallExp: { $gt: "1" } });

    console.log("Successfully fetched the record", result);
  } catch (e) {
    console.error("error while fetching the record", e);
  }
};
const findWithTwoConditonsMongoose = async () => {
  try {
    await connectionWithMongoose();
    const result = await employeeModel.find({
      $and: [{ yearGrad: { $gt: "2015" } }, { overallExp: { $gt: "1" } }],
    });

    console.log("Successfully fetched the record", result);
  } catch (e) {
    console.error("error while fetching the record", e);
  }
};
const updatingWithTwoConditonsMongoose = async () => {
  try {
    await connectionWithMongoose();
    const result = await employeeModel.updateMany(
      { salary: { $gt: "30000" } },
      { $set: { salary: "28000" } }
    );

    console.log("Successfully updated the record", result);
  } catch (e) {
    console.error("error while updating the record", e);
  }
};
const deletingWithMongoose = async () => {
  try {
    await connectionWithMongoose();
    const result = await employeeModel.deleteMany({
      lastCompany: "Y",
    });

    console.log("Successfully deleted the record", result);
  } catch (e) {
    console.error("error while deleting the record", e);
  }
};
