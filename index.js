dotenv = require('dotenv')

module.exports = sails => {

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

      const config = {}

      if (sails.config[this.configKey].path !== undefined) {
        config['path'] = sails.config[this.configKey].path
      }

      if (sails.config[this.configKey].encoding !== undefined) {
        config['encoding'] = sails.config[this.configKey].encoding
      }

      if (sails.config[this.configKey].debug !== undefined) {
        config['debug'] = sails.config[this.configKey].debug
      }

      if (sails.config[this.configKey].override !== undefined) {
        config['override'] = sails.config[this.configKey].override
      }

      const result = dotenv.config(config)

      // dotenv config failed to load
      if (result.error) {

        if (sails.config[this.configKey].throwOnFailure) {
          throw new Error('dotenv hook failed to load')
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
