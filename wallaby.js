const wallabyWebpack = require('wallaby-webpack');
const webpack = require('webpack');

module.exports = (wallaby) => ({
    files: [
        { pattern: 'extra/material.js', instrument: false },
        { pattern: 'node_modules/chai/chai.js', instrument: false },
        { pattern: 'node_modules/sinon/pkg/sinon.js', instrument: false },
        { pattern: 'node_modules/react/umd/react.development.js', instrument: false },
        { pattern: 'node_modules/react-dom/umd/react-dom.development.js', instrument: false },
        { pattern: 'tests.setup.js', load: false },
        { pattern: 'src/**/*.js', load: false },
        { pattern: 'src/**/*-test.js', ignore: true },
    ],
    tests: [
        { pattern: 'src/**/*-test.js', load: false },
    ],
    env: {
        kind: 'chrome',
    },
    testFramework: 'mocha',
    compilers: {
        '**/*.js': wallaby.compilers.babel({}),
    },
    postprocessor: wallabyWebpack({
        entryPatterns: [
            'tests.setup.js',
            'src/**/*-test.js',
        ],
        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    exclude: /(__tests__|node_modules)\//,
                    loader: 'isparta'
                }
            ],
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    loader: 'babel'
                },
                { test: /\.json$/, loader: 'json' }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('test')
            })
        ],
        externals: {
            sinon: 'sinon',
            'react/addons': true,
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true,
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    }),
    setup: () => {
        window.should = window.chai.should();
        window.expect = window.chai.expect;
        window.assert = window.chai.assert;
        // eslint-disable-next-line no-underscore-dangle
        window.__moduleBundler.loadTests();
    },
});
