module.exports = {
    options: {
        inlineJS: {
            file: 'src/js/inline-js/js-error-collector.js',
            options: {
                uglify: true
            }
        },
        jsFile: {
            content: '<%= assetsPrefix %>/<%= buildType %>/<%= commitHash %>/showcar-ui.js'
        },
        cssFile: {
            content: '<%= assetsPrefix %>/<%= buildType %>/<%= commitHash %>/showcar-ui.css'
        }
    },
    files: [
        { src: 'src/html/index.html', dest: 'dist/index.html' }
    ]
};
