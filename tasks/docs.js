const nodemon = require('gulp-nodemon');
const path = require('path');
const browserSync = require('browser-sync');
const serverScript = path.join(__dirname, './', './server.js');

module.exports = (gulp) => {
    browserSync.init(null, {
        proxy: 'http://localhost:5000',
        open: false,
        port: 3000,
    });
    return new Promise((resolve) => {
        nodemon({
            script: serverScript,   // the script to run the app
            watch: ['docs/**/*', 'src/**/*'],// this listens to changes in any of these files/routes and restarts the application
            ext: 'js, html, scss, css, md',
            tasks: (changedFiles) => {
                let tasks = [];
                changedFiles.forEach((file) => {
                    if (file.includes('/docs/')) {return;} // exclude docs folder from gulp tasks
                    if (path.extname(file) === '.js') tasks.push('js');
                    if (path.extname(file) === '.scss') tasks.push('scss');
                });
                return tasks;
            },
            stdout: false
        })
            .on('start', () => {
                browserSync.reload();
            })
            .on('readable', function () {
                this.stdout.on('data', (chunk) => {
                    if (/Express docs server runs on port 5000!/.test(chunk)) {
                        browserSync.reload();
                        resolve();
                    }
                    process.stdout.write(chunk);
                });
                this.stderr.pipe(process.stderr);
            })
            .on('restart', () => {
                gulp.src(serverScript);
            });
    });
};
