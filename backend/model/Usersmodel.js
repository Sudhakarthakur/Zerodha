const { model } = require("mongoose");
const { userSchema } = require("../schemas/UserSchema");

const UsersModel = model("User", userSchema);

module.exports = { UsersModel };
