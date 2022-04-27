const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  if (req.headers["authorization"]) {
    const token = req.headers["authorization"].split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            success: false,
            message: "Token is not valid",
          });
        }
        req.user = decoded;
        next();
      });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
};
