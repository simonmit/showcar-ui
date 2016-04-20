module.exports = {
    options: {
        jsFile: 'showcar-ui/<%= buildType %>/<%= commitHash %>/showcar-ui.js',
        cssFile: 'showcar-ui/<%= buildType %>/<%= commitHash %>/showcar-ui.css'
    },
    files: [
        {src: 'src/html/index.html', dest: 'dist/index.html'}
    ]
};