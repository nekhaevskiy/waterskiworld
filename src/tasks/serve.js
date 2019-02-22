'use strict';

const browserSync = require('browser-sync').create();

module.exports = function (options) {
    return function () {
        browserSync.init({
            proxy: options.proxy
        });
        browserSync.watch(options.dst, function (event) {
            if (event === 'change') {
                browserSync.reload();
            }
        });
    };
};
