var UglifyJS = require("uglify-js");

function processFile(filePath, options) {
    return function() {
        return options.minify
            ? UglifyJS.minify(filePath).code
            : grunt.file.read(filePath, {encoding: 'utf-8'});
    };
}

function processLine(inp, key, conf) {
    return conf.file
        ? inp.replace('{{ ' + key + ' }}', processFile(conf.file, { minify: conf.options && conf.options.uglify }))
        : conf.content
            ? inp.replace('{{ ' + key + ' }}', conf.content)
            : inp;
}

module.exports = function(grunt) {
    grunt.registerMultiTask('snippet', 'bla bla bla', function() {
        var done = this.async();
        var config = this.options();

        this.files.forEach(file => {
            grunt.log.writeln('Process file: ' + file.src);

            var output = grunt.file.read(file.src);

            for (var k in config) {
                if (config.hasOwnProperty(k)) {
                    output = processLine(output, k, config[k]);
                }
            }

            grunt.file.write(file.dest, output);

            grunt.log.ok(file.src + ' -> ' + file.dest);
        });

        done();
    });
};