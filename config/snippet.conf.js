module.exports = {
    options: {
        jsFile: '<%= assetsPrefix %>/<%= buildType %>/<%= commitHash %>/showcar-ui.js',
        cssFile: '<%= assetsPrefix %>/<%= buildType %>/<%= commitHash %>/showcar-ui.css'
    },
    files: [
        {src: 'src/html/index.html', dest: 'dist/index.html'}
    ]
};