const jwt = require('jsonwebtoken')
const { JWT_ISSUER, JWT_SECRET } = require('../../config/config')
const jwtOptions = {
  expiresIn: '2d',
  issuer: JWT_ISSUER
}

class Tokeniser {
  static createToken (payload) {
    const token = jwt.sign(payload, JWT_SECRET, jwtOptions)
    return token
  }

  static verify (token) {
    const decode = jwt.verify(token, JWT_SECRET)
    return decode
  }
}

module.exports = Tokeniser
