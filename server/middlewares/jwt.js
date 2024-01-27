const jwt = require("jsonwebtoken");

const verifyToken = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).send("You are not authenticated");
  }

  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    if (err) return re.status(403).send("Token is not valid");
    req.userId = payload._id;
    re.isEmployer = payload.isEmployer;
  });
};

module.exports = { verifyToken };
