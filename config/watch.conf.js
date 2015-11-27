module.exports = {
    files: [
        'src/scss/**/*.scss',
        'src/js/**/*.js',
        'docs/index.html',
        'docs/css/*.scss',
        'examples/**/*',
        '!examples/**/*.css'
    ],
    tasks: ["dist"],
    options: {
        livereload: true
    }
};
