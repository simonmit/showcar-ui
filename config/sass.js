module.exports = function(grunt, options) {
    var DEBUG = !!options.debug;

    return {
        options: {
            outputStyle: DEBUG ? 'expanded' : 'compressed',
            importer: function(url, prev, done) {
                return done(url.split(':')[0].toLowerCase() === 'npm' ?
                    { file: require.resolve(url.split(':')[1]) } :
                    null);
            }
        },
        dist: {
            files: { 'dist/showcar-ui.css': 'src/showcar-ui.scss' }
        }
    }
};
