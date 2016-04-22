var AWS = require('aws-sdk');
var R = require('ramda');
var Q = require('q');
var path = require('path');
var chalk = require('chalk');
var fs = require('fs');

var joinPath = R.curry(R.nAry(2, path.join));

var readLocalDir = function(localPath) {
    console.log(chalk.cyan('Reading local dir: ', localPath));

    return Q.nfcall(fs.readdir, localPath);
};

var filterDotDirs = R.filter(R.compose(R.not, R.flip(R.contains)(['.', '..'])));

var mapFilesToFullPaths = R.curry(function(localDirPath, filesList) {
    console.log(chalk.cyan('Map files list to list of full paths', localDirPath, filesList));

    return R.map(joinPath(localDirPath), filesList);
});

var mapFilesToStreams = function(filesPaths) {
    console.log(chalk.cyan('Create files streams', filesPaths.join(', ')));

    return filesPaths.map(function(filePath) {
        return {
            fileStream: fs.createReadStream(filePath),
            fileName: path.basename(filePath)
        };
    });
};

var uploadFile = R.curry(function(remotePath, payload) {
    var S3 = new AWS.S3({params: {Bucket: 'as24-assets-eu-west-1', ACL: 'public-read', Key: remotePath + '/' + payload.fileName}});
    S3.upload({Body: payload.fileStream})
        .on('httpUploadProgress', function(evt) {
            console.log(chalk.green('File ' + evt.key + ' is ' + Math.floor(evt.loaded * 100 / evt.total) + '% loaded'));
        })
        .send(function(err, data) {
            if (err) return console.log(chalk.red(err));
            return console.log(chalk.green('Uploading of ' + data.key + ' is done!\n\tIt is located at ' + data.Location));
        });
});

module.exports = {
    joinPath: joinPath,
    uploadFile: uploadFile,
    mapFilesToStreams: mapFilesToStreams,
    mapFilesToFullPaths: mapFilesToFullPaths,
    filterDotDirs: filterDotDirs,
    readLocalDir: readLocalDir
};