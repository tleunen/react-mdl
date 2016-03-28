module.exports = {
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules)/ }
        ]
    }
};
