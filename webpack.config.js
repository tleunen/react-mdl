const path = require('path');

module.exports = {
    entry: './docs/src/app.js',
    output: {
        path: path.join(__dirname, '_ghpages'),
        publicPath: '/_ghpages/',
        filename: 'app.js'
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules)/ },
            { test: /\.html$/, loader: 'html-loader', exclude: /(node_modules)/ }
        ]
    }
};
