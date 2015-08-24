var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var gutil = require('gulp-util');
var open = require('open');

var webpackConfig = require('./webpack.config.js');

gulp.task('webpack:docs', function(done) {
    webpack(webpackConfig, function(err, stats) {
        if(err) {
            throw new gutil.PluginError('webpack:build', err);
        }
        gutil.log('[webpack:build]\n' + stats.toString({
            colors: true,
            chunks: false
        }));
        done();
    });
});

gulp.task('serve:docs', function(/*done*/) {
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        contentBase: '_ghpages',
        stats: {
            colors: true,
            chunks: false
        }
    }).listen(8080, 'localhost', function(err) {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);
        open('http://localhost:8080/webpack-dev-server/');
    });
});


gulp.task('copy:docs', function() {
    return gulp.src([
        './extra/material.*',
        './docs/*'
    ])
        .pipe(gulp.dest('./_ghpages'));
});

gulp.task('docs', ['copy:docs', 'webpack:docs']);
