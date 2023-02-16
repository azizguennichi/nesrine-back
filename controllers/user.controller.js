const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

exports.signup = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;
  const newUser = new UserModel(req.body);
  const { email } = req.body;
  try {
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) return res.status(400).send("this email is exist");

    const user = await newUser.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).send(error);
  }
};
