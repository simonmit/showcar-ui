module.exports = {
    entry: "./js/showcar-ui.js",
    output: {filename: "./dist/showcar-ui.js"},
    module: {
        loaders: [{test: /\.js$/, loader: "babel?presets[]=es2015"}]
    },
    devtool: "source-map"
};
