const fs = require('fs');
const UglifyJS = require("uglify-js");

const readFile = filename => fs.readFileSync(filename, 'utf-8');
const readJsFile = filename => UglifyJS.minify(readFile(filename), { fromString: true }).code;

module.exports = {
    docs: {
        files: [
            { expand: true, cwd: './src/06-components/', src: ['atoms/**/docs/*', 'molecules/**/docs/*', 'organisms/**/docs/*'], dest: './docs/components/' },
            { expand: true, cwd: './src/06-components/', src: ['atoms/description.md', 'molecules/description.md', 'organisms/description.md'], dest: './docs/components/' }
        ]
    },

    fragment: {
        files: {
            'dist/showcar-ui-fragment.html': 'src/html/showcar-ui-fragment.html',
            'dist/showcar-ui-standalone-fragment.html': 'src/html/showcar-ui-standalone-fragment.html'
        }
    }
};
