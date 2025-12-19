const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  firstName: String,
  lastName: String,
  phone: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = { userSchema };
