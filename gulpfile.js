'use strict';

const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');

function lazyRequireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function (callback) {
        let task = require(path).call(this, options);
        return task(callback);
    });
}

lazyRequireTask('clean', './src/tasks/clean.js', {
    dst: './vm/www/wp-content/themes/waterskiworld',
    force: true
});

lazyRequireTask('styles', './src/tasks/styles.js', {
    src: [
        './src/css/tachyons/tachyons.css',
        './src/components/**/*.css'
    ],
    concatFile: 'style.css',
    dst: './vm/www/wp-content/themes/waterskiworld/css'
});

lazyRequireTask('scripts', './src/tasks/scripts.js', {
    src: [
        './src/components/**/*.js'
    ],
    dst: './vm/www/wp-content/themes/waterskiworld/js'
});

lazyRequireTask('assets', './src/tasks/assets.js', {
    src: './src/assets/**',
    dst: './vm/www/wp-content/themes/waterskiworld'
});

lazyRequireTask('php', './src/tasks/php.js', {
    src: './src/php/**',
    dst: './vm/www/wp-content/themes/waterskiworld'
});

lazyRequireTask('serve', './src/tasks/serve.js', {
    proxy: 'waterskiworld.test',
    dst: './vm/www/wp-content/themes/**/*.*'
});

gulp.task('build', gulp.series(
    'clean', 
    gulp.parallel('styles', 'scripts', 'assets'),
    'php'
));

gulp.task('watch', function () {
    gulp.watch('./src/php/**/*.php', gulp.series('php'));
    gulp.watch('./src/css/**/*.css', gulp.series('styles'));
    gulp.watch('./src/components/**/*.css', gulp.series('styles'));
    gulp.watch('./src/js/**/*.js', gulp.series('scripts'));
    gulp.watch('./src/components/**/*.js', gulp.series('scripts'));
    gulp.watch('./src/assets/**/*.*', gulp.series('assets'));
});

gulp.task('dev', 
    gulp.series('build', gulp.parallel('watch', 'serve'))
);
