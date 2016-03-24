module.exports = {
    stopOnExit: true,
    seleniumVersion: '2.53.0',
    seleniumDownloadURL: 'http://selenium-release.storage.googleapis.com',
    drivers: {
        chrome: {
            version: '2.21',
            arch: process.arch,
            baseURL: 'http://chromedriver.storage.googleapis.com'
        },
        ie: {
            version: '2.53',
            arch: process.arch,
            baseURL: 'http://selenium-release.storage.googleapis.com'
        }
    }
};
