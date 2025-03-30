const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  try {
    //! NÃO ESTÁ DEIXANDO NADA FUNCIONAR, ERRO 401 UNAUTHORIZED EM TODAS AS ROTAS DE POST
    const token = req.header(tokenHeaderKey);
    console.log(token);

    if(!token) {
      res.status(401).json({ message: "Access denied, no token provided" });
    }

    const decodedToken = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);

    res.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send(error);
  }
}



module.exports = { validateToken };