exports.config = Object.assign({}, require('./wdio.base.conf').config, {
    capabilities: [{
        browserName: 'chrome'
    }],
    baseUrl: 'http://127.0.0.1:63342/showcar-ui/public'
});
