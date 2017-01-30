const webpack = require('webpack');

module.exports = function(grunt, options) {

    return {
        options: {
            entry: './src/showcar-ui.js',
            module: {
                noParse: [
                    /\.min\.js/
                ],
                loaders: [ { test: /\.js$/, loader: 'babel?presets[]=es2015' } ]
            },
            devtool: 'source-map',
            cache: true,
            watch: true
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
