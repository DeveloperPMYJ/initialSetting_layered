// 공용함수 : 토큰 과 같은 자주 여기 저기 쓰이는 거

require("dotenv").config();
const jwt = require("jsonwebtoken");
const { throwError } = require("../utils/throwError");

exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  //  const token = req.headers.authorization;

  // 토큰 유무 확인
  if (!token) {
    throwError(401, "access token denied");
  }

  try {
    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );
    const userId = decoded["id"];
    req.user = decoded;
    req.userId = userId;
    next();
  } catch (err) {
    throwError(403, "invalid token");
  }
};
