dotenv = require('dotenv');

module.exports = function(sails) {

  return {

    defaults: {

      __configKey__: {

        active: true
      }
    },

    initialize: function(cb) {

      if (!sails.config[ this.configKey ].active) {

        sails.log.verbose('Dotenv hook deactivated.');
        return cb();

      }

      dotenv.load();

      return cb();

    },

  };

};
