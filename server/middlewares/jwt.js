const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token)
    return res
      .status(401)
      .json({ error: "Authentication required. Please log in." });

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ error: "Token is not valid!" });

    req.userId = payload._id;
    req.isEmployer = payload.isEmployer;
    next();
  });
};

module.exports = { verifyToken };
