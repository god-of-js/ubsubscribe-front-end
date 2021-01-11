
module.exports.registrationHandler = (event, context, done) => {
  done(null, JSON.stringify({
    status: 200,
    message: 'Registration complete'
  }))
}
