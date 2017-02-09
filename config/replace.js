const fs = require('fs');
const UglifyJS = require("uglify-js");

const readFile = filename => fs.readFileSync(filename, 'utf-8');
const readJsFile = filename => UglifyJS.minify(readFile(filename), { fromString: true }).code;

module.exports = function(grunt, options) {
    return {
        fragment: {
            options: {
                patterns: [
                    // { match: 'ASSET_PATH', replacement: '<%= assetsPrefix %>/<%= buildType %>/<%= commitHash %>' },

                    { match: 'POLYFILL_DOCUMENT_REGISTER_ELEMENT', replacement: readFile('node_modules/document-register-element/build/document-register-element.js') },
                    { match: 'POLYFILL_DOM4', replacement: readFile('node_modules/dom4/build/dom4.js') },
                    { match: 'POLYFILL_ARRAY', replacement: readJsFile('src/js/polyfills/array.js') },
                    { match: 'POLYFILL_OBJECT', replacement: readJsFile('src/js/polyfills/object.js') },
                    { match: 'POLYFILL_PROMISE', replacement: readJsFile('node_modules/promiz/promiz.min.js') },
                    { match: 'POLYFILL_FETCH', replacement: readJsFile('node_modules/whatwg-fetch/fetch.js') },
                    { match: 'POLYFILL_ES6_COLLECTIONS', replacement: readJsFile('node_modules/es6-collections/es6-collections.js') },

                    { match: 'SCRIPT_ERROR_COLLECTOR', replacement: readJsFile('src/js/inline-js/js-error-collector.js') },
                    { match: 'SCRIPT_FONT_LOADER', replacement: readJsFile('src/js/inline-js/font-loader.js') },
                ],
            },
            files: {
                'dist/index.html': 'src/html/index.html',
                'dist/index-standalone.html': 'src/html/index-standalone.html'
            }
        }
    }
};