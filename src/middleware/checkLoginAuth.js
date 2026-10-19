const jwt = require("jsonwebtoken");
const env = require("../../env");
const SECRET_KEY = env.JWT_SECRET;

const checkLoginAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = checkLoginAuth;
