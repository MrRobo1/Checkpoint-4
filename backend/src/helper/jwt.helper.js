const jwt = require('jsonwebtoken');

const encodeJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '3h'
  });
}
const decodeJWT = (token) => {
    return jwt.decode(token, process.env.JWT_SECRET);
};

module.exports = { encodeJWT, decodeJWT };
