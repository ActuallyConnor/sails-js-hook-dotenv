dotenv = require('dotenv')

module.exports = function (sails) {

  return {

    defaults: {
      __configKey__: {
        active: true,
        throwOnFailure: true,
      },
    },

    initialize: function (cb) {
      if (!sails.config[this.configKey].active) {
        sails.log.verbose('Dotenv hook deactivated.')

        return cb()
      }

      const result = dotenv.config()

      // dotenv config failed to load
      if (result.error) {

        if (sails.config[this.configKey].throwOnFailure) {
          throw result.error
        } else {
          sails.config[this.configKey].active = false
          sails.log.verbose('Dotenv hook deactivated.')
        }

        return cb()
      }

      return cb()
    },
  }
}
