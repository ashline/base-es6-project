module.exports = (gulp, plugins) => {
    return done => {
        new plugins.karmaServer({
            configFile: `${__dirname}/../karma.conf.js`,
            singleRun: true
        }, done).start();
    }
};
