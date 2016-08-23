module.exports = grunt => {
    grunt.registerTask('generate-polyfills', 'My "bar" task.', function() {
        var done = this.async();

        const UglifyJS = require("uglify-js");
        const fs = require('fs');
        const coreJsBuilder = require('core-js-builder');

        Promise.all([
            coreJsBuilder({ modules: ['es6.object.assign'], library: false, umd: false }),
            coreJsBuilder({ modules: ['es6.array.from', 'es6.array.of'], library: false, umd: false }),
        ])
        .then(results => {
            const minify = (code, path) => {
                const minCode = UglifyJS.minify(code, { fromString: true }).code;
                fs.writeFileSync(path, minCode);
                console.log('Polyfill written:', path, 'size:', minCode.length);
                return minCode;
            };
            minify(results[0], 'dist/object.js');
            minify(results[1], 'dist/array.js');
        })
        .then(done, done);
    });
};
