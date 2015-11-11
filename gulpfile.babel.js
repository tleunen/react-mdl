import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import gutil from 'gulp-util';
import open from 'open';

import webpackConfig from './webpack.config.js';

gulp.task('webpack:docs', done => {
    webpack(webpackConfig, (err, stats) => {
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

gulp.task('serve:docs', () => {
    const compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        contentBase: '_ghpages',
        stats: {
            colors: true,
            chunks: false
        }
    }).listen(8080, 'localhost', (err) => {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);
        open('http://localhost:8080/webpack-dev-server/');
    });
});


gulp.task('copy:docs', () => {
    return gulp.src([
        './extra/material.*',
        './docs/*'
    ])
        .pipe(gulp.dest('./_ghpages'));
});

gulp.task('docs', ['copy:docs', 'webpack:docs']);
gulp.task('docs:dev', ['copy:docs', 'serve:docs']);
