const Tokeniser = require('../utils/tokeniser')
const Validations = require('../utils/validations')
module.exports.registrationHandler = (event, context, done) => {
  const validation = Validations.userVerification(JSON.parse(event.body))
  if (validation.error) {
    return done(null, JSON.stringify({
      statusCode: 400,
      status: 'fail',
      message: validation.message
    }))
  }
  const { email, password, phone, name } = JSON.parse(event.body)
  const data = { email, password, phone, name, token: '' }
  data.token = Tokeniser.createToken({
    email,
    password,
    phone,
    name
  })
  done(null, JSON.stringify({
    status: 200,
    message: 'Registration complete',
    data
  }))
}
module.exports.loginHandler = (event, context, done) => {

}
