const Sails = require('sails').Sails
const assert = require('assert')

describe('Sails Hook Dotenv', function () {

  let sails

  before(done => {

    this.timeout(11000)

    Sails().lift({
      hooks: {
        'dotenv': require('../'),
        'grunt': false,
      },
      log: {
        level: 'error',
      },
    }, (err, _sails) => {
      if (err) {
        return done(err)
      }

      sails = _sails

      return done()
    })
  })

  after(done => {
    return sails ? sails.lower(done) : done()
  })

  it('sails does not crash', () => {
    return true
  })

  it('env vars are loaded from .env file', () => {
    assert.equal(process.env.test_hit, 'foo bar')
  })

})
