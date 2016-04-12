module.exports = (function() {
    var grunt = require("grunt");
    var DEBUG = !!grunt.option('dbg');

    return {
        options: {
            outputStyle: DEBUG ? 'expanded' : 'compressed',
            includePaths: [
                'vendor/susy/sass/susy'
            ]
        },
        files: [
            {dest: '<%= assetVersion %>.css', src: 'src/scss/showcar-ui.scss'},
            {dest: 'docs/css/documentation.css', src: 'docs/css/documentation.scss'},
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
