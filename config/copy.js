module.exports = {
    docs: {
        files: [
            {expand: true, cwd: './src/docs/', src: ['css/*', 'js/*'], dest: './docs/lib/'},
            {expand: true, cwd: './src/docs/examples/', src: ['**/*'], dest: './docs/examples'},
            {expand: true, cwd: './docs/', src: ['**/*'], dest: './public'}
        ]
    }
};