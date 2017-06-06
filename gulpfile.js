const gulp = require('gulp');
const scgulp = require('showcar-gulp')(gulp);

// Don't put in separate task. Runs async on each gulp task
const pkg = require('showcar-gulp/package.json');
const updateNotifier = require('update-notifier');
updateNotifier({
    pkg,
    updateCheckInterval: 1 //check each time
}).notify({ defer: false, isGlobal: false });


// gulp.task('js', ['set-dev'], scgulp.js({
gulp.task('js', ['eslint'], scgulp.js({
    entry: 'src/showcar-ui.js',
    out: 'dist/showcar-ui.js',
}));

gulp.task('icons', ['eslint'], scgulp.js({
    entry: 'src/js/showcar-icons.js',
    out: 'dist/showcar-icons.js',
}));

gulp.task('tracking', ['eslint'], scgulp.js({
    entry: 'src/js/showcar-tracking.js',
    out: 'dist/showcar-tracking.js',
}));

gulp.task('eslint', scgulp.eslint({
    files: 'src/**/*.js'
}));

gulp.task('stylelint', scgulp.stylelint({
    files: 'src/**/*.scss'
}));

gulp.task('scss', ['stylelint'], scgulp.scss({
    entry: 'src/showcar-ui.scss',
    out: 'dist/showcar-ui.css',
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
    gulp.src('src/html/showcar-ui-toggled-fragment.html').pipe(gulp.dest('dist/'));
});

const fs = require('fs');
const UglifyJS = require('uglify-js');
const readFile = filename => fs.readFileSync(filename, 'utf-8');
const readJsFile = filename => UglifyJS.minify(readFile(filename), { fromString: true }).code;
const stringReplace = require('gulp-string-replace');
var replaceOptions = {
    logs: {
        enabled: false
    }
};
gulp.task('replace', function () {
    gulp.src(['src/html/index.html', 'src/html/index-standalone.html', 'docs/helpers/polyfills.js'])
        .pipe(stringReplace('@@POLYFILL_DOCUMENT_REGISTER_ELEMENT', readFile('node_modules/document-register-element/build/document-register-element.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_DOM4', readFile('node_modules/dom4/build/dom4.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_ARRAY', readJsFile('src/js/polyfills/array.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_OBJECT', readJsFile('src/js/polyfills/object.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_PROMISE', readJsFile('node_modules/promiz/promiz.min.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_FETCH', readJsFile('node_modules/whatwg-fetch/fetch.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_ES6_COLLECTIONS', readJsFile('node_modules/es6-collections/es6-collections.js'), replaceOptions))
        .pipe(stringReplace('@@SCRIPT_ERROR_COLLECTOR', readJsFile('src/js/inline-js/js-error-collector.js'), replaceOptions))
        .pipe(stringReplace('@@SCRIPT_FONT_LOADER', readJsFile('src/js/inline-js/font-loader.js'), replaceOptions))
        .pipe(gulp.dest('dist/'));
});

gulp.task('set-dev', () => {
    scgulp.config.devmode = true;
});

gulp.task('docs:generate', () => {
    const generateJsonDocs = require('./docs/tasks/generateJson');
    const generateHtmlDocs = require('./docs/tasks/generateHtml');
    generateJsonDocs();
    generateHtmlDocs();
});

const serveDocs = require('./docs/tasks/docs');

gulp.task('docs:serve', () => {serveDocs(gulp);});
gulp.task('docs:edit', ['build'], () => {serveDocs(gulp);});
gulp.task('docs:watch', ['build'], () => {serveDocs(gulp);});

gulp.task('build', ['js', 'icons', 'tracking', 'scss', 'copy:fragments', 'replace']);
gulp.task('default', ['docs:watch']);

gulp.task('test', ['docs:serve'], scgulp.karma({
    browsers: ['Firefox', 'Electron', 'Safari'],
    // browsers: ['Electron'],
    files: ['.quixoteconf.js'],
    preprocessors: {
        '.quixoteconf.js': ['webpack','sourcemap']
    },
    proxies: {
        '/': 'http://localhost:3000/',
    },
}));


gulp.task('test:bs', ['docs:serve'], scgulp.karma({
    browserStack: {
        startTunnel: true,
        build: new Date().toLocaleString('de-DE', { hour12: false, month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }), //remove on travis
        project: 'Showcar-ui',
    },
    browsers: ['bs_safari_mac', 'bs_chrome_win', 'bs_firefox_win', 'bs_edge_win', 'bs_ie11_win', 'bs_iphone6s', 'bs_iphone7', 'bs_samsungS5_android', 'bs_samsungS5_chrome'],
    files: ['.quixoteconf.js'],
    preprocessors: {
        '.quixoteconf.js': ['webpack','sourcemap']
    },
    proxies: {
        '/': 'http://localhost:3000/',
    },
}));
