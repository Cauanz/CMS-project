const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if(!token) {
      res.status(401).json({ message: "Access denied, no token provided" });
    }

    const decodedToken = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);

    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send(error);
  }
}


module.exports = { validateToken };