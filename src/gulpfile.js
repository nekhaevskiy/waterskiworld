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

lazyRequireTask('clean', './tasks/clean.js', {
    dst: '../vm/www/wp-content/themes/waterskiworld',
    force: true
});

lazyRequireTask('styles', './tasks/styles.js', {
    src: [
        'css/bootstrap.min.css',
        'css/ie10-viewport-bug-workaround.css',
        'css/style.css',
        'css/tachyons/tachyons.css'
    ],
    concatFile: 'style.css',
    dst: '../vm/www/wp-content/themes/waterskiworld/css'
});

lazyRequireTask('scripts', './tasks/scripts.js', {
    src: 'js/**/*.js',
    dst: '../vm/www/wp-content/themes/waterskiworld/js'
});

lazyRequireTask('assets', './tasks/assets.js', {
    src: 'assets/**',
    dst: '../vm/www/wp-content/themes/waterskiworld'
});

lazyRequireTask('php', './tasks/php.js', {
    src: 'php/**',
    dst: '../vm/www/wp-content/themes/waterskiworld'
});

lazyRequireTask('serve', './tasks/serve.js', {
    proxy: 'http://waterskiworld.test',
    dst: '../vm/www/wp-content/themes/**/*.*'
});

gulp.task('build', gulp.series(
    'clean', 
    gulp.parallel('styles', 'scripts', 'assets'),
    'php'
));

gulp.task('watch', function () {
    gulp.watch('php/**/*.php', gulp.series('php'));
    gulp.watch('css/**/*.css', gulp.series('styles'));
    gulp.watch('js/**/*.js', gulp.series('scripts'));
    gulp.watch('assets/**/*.*', gulp.series('assets'));
});

gulp.task('dev', 
    gulp.series('build', gulp.parallel('watch', 'serve'))
);
