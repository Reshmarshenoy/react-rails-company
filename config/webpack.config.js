// config/webpack.config.js
var path = require('path'),
assets_path = path.join('app', 'assets', 'javascripts');

var config = {
  context: path.resolve(assets_path),
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(assets_path)
  },
  externals: {
    jquery: 'var jQuery'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(assets_path)
  },
   module: {
        loaders: [{
            test: /\.(js|jsx$)/,
            exclude: /node_modules/,
            loader: ["babel-loader"],
            query: {
                presets: ["es2015", "stage-0", "react"]
            }
        }]
    }
};

module.exports = config;