module.exports = {
    options: {
        jsFile: 'showcar-ui/<%= buildRefName %>/<%= buildRef %>/showcar-ui.js',
        cssFile: 'showcar-ui/<%= buildRefName %>/<%= buildRef %>/showcar-ui.css'
    },
    files: [
        {src: 'src/html/index.html', dest: 'dist/index.html'}
    ]
};