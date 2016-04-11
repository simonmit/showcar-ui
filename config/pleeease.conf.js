module.exports = (function() {
    var grunt = require("grunt");
    var DEBUG = !!grunt.option('dbg');

    return {
        options: {
            "in": "dist/showcar-ui.css",
            "out": "dist/showcar-ui.css",
            autoprefixer: {'browsers': ['last 2 versions', '> 5%']},
            minifier: !DEBUG,
            sourcemaps: {
                map: {
                    inline: false
                }
            }
        },
        files: {
            'dist/': 'dist/*.css'
        }
    };
})();
