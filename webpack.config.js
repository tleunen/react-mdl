var path = require('path');

module.exports = {
    entry: {
        badge: './demo/badge/badge.js',
        button: './demo/button/button.js',
        card: './demo/card/card.js',
        toggle: './demo/toggle/toggle.js',
        datatable: './demo/datatable/datatable.js',
        textfield: './demo/textfield/textfield.js',
        loading: './demo/loading/loading.js',
        slider: './demo/slider/slider.js',
        tooltip: './demo/tooltip/tooltip.js',
        menu: './demo/menu/menu.js',
        layout: './demo/layout/layout.js'
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
