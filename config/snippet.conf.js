module.exports = {
    options: {
        jsFile: 'showcar-ui/<%= buildDest %>/showcar-ui<%= versionPrefix %>.js',
        cssFile: 'showcar-ui/<%= buildDest %>/showcar-ui<%= versionPrefix %>.css'
    },
    files: [
        {src: 'src/html/index.html', dest: 'dist/index.html'}
    ]
};