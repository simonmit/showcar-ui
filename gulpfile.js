const gulp = require('gulp');
const scgulp = require('showcar-gulp')(gulp);

gulp.task('js', scgulp.js({
    entry: 'src/showcar-ui.js',
    out: 'dist/showcar-ui.js',
    // watch: 'test/js-src/**/*.js',
}));

gulp.task('js:watch', () => {
    gulp.watch(['src/**/*.js'], ['js']);
});

gulp.task('scss', scgulp.scss({
    entry: 'src/showcar-ui.scss',
    out: 'dist/showcar-ui.css',
    // watch: 'test/scss-src/**/*.scss'
}));

gulp.task('scss:watch', () => {
    gulp.watch(['src/**/*.scss'], ['scss']);
});

gulp.task('clean', scgulp.clean({
    files: ['dist/**/*']
}));

gulp.task('serve', scgulp.serve({
    dir: 'dist'
}));


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

gulp.task('docs:watch', () => {
    gulp.watch(['src/**/docs/*', 'dist/*'], ['copy:docs']);
});

gulp.task('docs', ['copy:docs', 'docs:watch']);

gulp.task('set-dev', () => {
    scgulp.config.devmode = true;
});

gulp.task('build', ['js', 'scss']);

gulp.task('dev', ['set-dev', 'build', 'js:watch', 'scss:watch', 'serve', 'docs:watch']);
