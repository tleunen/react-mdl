const path = require('path');

module.exports = {
    entry: {
        demo: './demo/demo.js',
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
        layout: './demo/layout/layout.js',
        grid: './demo/grid/grid.js',
        tabs: './demo/tabs/tabs.js',
        footer: './demo/footer/footer.js'
    },
    output: {
        path: path.join(__dirname, 'demo'),
        filename: '[name].bundle.js',
        chumkFilename: '[id].bundle.js'
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    }
};
