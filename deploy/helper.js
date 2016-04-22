var AWS = require('aws-sdk');
var R = require('ramda');
var Q = require('q');
var path = require('path');
var chalk = require('chalk');
var fs = require('fs');
var mime = require('mime');

var logCyan = R.compose(console.log.bind(console), chalk.cyan.bind(chalk));
var logGreen = R.compose(console.log.bind(console), chalk.green.bind(chalk));
var logRed = R.compose(console.log.bind(console), chalk.red.bind(chalk));

var joinPath = R.curry(R.nAry(2, path.join));

/// readLocalDir -> String -> Promise [String]
var readLocalDir = function(localPath) {
    logCyan('Reading local dir: ', localPath);

    return Q.nfcall(fs.readdir, localPath);
};


/// filterDotDirs :: [String] -> [String]
var filterDotDirs = R.filter(R.compose(R.not, R.flip(R.contains)(['.', '..'])));


/// appendFullPathToFiles :: String -> [String] -> [String]
var appendFullPathToFiles = R.curry(function(localDirPath) {
    logCyan('Append ' + localDirPath + ' to provided list of files', localDirPath);

    return R.map(joinPath(localDirPath));
});


/// mapFilesToStreams :: [String] -> [{stream: FileStream, fileName: String}]
var mapFilesToStreams = R.map(R.converge(R.merge, [
    R.compose(R.objOf('stream'), fs.createReadStream.bind(fs)),
    R.compose(R.objOf('fileName'), path.basename.bind(path))
]));


var showUploadProgress = function(evt) {
    logGreen('File ' + evt.key + ' is ' + Math.floor(evt.loaded * 100 / evt.total) + '% loaded');
};

var uploadFinished = function(err, data) {
    if (err) return logRed(err);
    return logGreen('Uploading of ' + data.key + ' is done!\n\tIt is located at ' + data.Location);
};

var uploadFile = R.curry(function(remotePath, payload) {
    var mimeType = mime.lookup(payload.fileName);
    var S3 = new AWS.S3({params: {Bucket: 'as24-assets-eu-west-1', ContentType: mimeType, Key: remotePath + '/' + payload.fileName}});
    S3.upload({Body: payload.fileStream})
        .on('httpUploadProgress', showUploadProgress)
        .send(uploadFinished);
});

module.exports = {
    joinPath: joinPath,
    uploadFile: uploadFile,
    mapFilesToStreams: mapFilesToStreams,
    appendFullPathToFiles: appendFullPathToFiles,
    filterDotDirs: filterDotDirs,
    readLocalDir: readLocalDir
};