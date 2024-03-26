const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  active: {
    type: Boolean,
    default: true,
  },
  photo: {
    type: String,
    default: "user-default.jpg",
  },
  passwords: {
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Customer = mongoose.model("Customer", customerSchema);

// const customerTest = new Customer({
//   name: "rendi hassh",
//   email: "renddd@gmail.com",
//   phoneNumber: "1293433383",
// });

// customerTest
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("ERROR :", err);
//   });

module.exports = Customer;
