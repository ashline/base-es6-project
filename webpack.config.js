var path = require('path');
console.log(__dirname)
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
        }
    };
