# sails-hook-dotenv
[![Build Status](https://travis-ci.org/Taiters/sails-hook-dotenv.svg?branch=master)](https://travis-ci.org/Taiters/sails-hook-dotenv)

[Sails JS](http://sailsjs.org) hook to load environment variables from a `.env` file using [dotenv](https://github.com/bkeepers/dotenv)

### Installation

`npm install sails-hook-dotenv`

### Usage

Start sails as you normally do (`sails lift`) and you will be able to access your environment variables using `process.env.your-variable-name`

### Configuration

You can add configuration options for this hook in `config/dotenv.js` by default. Currently, the only option is a boolean: `active`. Setting this to false will disable this hook.
