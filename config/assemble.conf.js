module.exports = {
    options: {
        flatten: true,
        assets: './public',
        helpers: ['./docs/src/helpers/*.js', 'handlebars-helpers', 'handlebars-helper-include'],
        partials: ['./docs/src/partials/**/*.hbs'],
        layout: ['./docs/src/layouts/default.hbs'],
        includes: ['./docs/src/pages/docs/*.hbs']
    },
    files: [{
        src: ['./docs/src/pages/**/*.hbs'],
        dest: './public/'
    }]
};
