var gulp    = require("gulp");
var args    = require("yargs");
var del     = require("del");
var config  = require("./gulp.config")();
var $       = require('gulp-load-plugins')({lazy: true});
var inject  = require('gulp-inject');

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
        .pipe(gulp.dest(config.dev));
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
        .pipe(gulp.dest(config.dev));
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
    var files = config.dev + "/**/*.css";
    clean(files);
});

gulp.task("clean-dev", function (done) {
    "use strict";
    log("Cleaning out dev_build");
    var files = config.dev;
    clean(files);
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
        for (var item in msg) {
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
