module.exports = {
    options: {
        inlineJS: {
            file: [
                'src/js/inline-js/js-error-collector.js',
                'src/js/inline-js/font-loader.js'
            ],
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
    dist: {
        files: [
            { src: 'src/html/index.html', dest: 'dist/index.html' }
        ]
    }
};
