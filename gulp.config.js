module.exports = function () {
    "use strict";
    var config = {
        dev: "./dev_build",
        /**
         * All File Paths
         */
        srcJS: [
            "./src/**/*.js",
            "./*.js"
        ],
        srcLESS: [
            "./src/**/*.less",
            "./*.less"
        ],
        srcSASS: [
            "./src/**/*.sass",
            "./*.sass"
        ],
        srcCSS: [
            "./src/**/*.css",
            "./*.css"
        ],
        srcPHP: [
            "./src/**/*.php",
            "./*.php"
        ],
        dist: 'dist',
        distCSS: 'dist/**/*.css',
        distJS: 'dist/**/*.js'
    };
    return config;
};
