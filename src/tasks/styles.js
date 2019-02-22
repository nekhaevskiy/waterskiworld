'use strict';

const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const calc = require('postcss-calc');
const comments = require('postcss-discard-comments');
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const cssvariables = require('postcss-css-variables');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const mqpacker = require("css-mqpacker");
const multipipe = require('multipipe');
const notify = require('gulp-notify');
const perfectionist = require('perfectionist');
const postcss = require('gulp-postcss');
const postcssCustomMedia = require('postcss-custom-media');
const rev = require('gulp-rev');
const sourcemaps = require('gulp-sourcemaps');
// const debug = require('gulp-debug');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev';

module.exports = function (options) {
    return function () {
        // TODO: Optimize task to use only changed files
        return multipipe(
            gulp.src(options.src),
            gulpIf(isDev, sourcemaps.init()),
            postcss([
                atImport(),
                cssvariables(),
                calc(),
                postcssCustomMedia(),
                mqpacker(),
                perfectionist({
                    format: 'compact',
                    trimTrailingZeros: false
                }),
                autoprefixer()
            ]),
            concat(options.concatFile),
            gulpIf(isDev, sourcemaps.write()),
            gulpIf(!isDev, multipipe(
                postcss([
                    cssnano(),
                    comments({ removeAll: true })
                ]),
                rev()
            )),
            gulp.dest(options.dst),
            gulpIf(!isDev, multipipe(rev.manifest('css.json'), gulp.dest('manifest')))
        ).on('error', notify.onError());
    };
};
