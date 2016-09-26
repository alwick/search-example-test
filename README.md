# Search Example Automated Testing

## Uses Nigthwatch
UI automated testing framework powered by [Node.js](http://nodejs.org/). It uses the [Selenium WebDriver API](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol).

Nightwatch References:
[Homepage](http://nightwatchjs.org) | [Developer Guide](http://nightwatchjs.org/guide) | [API Reference](http://nightwatchjs.org/api) | [Changelog](https://github.com/nightwatchjs/nightwatch/releases)

## Install

Install Node.js and then:
```sh
$ git clone https://github.com/alwick/search-example-test.git
$ cd search-example-test
$ npm install
```

## Startup Search Example Application

Download Search Example:
```sh
$ git clone https://github.com/alwick/search-example-reactjs.git
$ cd search-example-reactjs
$ npm install
```

Start search example:
```sh
$ npm dev
```

## Run tests
The tests for Nightwatch are written using [Mocha](http://mochajs.org/) exports interface but they can also be run with Nightwatch itself.

To run the unit tests using mocha, do:

```sh
$ npm test
```

To run the unit tests using Nightwatch, do:

```sh
$ npm run test:unit
```
