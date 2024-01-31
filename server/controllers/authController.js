const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    if (await User.findOne({ username: req.body.username }))
      return res.status(409).json({ error: "User already exists" });

    if (await User.findOne({ email: req.body.email }))
      return res.status(409).json({ error: "User already exists" });

    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(404).json({ error: "user not found" });

    if (!req.body.password)
      return res.status(400).json({ error: "Password is required" });

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return res.status(400).json({ error: "Wrong password or username" });

    const token = jwt.sign(
      {
        id: user._id,
        isEmployer: user.isEmployer,
      },
      process.env.JWT_KEY
    );
    const { password, ...info } = user._doc;
    res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("user has been logged out");
};

module.exports = { register, login, logout };
