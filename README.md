# sails-js-hook-dotenv

[Sails JS](http://sailsjs.org) hook to load environment variables from a `.env` file
using [dotenv](https://github.com/motdotla/dotenv)

### Installation

`npm install sails-js-hook-dotenv`

### Usage

Start sails as you normally do (`sails lift`) and you will be able to access your environment variables
using `process.env.your-variable-name`

### Configuration

You can add configuration options for this hook in `config/dotenv.js` by default.

```js
module.exports.dotenv = {

  default: {

    /**
     * Setting this to false will disable this hook
     *
     * Default: true
     */
    active: true,

    /**
     * Setting this to false will cause the application
     * NOT to throw an error if the config fails to load
     *
     * Default: true
     */
    throwOnFailure: true,

    /**
     * Specify a custom path if your file containing
     * environment variables is located elsewhere.
     *
     * Default: path.resolve(process.cwd(), '.env')
     */
    path: '/custom/path/to/.env',

    /**
     * Specify the encoding of your file containing
     * environment variables.
     *
     * Default: utf8
     */
    encoding: 'latin1',

    /**
     * Turn on logging to help debug why certain keys
     * or values are not being set as you expect.
     *
     * Default: false
     */
    debug: true,

    /**
     * Override any environment variables that have
     * already been set on your machine with values
     * from your .env file.
     *
     * Default: false
     */
    override: true,

  }
}
```

### Testing

Copy the `.env.example` file to create a new `.env` file.

Then run `npm run test` in your terminal.

### Changelog

[Changelog](CHANGELOG.md)
