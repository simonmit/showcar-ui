const Nightmare = require('nightmare');

const jserrors = new WeakMap();

Nightmare.action('collectJavaScriptErrors', function(done) {
    const errors = [];
    jserrors.set(this, errors);

    this.on('page', (type, message, stack) => {
        if (type === 'error') {
            errors.push({ message, stack });
        }
    });

    done();
});

Nightmare.action('retrieveJavaScriptErrors', function(done) {
    done(null, jserrors.get(this));
});

module.exports = Nightmare;
