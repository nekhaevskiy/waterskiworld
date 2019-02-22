'use strict';

const gulp = require('gulp');
const gulpIf = require('gulp-if');
const revReplace = require('gulp-rev-replace');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev';

module.exports = function (options) {
    return function () {
        return gulp.src(options.src, { since: gulp.lastRun(options.taskName) })
            .pipe(gulpIf(!isDev, revReplace({
                manifest: gulp.src('manifest/css.json', { allowEmpty: true }),
                replaceInExtensions: ['.php']
            })))
            .pipe(gulp.dest(options.dst));
    };
};
