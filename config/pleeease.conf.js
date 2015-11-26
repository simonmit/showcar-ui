module.exports = {

    options: {
        autoprefixer: {'browsers': ['last 2 versions', '> 5%']},
        minifier: true
    },
    files: {
        'dist/': 'dist/*.css'
    }
};
