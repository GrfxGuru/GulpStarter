/*jshint esversion: 6 */
/*jshint node: true  */
/*jslint es6 */

const gulp        = require("gulp");
const args        = require("yargs");
const del         = require("del");
const config      = require("./gulp.config")();
const $           = require('gulp-load-plugins')({lazy: true});
const inject      = require('gulp-inject');
const imagemin    = require('gulp-imagemin');

/**
 * Less Files
 */
gulp.task("less-to-css", function () {
    "use strict";
    log("Compiling Less -> CSS");
    return gulp
        .src(config.srcLESS)
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe(gulp.dest(config.distCSS));
});

gulp.task("watch-less", function () {
    "use strict";
    gulp.watch([config.srcLESS], ["less_to_css"]);
});

/**
 * Sass Files
 */
gulp.task("sass-to-css", function () {
    "use strict";
    log("Compiling Sass -> CSS");
    return gulp
        .pipe($.plumber())
        .src(config.srcSASS)
        .pipe($.sass())
        .pipe($.autoprefixer())
        .pipe(gulp.dest(config.distCSS));
});

gulp.task("watch-sass", function () {
    "use strict";
    gulp.watch([config.srcSASS], ["sass_to_css"]);
});

/**
 * General Utilities
 */

gulp.task("clean-styles", function (done) {
    "use strict";
    log("Cleaning out css files");
    const files = config.dev + "/**/*.css";
    clean(files);
});

gulp.task("clean-dev", function (done) {
    "use strict";
    log("Cleaning out dev_build");
    var files = config.dev;
    clean(files);
});

/**
 * Image Manipulation
 */

gulp.task("imagemin", function() {
    "use strict";
    return gulp
        .src(config.srcImages)
        .pipe(imagemin())
        .pipe(gulp.dest(config.distImages));
});

/**
 * Functions used in scripts
 */

/**
 * Logs whatever is sent as an argument
 * @param msg
 */
function log (msg) {
    "use strict";
    if (typeof (msg) === "object") {
        for (const item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
};

/**
 * Logs Errors
 * @param error
 */
function logError (error) {
    "use strict";
    log("*** Start of Error ***");
    log(error);
    log("*** End of Error");
    this.emit("end");

}

/**
 * Deletes the path sent as argument
 * @param path
 */
function clean (path, done) {
    "use strict";
    del(path, done);
}
