module.exports = {
    options: {
        compress: true,
        mangle: true,
        sourceMap: true,
        sourceMapIn: "dist/showcar-ui.js.map"
    },
    files: {
        "dist/showcar-ui.min.js": "dist/showcar-ui.js"
    }
};
