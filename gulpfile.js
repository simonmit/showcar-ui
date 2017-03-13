const gulp = require('gulp');
const scgulp = require('showcar-gulp')(gulp);

gulp.task('js', scgulp.js({
    entry: 'src/showcar-ui.js',
    out: 'dist/showcar-ui.js',
    // watch: 'test/js-src/**/*.js',
}));

gulp.task('icons', scgulp.js({
    entry: 'src/js/showcar-icons.js',
    out: 'dist/showcar-icons.js',
}));

gulp.task('tracking', scgulp.js({
    entry: 'src/js/showcar-tracking.js',
    out: 'dist/showcar-tracking.js',
}));

gulp.task('js:watch', () => {
    gulp.watch(['src/**/*.js'], ['js']);
});

gulp.task('eslint', scgulp.eslint({
    files: 'src/**/*.js'
}));

gulp.task('scss', scgulp.scss({
    entry: 'src/showcar-ui.scss',
    out: 'dist/showcar-ui.css',
    // watch: 'test/scss-src/**/*.scss'
}));

gulp.task('scss:watch', () => {
    gulp.watch(['src/**/*.scss'], ['scss']);
});

gulp.task('stylelint', scgulp.stylelint({
    files: 'src/**/*.scss'
}));

gulp.task('clean', scgulp.clean({
    files: ['dist/**/*']
}));

gulp.task('serve', scgulp.serve({
    dir: 'dist'
}));

gulp.task('copy:fragments', () => {
    gulp.src('src/html/showcar-ui-fragment.html').pipe(gulp.dest('dist/'));
    gulp.src('src/html/showcar-ui-standalone-fragment.html').pipe(gulp.dest('dist/'));
})


gulp.task('clean:docs', scgulp.clean({
    files: ['docs/components/*']
}));

gulp.task('copy:docs', ['clean:docs'], () => {
    gulp.src('dist/*.{css,js,map}').pipe(gulp.dest('docs/lib'));
    gulp.src([
        'src/06-components/**/docs/*',
        'src/06-components/**/description.md'
    ]).pipe(gulp.dest('docs/components'));
    gulp.src('src/01-settings/docs/*').pipe(gulp.dest('docs/components/globals/settings/docs'));
    gulp.src('src/03-generic/docs/*').pipe(gulp.dest('docs/components/globals/generic/docs'));
    gulp.src('src/05-layout/docs/*').pipe(gulp.dest('docs/components/globals/layout/docs'));
    gulp.src('src/07-utilities/docs/*').pipe(gulp.dest('docs/components/globals/utilities/docs'));
    gulp.src('docs/helpers/globals/description.md').pipe(gulp.dest('docs/components/globals'));
})

const fs = require('fs');
const UglifyJS = require("uglify-js");
const readFile = filename => fs.readFileSync(filename, 'utf-8');
const readJsFile = filename => UglifyJS.minify(readFile(filename), {fromString: true}).code;
const stringReplace = require('gulp-string-replace');
var replaceOptions = {
    logs: {
        enabled: false
    }
};
gulp.task('replace', function () {
    gulp.src(['src/html/index.html', 'src/html/index-standalone.html'])
        .pipe(stringReplace('@@POLYFILL_DOCUMENT_REGISTER_ELEMENT', readFile('node_modules/document-register-element/build/document-register-element.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_DOM4', readFile('node_modules/dom4/build/dom4.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_ARRAY', readJsFile('src/js/polyfills/array.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_OBJECT', readJsFile('src/js/polyfills/object.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_PROMISE', readJsFile('node_modules/promiz/promiz.min.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_FETCH', readJsFile('node_modules/whatwg-fetch/fetch.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_ES6_COLLECTIONS', readJsFile('node_modules/es6-collections/es6-collections.js'), replaceOptions))
        .pipe(stringReplace('@@SCRIPT_ERROR_COLLECTOR', readJsFile('src/js/inline-js/js-error-collector.js'), replaceOptions))
        .pipe(stringReplace('@@SCRIPT_FONT_LOADER', readJsFile('src/js/inline-js/font-loader.js'), replaceOptions))
        .pipe(gulp.dest('dist/'))
});


gulp.task('docs:watch', () => {
    gulp.watch(['src/**/docs/*', 'dist/*'], ['copy:docs']);
});

gulp.task('docs', ['copy:docs']);

gulp.task('set-dev', () => {
    scgulp.config.devmode = true;
});

gulp.task('lint', ['eslint', 'stylelint']);

gulp.task('build', ['js', 'icons', 'tracking', 'scss', 'copy:fragments', 'replace']);

gulp.task('dev', ['set-dev', 'build', 'js:watch', 'scss:watch', 'serve', 'docs:watch']);

gulp.task('default', ['build']);
