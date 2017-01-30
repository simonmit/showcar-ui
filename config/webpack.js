const webpack = require('webpack');

const uglify = () => new webpack.optimize.UglifyJsPlugin({
    compress: true,
    mangle: true,
    sourceMap: true
});

module.exports = function(grunt, options) {

    return {
        options: {
            entry: './src/js/showcar-ui.js',
            module: {
                noParse: [
                    /\.min\.js/
                ],
                loaders: [{ test: /\.js$/, loader: 'babel?presets[]=es2015' }]
            },
            devtool: 'source-map',
            cache: true,
            watch: true
        },
        dist: {
            output: { filename: 'dist/showcar-ui.js' },
            plugins: [
                new webpack.optimize.OccurenceOrderPlugin(),
                uglify()
            ]
        },
        icons: {
            entry: './src/js/showcar-icons.js',
            output: { filename: 'dist/showcar-icons.js' },
            plugins: [
                new webpack.optimize.OccurenceOrderPlugin(),
                uglify()
            ]
        },
        tracking: {
            entry: './src/js/showcar-tracking.js',
            output: { filename: 'dist/showcar-tracking.js' },
            plugins: [
                new webpack.optimize.OccurenceOrderPlugin(),
                uglify()
            ]
        },
        docs: {
            output: { filename: 'docs/lib/showcar-ui.js' },
            plugins: [new webpack.optimize.OccurenceOrderPlugin()]
        }
    };
};