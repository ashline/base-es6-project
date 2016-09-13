module.exports = (gulp, plugins) => {
    return () => {
        return gulp.src('./src/styles.scss')
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass().on('error', plugins.sass.logError))
            .pipe(plugins.sourcemaps.write('./maps'))
            .pipe(gulp.dest('./src/dist'))
            .pipe(plugins.browserSync.stream({
                once: true
            }));
    }
};
