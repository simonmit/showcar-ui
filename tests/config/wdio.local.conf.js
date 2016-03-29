exports.config = Object.assign({}, require('./wdio.base.conf').config, {
    capabilities: [{
        browserName: 'chrome'
    }]
});
