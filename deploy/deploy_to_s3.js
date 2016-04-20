// node deplpy_to_s3.js [localDirName] [S3DirName]
// node deplpy_to_s3.js ../dist production

var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');
var Q = require('q');
var chalk = require('chalk');

AWS.config.region = 'eu-west-1';

var localDirPath = process.argv[2];
var remoteDirName = process.argv[3] + '/' + process.env.CI_BUILD_REF_NAME + '/' + process.env.CI_BUILD_REF;

chalk.blue('Local path is: ', localDirPath);
chalk.blue('Remote path is: ', S3DirName);

readLocalDir(localDirPath)
    .then(filterDotDirs)
    .then(mapFilesToFullPaths(localDirPath))
    .then(mapFilesToStreams)
    .then(function(streams) {
        streams.forEach(uploadFile(remoteDirName))
    });

function readLocalDir(localPath) {
    chalk.blue('Reading local dir: ', localPath);

    return Q.nfcall(fs.readdir, localPath);
}

function filterDotDirs(filesList) {
    chalk.blue('Files list is here: ', filesList.join("\n"));

    Q.when(filesList
        .filter(function(fileName) {
            return ['..', '.'].indexOf(fileName) === -1;
        })
    );
}

function mapFilesToFullPaths(localDirPath) {
    return function(filesList) {
        filesList.map(function(fileName) {
            return path.join(localDirPath, fileName);
        });
    };
}

function mapFilesToStreams(filesPaths) {
    chalk.blue('Create files streams');

    return filesPaths.map(function(filePath) {
        return fs.createReadStream(filePath);
    });
}

function uploadFile(remotePath) {
    return function(stream) {
        var S3 = new AWS.S3({params: {Bucket: 'as24-assets-eu-west-1', Key: remotePath + '/' + stream}});
        S3.upload({Body: body})
            .on('httpUploadProgress', function(evt) {
                chalk.green('File ' + evt.key + ' is ' + (evt.loaded * 100 / evt.total) + '% loaded');
            })
            .send(function(err, data) {
                if (err) return chalk.red(err);
                return chalk.green('Uploading of ' + data.key + ' is done!\n\tIt is located at ' + data.Location);
            });
    };
}
