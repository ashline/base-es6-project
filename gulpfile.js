var gulp = require('gulp');
var plugins = require('./gulp-tasks/plugins')();

function getTask(task) {
    return require(`./gulp-tasks/${task}`)(gulp, plugins);
}
/**
 * bundle js
 */
gulp.task('bundle', getTask('bundle'));

/**
 * First bundle, then serve from the ./app directory
 */
gulp.task('default', ['sass', 'sass:watch', 'bundle'], function() {
    plugins.browserSync.init({
        server: "./src"
    });
});

/**
 *  * Run test once and exit
 *   */
gulp.task('test', getTask('test'));

/**
 *  * Watch for file changes and re-run tests on each change
 *   */
gulp.task('tdd', getTask('tdd'));

/**
 * * Sass
 *  */
gulp.task('sass', getTask('sass'));

gulp.task('sass:watch', function() {
    gulp.watch('./src/**/*.scss', ['sass']);
});
