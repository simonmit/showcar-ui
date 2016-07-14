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
            files: [
                { dest: 'docs/lib/showcar-ui.css', src: 'src/scss/showcar-ui.scss' },
                { dest: 'docs/css/documentation.css', src: 'docs/css/documentation.scss' },
            ]
        }
    };
};
