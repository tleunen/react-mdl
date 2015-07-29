var path = require('path');

module.exports = {
    entry: {
        badge: './demo/badge/badge.js',
        button: './demo/button/button.js',
        card: './demo/card/card.js',
        toggle: './demo/toggle/toggle.js',
        datatable: './demo/datatable/datatable.js',
        textfield: './demo/textfield/textfield.js'
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
