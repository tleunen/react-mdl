var path = require('path');

module.exports = {
    entry: {
        badge: './demo/badge/badge.js'
    },
    output: {
        path: path.join(__dirname, 'demo'),
        filename: '[name].bundle.js',
        chumkFilename: '[id].bundle.js'
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    }
};
