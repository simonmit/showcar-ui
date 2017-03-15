const nodemon = require('gulp-nodemon');
const path = require('path');
const browserSync = require('browser-sync');
const serverScript = path.join(__dirname, './', './server.js');

module.exports = (gulp) => {
    browserSync.init(null, {
        proxy: "http://localhost:5000",
        open:false,
        port: 3000,
    });
    return new Promise((resolve, reject) => {
            nodemon({
                // the script to run the app
                script: serverScript,
                // this listens to changes in any of these files/routes and restarts the application
                watch: ['dist/**/*','docs/**/*'],
                ext: 'js, html,scss,css',
                stdout: false
                // readable: false
            }).on('start', () => {
                    browserSync.reload();
                })
                .on('readable', function (data) {
                    this.stdout.on('data', function (chunk) {
                        if (/Example app listening on port 5000!/.test(chunk)) {
                            browserSync.reload()
                            resolve();
                        }
                        process.stdout.write(chunk);
                    });
                    this.stderr.pipe(process.stderr);
                })
                .on('restart', () => {
                    gulp.src(serverScript);
                });
        }
    )
}
