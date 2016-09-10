module.exports = function () {
    "use strict";
    var config = {
        dev: "./dev_build",
        /**
         * All File Paths
         */
        all_js: [
            "./src/**/*.js",
            "./*.js"
        ],
        all_less: [
            "./src/**/*.less",
            "./*.less"
        ],
        all_sass: [
            "./src/**/*.sass",
            "./*.sass"
        ],
        all_css: [
            "./src/**/*.css",
            "./*.css"
        ],
        all_php: [
            "./src/**/*.php",
            "./*.php"
        ]
    };
    return config;
};
