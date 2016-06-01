module.exports = (function() {
    var grunt = require("grunt");
    var DEBUG = !!grunt.option('dbg');

    return {
        options: {
            autoprefixer: {'browsers': ['last 4 versions','ios 6']},
            minifier: !DEBUG,
            sourcemaps: false,
            rem: false,
            opacity: false,
            mqpacker: true
        },
        files: [
            {dest: '<%= buildDestination %>.css', src: '<%= buildDestination %>.css'}
        ]
    };
})();
