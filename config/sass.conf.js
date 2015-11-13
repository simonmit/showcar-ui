module.exports = (function() {
    var grunt = require("grunt");
    var DEBUG = !!grunt.option('dbg');

    return {
        options: {
            outputStyle: DEBUG ? 'expanded' : 'compressed',
            sourceMap: DEBUG,
            sourceMapEmbed: true,
            includePaths: [
                'vendor/susy/sass/susy'
            ]
        },
        files: {
            'dist/showcar-ui.css': 'src/scss/showcar-ui.scss',
            'dist/showcar-ui-namespaced.css': 'src/scss/showcar-ui-namespaced.scss',
            'docs/css/documenation.css': 'docs/css/documenation.scss'
        }
    }
})();
