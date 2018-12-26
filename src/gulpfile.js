'use strict';

const gulp = require('gulp');
// const stylus = require('gulp-stylus');
// const sourcemaps = require('gulp-sourcemaps');
// const debug = require('gulp-debug');
// const gulpIf = require('gulp-if');
const del = require('del');

// const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

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
    
gulp.task('styles', function () {
    return gulp.src('css/**/*.{css,map}')
        .pipe(gulp.dest('../vm/www/wp-content/themes/waterskiworld/css'));
});

gulp.task('scripts', function () {
    return gulp.src('js/**/*.js')
        .pipe(gulp.dest('../vm/www/wp-content/themes/waterskiworld/js'));
});

gulp.task('assets', function () {
    return gulp.src('assets/**')
        .pipe(gulp.dest('../vm/www/wp-content/themes/waterskiworld'));
});

gulp.task('build', gulp.series(
    'clean', 
    gulp.parallel('styles', 'scripts', 'assets')
));
