module.exports = (function() {
    var grunt = require("grunt");
    var DEBUG = !!grunt.option('dbg');

    return {
        options: {
            outputStyle: DEBUG ? 'expanded' : 'compressed',
            importer: function(url, prev, done) {
                return done(url.split(':')[0].toLowerCase() === 'npm'
                    ? { file: require.resolve(url.split(':')[1]) }
                    : null);
            }
        },
        files: [
            {dest: '<%= buildDestination %>.css', src: 'src/scss/showcar-ui.scss'},
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
