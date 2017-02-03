module.exports = function(grunt, options) {
    var DEBUG = !!options.debug;

    return {
        options: {
            outputStyle: DEBUG ? 'expanded' : 'compressed',
            importer: function(url, prev, done) {
                return done(url.split(':')[0].toLowerCase() === 'npm'
                    ? { file: require.resolve(url.split(':')[1]) }
                    : null);
            }
        },
        dist: {
            files: { 'dist/showcar-ui.css': 'src/scss/showcar-ui.scss' }
        },
        docs: {
            files: [
                { dest: 'docs/lib/showcar-ui.css', src: 'src/showcar-ui.scss' },
                { dest: 'docs/lib/css/documentation.css', src: 'src/docs/css/documentation.scss' },
                {
                    expand: true,
                    cwd: 'src/docs/examples/',
                    src: ['**/*.scss'],
                    dest: 'docs/examples/',
                    ext: '.css'
                }
            ]
        }
    }
};
