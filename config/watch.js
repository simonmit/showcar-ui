module.exports = {
    options: {
        interrupt: true,
        spawn: false,
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
