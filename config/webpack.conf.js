module.exports = {
    entry: "./src/js/showcar-ui.js",
    output: {filename: "./dist/showcar-ui.js"},
    module: {
        loaders: [{test: /\.js$/, loader: "babel?presets[]=es2015", include: "./js"}]
    },
    devtool: "source-map",
    cache: true
};
