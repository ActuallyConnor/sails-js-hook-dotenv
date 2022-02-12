# sails-hook-dotenv
[![Build Status](https://travis-ci.org/Taiters/sails-hook-dotenv.svg?branch=master)](https://travis-ci.org/Taiters/sails-hook-dotenv)
[![npm version](https://badge.fury.io/js/sails-hook-dotenv.svg)](http://badge.fury.io/js/sails-hook-dotenv)

[Sails JS](http://sailsjs.org) hook to load environment variables from a `.env` file using [dotenv](https://github.com/motdotla/dotenv)

### Installation

`npm install sails-hook-dotenv`

### Usage

Start sails as you normally do (`sails lift`) and you will be able to access your environment variables using `process.env.your-variable-name`

### Configuration

You can add configuration options for this hook in `config/dotenv.js` by default. Currently, the only option is a boolean: `active`. Setting this to false will disable this hook.

### Testing

Copy the `.env.example` file to create a new `.env` file.

Then run `npm run test` in your terminal.
