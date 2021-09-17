const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // split actual token from the word bearer
  try {
    const token = req.headers.authorization.split(" ")[1];

    // Check if token exists
    if (!token) return res.status(401).send("Access denied");

    // decode the token by token secret key and store it in req.user
    const decoded = jwt.verify(token, process.env.JWT);
    req.user = decoded;
  } catch (err) {
    res.status(401).json({ message: "Authentication failed" });
  }
  next();
};
