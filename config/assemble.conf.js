module.exports = {
    options: {
        flatten: true,
        assets: './docs',
        helpers: ['./docs/src/helpers/*.js', 'handlebars-helpers'],
        partials: ['./docs/src/partials/**/*.hbs'],
        layout: ['./docs/src/layouts/default.hbs']
    },
    files: [{
        src: ['./docs/src/pages/*.hbs'],
        dest: './docs/'
    },{
        src: ['./docs/src/pages/*/*.hbs'],
        dest: './docs/pages/'
    }]
};
