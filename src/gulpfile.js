'use strict';

// const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const del = require('del');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
// const debug = require('gulp-debug');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev';

gulp.task('clean', function () {
    return del(
        [
            '../vm/www/wp-content/themes/waterskiworld/css',
            '../vm/www/wp-content/themes/waterskiworld/fonts',
            '../vm/www/wp-content/themes/waterskiworld/img',
            '../vm/www/wp-content/themes/waterskiworld/favicon.ico'
        ], 
        {force: true}
        );
    });

// TODO: Optimize task to use only changed files
gulp.task('styles', function () {
    return gulp.src([
        'css/bootstrap.min.css',
        'css/ie10-viewport-bug-workaround.css',
        'css/style.css',
        'css/tachyons/tachyons.css'
    ])
        .pipe(gulpIf(isDev, sourcemaps.init()))
        .pipe(postcss([ atImport() ]))
        .pipe(concat('style.css'))
        .pipe(gulpIf(isDev, sourcemaps.write()))
        .pipe(gulp.dest('../vm/www/wp-content/themes/waterskiworld/css'));
});

gulp.task('scripts', function () {
    return gulp.src('js/**/*.js', {since: gulp.lastRun('scripts')})
        .pipe(gulp.dest('../vm/www/wp-content/themes/waterskiworld/js'));
});

gulp.task('assets', function () {
    return gulp.src('assets/**', {since: gulp.lastRun('assets')})
        .pipe(gulp.dest('../vm/www/wp-content/themes/waterskiworld'));
});

gulp.task('build', gulp.series(
    'clean', 
    gulp.parallel('styles', 'scripts', 'assets')
));

gulp.task('watch', function () {
    gulp.watch('css/**/*.css', gulp.series('styles'));
    gulp.watch('js/**/*.js', gulp.series('scripts'));
    gulp.watch('assets/**/*.*', gulp.series('assets'));
})

gulp.task('serve', function () {
    browserSync.init({
        proxy: 'http://waterskiworld.test'
    });
    browserSync.watch('../vm/www/wp-content/themes/**/*.*', function (event) {
        if (event === 'change') {
            browserSync.reload();
        }
    });
});

gulp.task('dev', 
    gulp.series('build', gulp.parallel('watch', 'serve'))
);
