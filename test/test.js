var Sails = require('sails').Sails;
should = require('should');

describe('Sails Hook Dotenv', function() {

	var sails;

	before(function (done) {

		this.timeout(11000);

		Sails().lift({

			hooks: {

				"dotenv": require('../'),

				"grunt": false
			},

			log: {

				level: "error"

			}

		},function (err, _sails) {

			if (err) return done(err);
			sails = _sails;
			return done();

		});
	});

	after(function (done) {

		if (sails) {
			return sails.lower(done);
		}
		return done();

	});

	it ('sails does not crash', function() {
		return true;
	});

	it ('env vars are loaded from .env file', function() {

		val = process.env.test_hit;

		val.should.eql('foo bar');

	});

});