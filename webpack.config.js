var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    entry: './app/index.js',
    output: {
        path: `${__dirname}/app/dist/`,
        filename: 'index.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, 'app'),
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
        ]
    },
    plugins: [
      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['app'] }
      })
    ]
};
