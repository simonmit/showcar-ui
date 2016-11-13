var fs = require('fs');
var metrics = require('datadog-metrics');

function getFilesizeInBytes(filename) {
    var stats = fs.statSync(filename);
    var fileSizeInBytes = stats["size"];
    return fileSizeInBytes
}

var js_bytes = getFilesizeInBytes('../dist/showcar-ui.js');
var css_bytes = getFilesizeInBytes('../dist/showcar-ui.css');

metrics.init({ prefix: 'showcar.ui.' });
metrics.gauge('css_bytes', css_bytes, ['showcar']);
metrics.gauge('js_bytes', js_bytes, ['showcar']);
metrics.flush();
