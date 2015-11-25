module.exports = {
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules)/ },
            { test: /\.html$/, loader: 'html-loader', exclude: /(node_modules)/ }
        ]
    }
};
