const Sails = require('sails').Sails
const assert = require('assert')

describe('Sails Hook Dotenv', function () {

  let sails

  before(function (done) {

    this.timeout(11000)

    Sails().lift({
      hooks: {
        'dotenv': require('../'),
        'grunt': false,
      },
      log: {
        level: 'error',
      },
    }, function (err, _sails) {

      if (err) return done(err)
      sails = _sails

      return done()
    })
  })

  after(function (done) {
    return sails ? sails.lower(done) : done()
  })

  it('sails does not crash', function () {
    return true
  })

  it('env vars are loaded from .env file', function () {
    let val = process.env.test_hit
    assert.equal(val, 'foo bar')
  })

})
