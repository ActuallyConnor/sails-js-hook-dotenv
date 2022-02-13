const Sails = require('sails').Sails
const assert = require('assert')

describe('Sails Hook Dotenv', () => {

  let app

  before(done => {

    app = new Sails()

    app.load({
      hooks: {
        'dotenv': require('../'),
        'grunt': false,
      },
      loadHooks: ['dotenv'],
      log: {
        level: 'error',
      },
    }, done)
  })

  after(done => {
    return app ? app.lower(done) : done()
  })

  it('sails does not crash', () => {
    return true
  })

  it('env vars are loaded from .env file', () => {
    assert.equal(process.env.test_hit, 'foo bar')
  })

})
