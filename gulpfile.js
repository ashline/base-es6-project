var gulp = require('gulp');
var karmaServer = require('karma').Server;

/**
 *  * Run test once and exit
 *   */
gulp.task('test', function (done) {
	new karmaServer({
		configFile: __dirname + '/karma.conf.js',
	        singleRun: true
	}, done).start();
});

/**
 *  * Watch for file changes and re-run tests on each change
 *   */
gulp.task('tdd', function (done) {
	  new karmaServer({
		configFile: __dirname + '/karma.conf.js'
	  }, done).start();
});

gulp.task('default', ['tdd']);
