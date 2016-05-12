module.exports = {
    files: [
        {expand: true, cwd: 'docs/', src: ['css/*','js/*'], dest: 'public/'},
        {expand: true, cwd: 'examples/', src: ['**/*'], dest: 'public/'}
    ]
};