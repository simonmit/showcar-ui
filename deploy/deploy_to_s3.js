// node deplpy_to_s3.js [local dir] [remote dir]
// node deplpy_to_s3.js ../dist production

var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');
var Q = require('q');
var chalk = require('chalk');

AWS.config.region = 'eu-west-1';

var localDirPath = path.join(__dirname, process.argv[2]);
var remoteDirName = process.argv[3];

console.log(chalk.cyan('Local path is: ', localDirPath));
console.log(chalk.cyan('Remote path is: ', remoteDirName));

readLocalDir(localDirPath)
    .then(filterDotDirs)
    .then(mapFilesToFullPaths(localDirPath))
    .then(mapFilesToStreams)
    .then(function(streams) {
        streams.forEach(uploadFile(remoteDirName))
    }).catch(function(err) {
        console.log(chalk.red('Error: ', err));
    });

function readLocalDir(localPath) {
    console.log(chalk.cyan('Reading local dir: ', localPath));

    return Q.nfcall(fs.readdir, localPath);
}

function filterDotDirs(filesList) {
    console.log(chalk.cyan('Files list is here: ', filesList.join(', ')));

    return Q.when(filesList.filter(function(fileName) {
        return ['..', '.'].indexOf(fileName) === -1;
    }));
}

function mapFilesToFullPaths(localDirPath) {
    return function(filesList) {
        console.log(chalk.cyan('Map files list to list of full paths'));

        return filesList.map(function(fileName) {
            return path.join(localDirPath, fileName);
        });
    };
}

function mapFilesToStreams(filesPaths) {
    console.log(chalk.cyan('Create files streams'));

    return filesPaths.map(function(filePath) {
        return {
            fileStream: fs.createReadStream(filePath),
            fileName: path.basename(filePath)
        };
    });
}

function uploadFile(remotePath) {
    return function(payload) {
        var S3 = new AWS.S3({params: {Bucket: 'as24-assets-eu-west-1', Key: remotePath + '/' + payload.fileName}});
        S3.upload({Body: payload.fileStream})
            .on('httpUploadProgress', function(evt) {
                console.log(chalk.green('File ' + evt.key + ' is ' + Math.floor(evt.loaded * 100 / evt.total) + '% loaded'));
            })
            .send(function(err, data) {
                if (err) return console.log(chalk.red(err));
                return console.log(chalk.green('Uploading of ' + data.key + ' is done!\n\tIt is located at ' + data.Location));
            });
    };
}
