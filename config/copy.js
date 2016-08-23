const fs = require('fs');
const UglifyJS = require("uglify-js");

const readFile = filename => fs.readFileSync(filename, 'utf-8');
const readJsFile = filename => UglifyJS.minify(readFile(filename), { fromString: true }).code;

module.exports = {
    docs: {
        files: [
            {expand: true, cwd: './src/docs/', src: ['css/*', 'js/*'], dest: './docs/lib/'},
            {expand: true, cwd: './src/docs/examples/', src: ['**/*'], dest: './docs/examples'},
            {expand: true, cwd: './docs/', src: ['**/*'], dest: './public'},
        ]
    },

    polyfills: {
        options: {
            process: (content, path) => {
                if (path.includes('min.js') || path.includes('es6-collections.js')) {
                    return content;
                }

                return UglifyJS.minify(content, { fromString: true }).code;
            }
        },
        files: {
            'dist/picturefill.js': 'node_modules/picturefill/dist/picturefill.min.js'
        }
    }
};
