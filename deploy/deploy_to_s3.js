// node deplpy_to_s3.js [localDirName] [S3DirName]
// node deplpy_to_s3.js dist production

var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');
var zlib = require('zlib');

AWS.config.region = 'eu-west-1';

var localDirName = process.argv[2];
var S3DirName = process.argv[3];

var dirToLoadFrom = path.join(__dirname, '..', localDirName);

console.info('>> Load from dir', dirToLoadFrom);

fs.readdir(path.join(__dirname, '..', localDirName), function(err, filesList) {
    filesList
        .filter(function(fileName) {
            return ['..', '.'].indexOf(fileName) === -1;
        })
        .forEach(function(fileName) {
            var fileToUpload = path.join(dirToLoadFrom, fileName);

            console.info('>> try to upload: ', fileToUpload);

            var S3 = new AWS.S3({params: {Bucket: 'as24-assets-eu-west-1', Key: S3DirName + '/' + fileName}});

            var body = fs.createReadStream(fileToUpload).pipe(zlib.createGzip());

            S3.upload({Body: body})
                .on('httpUploadProgress', function(evt) { console.log(evt); })
                .send(function(err, data) { console.log(err, data) });
        });
});
