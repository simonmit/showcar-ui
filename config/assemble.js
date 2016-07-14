module.exports = {
    options: {
        flatten: true,
        assets: './docs/lib',
        helpers: ['handlebars-helpers', 'handlebars-helper-include'],
        partials: ['./src/docs/partials/**/*.hbs'],
        layout: ['./src/docs/layouts/default.hbs'],
        includes: ['./src/docs/pages/docs/*.hbs']
    },
    docs: {
        files: [{
            src: ['./src/docs/pages/**/*.hbs'],
            dest: './docs/'
        }]
    }
};
