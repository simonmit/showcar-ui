const fs = require('fs');
const UglifyJS = require("uglify-js");

const readFile = filename => fs.readFileSync(filename, 'utf-8');
const readJsFile = filename => UglifyJS.minify(readFile(filename), { fromString: true }).code;

module.exports = {
    docs: {
        files: [
            { expand: true, cwd: './src/docs/', src: ['css/*', 'js/*'], dest: './docs/lib/' },
            { expand: true, cwd: './src/docs/examples/', src: ['**/*'], dest: './docs/examples' },
            { expand: true, cwd: './docs/', src: ['**/*'], dest: './public' },
        ]
    },

    fragment: {
        files: {
            'dist/showcar-ui-fragment.html': 'src/html/showcar-ui-fragment.html',
            'dist/showcar-ui-standalone-fragment.html': 'src/html/showcar-ui-standalone-fragment.html'
        }
    }
};