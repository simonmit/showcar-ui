module.exports = {
    entry: "./src/js/showcar-ui.js",
    output: {filename: "./dist/showcar-ui.js"},
    module: {
        loaders: [{test: /\.js$/, loader: "babel?presets[]=es2015", include: "./js"}]
    },
    resolve: {
        root: require('path').resolve('./vendor'),
        extensions: ['', '.js']
    },
    devtool: "source-map",
    cache: true
};
