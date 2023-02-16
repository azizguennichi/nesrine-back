const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
