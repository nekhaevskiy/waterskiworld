'use strict';

// const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const concat = require('gulp-concat');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const multipipe = require('multipipe');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
// const debug = require('gulp-debug');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev';

module.exports = function (options) {
    return function () {
        // TODO: Optimize task to use only changed files
        return multipipe(
            gulp.src(options.src),
            gulpIf(isDev, sourcemaps.init()),
            postcss([ atImport() ]),
            concat(options.concatFile),
            gulpIf(isDev, sourcemaps.write()),
            gulp.dest(options.dst)
        ).on('error', notify.onError());
    };
};
