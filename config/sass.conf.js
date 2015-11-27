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
        files: [
            {dest: 'dist/fonts.css', src: 'src/scss/font-faces.scss'},
            {dest: 'dist/showcar-ui.css', src: 'src/scss/showcar-ui.scss'},
            {dest: 'dist/showcar-ui-namespaced.css', src: 'src/scss/showcar-ui-namespaced.scss'},
            {dest: 'docs/css/documenation.css', src: 'docs/css/documenation.scss'},
            {
                expand: true,
                cwd: 'examples/',
                src: ['**/*.scss'],
                dest: './examples',
                ext: '.css'
            }
        ]
    }
})();
