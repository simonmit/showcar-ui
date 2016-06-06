/**
 * Removed a specified directory from S3
 *
 * node cleanup_s3.js [remote dir]
 */

var AWS = require('aws-sdk');
var Q = require('q');
var R = require('ramda');
var H = require('./helper');

AWS.config.region = 'eu-west-1';

if (!process.argv[2]) {
    H.logRed('Please, specify a directory to remove');
    return;
}

var dirToRemove = process.argv[2];
var bucketName = process.env.BUCKETNAME;

H.logCyan('Removing: ' + dirToRemove);

Q.when(dirToRemove )
    .then(H.doLog('Path to cleanup: '))
    .then(H.listObjects(bucketName))
    .then(H.doLog('Extract files to be deleted...'))
    .then(R.compose(R.map(R.prop('Key')), R.prop('Contents')))
    .then(H.doLog('Files list: '))
    .then(R.forEach(H.deleteObject(bucketName)))
    .then(H.doLog('These files were removed: '))
    .catch(H.logRed);
