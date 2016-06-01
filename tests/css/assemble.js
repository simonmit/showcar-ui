// node assemble.js [dir_with_configs] [base_config.json] [result.json]
// node assemble.js ./config ./core.json ./output.json
var fs = require('fs');
var path = require('path');
var R = require('ramda');
var Q = require('q');

var confDir = process.argv[2];
var baseConfFileName = process.argv[3];
var resultFileName = process.argv[4];

var joinPath2 = R.curryN(2, path.join);
var joinPath3 = R.curryN(3, path.join);
var loadConf = R.compose(require, joinPath2(__dirname));
var readDir = R.curryN(2, Q.nfcall)(fs.readdir);
var saveFile = R.curryN(2, R.curryN(2, Q.nfcall)(fs.writeFile));

var appendToConfig = R.curry(function(baseConfig, conf) {
  baseConfig.scenarios.push(conf);
  return baseConfig;
});

var getConfigPartial = R.compose(require, joinPath3(__dirname, confDir));
var saveResult = R.compose(saveFile(resultFileName), JSON.stringify);
var buildUpConfig = R.reduce(appendToConfig, loadConf(baseConfFileName));

readDir(joinPath2(__dirname, confDir))
  .then(R.compose(R.flatten, R.map(getConfigPartial)))
  .then(buildUpConfig)
  .then(saveResult);
