const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(201).send("user created");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("user not found");
    }
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) {
      return res.status(400).send("Wrong password or username");
    }
    const { password, ...info } = user._doc;
    res.status(200).send(info);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const logout = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login, logout };
