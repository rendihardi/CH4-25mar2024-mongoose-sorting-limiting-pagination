require("dotenv").config();
const mongoose = require("mongoose");
const Customer = require("../models/customerModel");
const fs = require("fs");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("Connection ke database sukses");
  })
  .catch((err) => {
    console.error("Kesalahan koneksi mongoose:", err);
  });

const customers = JSON.parse(fs.readFileSync("./data/customers.json", "utf-8"));

const importData = async () => {
  try {
    await Customer.create(customers);
    console.log("Data suskses di import");
  } catch (err) {
    console.log(err);
  }
};

const clearData = async () => {
  try {
    await Customer.deleteMany();
    console.log("Data suskses di clear");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] == "--import") {
  importData();
} else if (process.argv[2] == "--delete") {
  clearData();
}
