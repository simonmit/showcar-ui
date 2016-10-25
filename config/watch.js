module.exports = {
    js: {
        files: ['src/**/*.js'],
        tasks: ['webpack:docs']
    },
    scss: {
        files: ['src/**/*.scss', 'src/**/*.scss'],
        tasks: ['sass', 'pleeease']
    },
    hbs: {
        files: ['src/docs/**/*.hbs'],
        tasks: ['assemble']
    }
};
