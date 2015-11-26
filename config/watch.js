module.exports = function (grunt) {
    return {
        files: ['src/scss/**/*.scss', 'src/js/**/*.js','docs/index.html', 'docs/css/*.scss'],
        tasks: ["dist"],
        options: {
            livereload: true
        }
    }
};
