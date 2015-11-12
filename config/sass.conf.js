module.exports = (function() {
    var grunt = require("grunt");
    var DEBUG = !!grunt.option('dbg');

    return {
        options: {
            outputStyle: DEBUG ? 'expanded' : 'compressed',
            sourceMap: DEBUG,
            sourceMapEmbed: true,
            includePaths: [
                'bower_components/susy/sass'
            ]
        },
        files: {
            'dist/showcar-ui.css': 'src/scss/showcar-ui.scss',
            'docs/css/documenation.css': 'docs/css/documenation.scss'
        }
    }
})();
