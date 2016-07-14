const webpack = require('webpack');

module.exports = function(grunt, options) {

    return {
        options: {
            context: __dirname + '/../src',
            entry: './js/showcar-ui.js',
            module: {
                loaders: [ { test: /\.js$/, loader: 'babel?presets[]=es2015' } ]
            },
            resolve: {
                extensions: ['', '.js']
            },
            devtool: 'source-map',
            cache: true
        },
        dist: {
            output: {filename: 'dist/showcar-ui.js'},
            plugins: [
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.optimize.UglifyJsPlugin({
                    compress: true,
                    mangle: true,
                    sourceMap: true
                })
            ]
        },
        docs: {
            output: {filename: 'docs/lib/showcar-ui.js'},
            plugins: [ new webpack.optimize.OccurenceOrderPlugin() ]
        }
    };
};
