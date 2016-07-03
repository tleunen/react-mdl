const webpack = require('webpack');

module.exports = function karma(config) {
    config.set({
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },

        browsers: ['Chrome'],
        frameworks: ['mocha'],
        files: [
            'extra/material.js',
            // 'src/**/*-test.js'
            'tests.webpack.js'
        ],

        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-coverage',
            'karma-sourcemap-loader',
            'karma-webpack'
        ],

        preprocessors: {
            // 'src/**/*-test.js': ['webpack']
            'tests.webpack.js': ['webpack']
        },

        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'lcovonly', subdir: '.' },
                { type: 'json', subdir: '.' },
                { type: 'text' }
            ]
        },
        singleRun: false,
        colors: true,

        webpack: {
            devtool: 'inline-source-map',
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
                    }
                ]
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('test')
                })
            ]
        },

        webpackMiddleware: {
            noInfo: true
        }
    });

    if (process.env.TRAVIS) {
        config.set({
            browsers: ['Chrome_travis_ci']
        });
    }
};
