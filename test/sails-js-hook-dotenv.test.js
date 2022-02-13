const Sails = require('sails').Sails
const _ = require('@sailshq/lodash');
const assert = require('assert')

describe('Sails Hook Dotenv', () => {

  let app
  let defaults

  before(done => {

    app = new Sails()

    app.load({
      globals: false,
      hooks: {
        'dotenv': require('../'),
        'grunt': false,
      },
      loadHooks: ['dotenv'],
      log: {
        level: 'silent',
      },
    }, () => {
      defaults = app.config.dotenv

      return done()
    })
  })

  after(done => {
    app.lower(done)
  })

  it('should have initialize the dotenv hook', () => {
    assert(app.hooks.dotenv)
  })

  it('should have dotenv throwOnFailure be set to true', () => {
    assert(_.isBoolean(defaults.throwOnFailure))
  })

  it('env vars are loaded from .env file', () => {
    assert.equal(process.env.test_hit, 'foo bar')
  })

})
