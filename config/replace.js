const fs = require('fs');
const UglifyJS = require("uglify-js");

const readFile = filename => fs.readFileSync(filename, 'utf-8');
const readJsFile = filename => UglifyJS.minify(readFile(filename), { fromString: true }).code;

module.exports = function(grunt, options) {
    return {
        fragment: {
            options:{
                patterns: [
                    { match: 'ASSETS_PREFIX', replacement: '<%= assetsPrefix %>' },
                    { match: 'BUILD_TYPE', replacement: '<%= buildType %>' },
                    { match: 'COMMIT_HASH', replacement: '<%= commitHash %>' },
                    { match: 'DOCUMENT_REGISTER_ELEMENT_POLYFILL', replacement: readFile('node_modules/document-register-element/build/document-register-element.js') },
                    { match: 'DOM4_POLYFILL', replacement: readFile('node_modules/dom4/build/dom4.js') },

                    { match: 'ERROR_COLLECTOR', replacement: readJsFile('src/js/inline-js/js-error-collector.js') },
                    { match: 'FONT_LOADER', replacement: readJsFile('src/js/inline-js/font-loader.js') },

                    // { match: /[\s^]+\/\/.*/g, replacement: '' }
                ],
            },
            files: {
                'dist/index0.html': 'src/html/index0.html'
            }
        }
    }
};
