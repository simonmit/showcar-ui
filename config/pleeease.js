module.exports = function(grunt, options) {
    var DEBUG = !!options.debug;

    return {
        options: {
            autoprefixer: {'browsers': ['last 4 versions','ios 6']},
            minifier: !DEBUG,
            sourcemaps: false,
            rem: false,
            opacity: false,
            mqpacker: true
        },
        dist: {
            files: {
                'dist/showcar-ui.css': 'dist/showcar-ui.css'
            }
        },
        docs: {
            files: {
                'docs/lib/showcar-ui.css': 'docs/lib/showcar-ui.css',
                'docs/lib/css/documentation.css': 'docs/lib/css/documentation.css'
            }
        }
    };
};
