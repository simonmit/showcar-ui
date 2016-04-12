const webpack = require("webpack");

module.exports = {
    entry: "./src/js/showcar-ui.js",
    output: {filename: "<%= assetVersion %>.js"},
    module: {
        loaders: [{test: /\.js$/, loader: "babel?presets[]=es2015"}]
    },
    resolve: {
        //root: require('path').resolve('./vendor'),
        extensions: ['', '.js']
    },
    devtool: "source-map",
    cache: true,
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: true,
            mangle: true,
            sourceMap: true
        })
    ]
};
