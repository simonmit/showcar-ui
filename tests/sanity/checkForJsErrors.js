module.exports = url => {
    var Nightmare = require('../nightmare-with-extensions');

    return done => {
        var nightmare = Nightmare({
            show: false,
            switches: {
                'ignore-certificate-errors': true
            }
         });

        nightmare
            .collectJavaScriptErrors()
            .goto(url)
            .wait(1000)
            .retrieveJavaScriptErrors()
            .end()
            .then(errorsOnPage => {
                const internalScriptErrors = errorsOnPage.filter(e => e.stack.indexOf('.autoscout24.') >= 0);
                const externalScriptErrors = errorsOnPage.filter(e => e.stack.indexOf('.autoscout24.') < 0);

                if (externalScriptErrors.length > 0) {
                    console.log(`There were some external JS errors on the page (${url}): ${JSON.stringify(externalScriptErrors)}`);
                }

                if (internalScriptErrors.length > 0) {
                    return done(new Error('JS errors on page: ' + JSON.stringify(internalScriptErrors)))
                }

                return done();
            });
    };
};
