const fs = require('fs');
const UglifyJS = require("uglify-js");

const readFile = filename => fs.readFileSync(filename, 'utf-8');
const readJsFile = filename => UglifyJS.minify(readFile(filename), { fromString: true }).code;

module.exports = {
    docs: {
        files: [
            { expand: true, cwd: './src/06-components/', src: ['atoms/**/docs/*', 'molecules/**/docs/*', 'organisms/**/docs/*'], dest: './docs/components/' },
            { expand: true, cwd: './src/01-settings/', src: ['docs/*'], dest: './docs/components/globals/settings' },
            { expand: true, cwd: './src/03-generic/', src: ['docs/*'], dest: './docs/components/globals/generic' },
            { expand: true, cwd: './src/05-layout/', src: ['docs/*'], dest: './docs/components/globals/layout' },
            { expand: true, cwd: './src/06-components/', src: ['atoms/description.md', 'molecules/description.md', 'organisms/description.md'], dest: './docs/components/' },
            { expand: true, cwd: './src/06-components/atoms/', src: ['description.md'], dest: './docs/components/globals/' }, // temporary
            { expand: true, cwd: './src/07-utilities/', src: ['docs/*'], dest: './docs/components/globals/utilities' },
            { expand: true, cwd: './dist/', src: ['*.css', '*.js', '*.map'], dest: './docs/lib/' }
        ]
    },

    fragment: {
        files: {
            'dist/showcar-ui-fragment.html': 'src/html/showcar-ui-fragment.html',
            'dist/showcar-ui-standalone-fragment.html': 'src/html/showcar-ui-standalone-fragment.html'
        }
    }
};
