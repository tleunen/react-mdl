require('./tests.setup');

// see https://github.com/webpack/karma-webpack#alternative-usage

const context = require.context('./src', true, /-test\.js$/);
context.keys().forEach(context);
