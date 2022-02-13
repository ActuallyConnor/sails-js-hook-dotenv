# CHANGELOG

## 1.0.0

- Forking package from https://github.com/Taiters/sails-hook-dotenv
- Updating packages:
  - dotenv `^0.4.0` → `^16.0.0`
  - mocha `^2.1.0` → `^9.2.0`
  - sails `^0.11.0` → `^1.5.2`
- Using new `dotenv.config()` method as opposed to the old `dotenv.load()` method that no longer exists
- Publishing package under new name `sails-js-hook-dotenv`
- Clean-up JavaScript in `index.js` and `test/test.js`
- No longer committing `.env` file. Instead committing `.env.example`

#### 1.0.1

- Adding CHANGELOG
- Adding check to see if `.env` config actually loads
  - Add extra customization so that user can decide whether it throws an error on failure or the application continues to spin-up. _See `dotenv.throwOnFailure`_ 
  - No tests for this functionality yet as there is no configurable way to make the application fail to load dotenv config files
- Updating README.md

#### 1.0.2

- Updating package.json GitHub links

#### 1.0.3

-Removing dependency on should package by @ActuallyConnor in https://github.com/ActuallyConnor/sails-js-hook-dotenv/pull/4
-Fixing README.md by @ActuallyConnor in https://github.com/ActuallyConnor/sails-js-hook-dotenv/pull/3
-Migrating to ES6 syntax by @ActuallyConnor in https://github.com/ActuallyConnor/sails-js-hook-dotenv/pull/5

**Full Changelog**: https://github.com/ActuallyConnor/sails-js-hook-dotenv/compare/1.0.2...1.0.3

#### 1.0.4

- Updating testing strategy to match other hook testing strategies by @ActuallyConnor in https://github.com/ActuallyConnor/sails-js-hook-dotenv/pull/7
- Adding GitHub workflow by @ActuallyConnor in https://github.com/ActuallyConnor/sails-js-hook-dotenv/pull/8


**Full Changelog**: https://github.com/ActuallyConnor/sails-js-hook-dotenv/compare/1.0.3...1.0.4

### 1.1.0

- Adding new config options
- Adding new tests for new config options

**Full Changelog**: https://github.com/ActuallyConnor/sails-js-hook-dotenv/compare/1.0.4...1.1.0
