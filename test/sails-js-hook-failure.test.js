const Sails = require('sails').Sails
const assert = require('assert')

describe('Sails Hook Dotenv - Failure', () => {
  const app = new Sails()

  it('should throw error on failure to load dotenv', function () {
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
      dotenv: {
        path: './example/.env', // bad config path
      },
    }, function (error) {
      if (error) {
        assert.equal(error.message, 'dotenv hook failed to load')
      } else {
        throw new Error('It should throw error when dotenv fails to load')
      }
    })
  })

  it('should now throw error on failure to load dotenv', function () {
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
      dotenv: {
        throwOnFailure: false,
        path: './example/.env', // bad config path
      },
    }, function (error) {
      // verify no error thrown
      assert.equal(error, null)
    })
  })
})
