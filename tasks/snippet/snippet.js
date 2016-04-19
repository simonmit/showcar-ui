module.exports = function(grunt) {
    grunt.registerMultiTask('snippet', 'bla bla bla', function() {
        var done = this.async();
        var config = this.options();

        this.files.forEach(file => {
            grunt.log.writeln('Process file: ' + file.src);

            var content = grunt.file.read(file.src);
            var newContent = content.replace('{= jsFile =}', config.jsFile);
            newContent = newContent.replace('{= cssFile =}', config.cssFile);

            grunt.file.write(file.dest, newContent);
            grunt.log.ok(file.src + ' -> ' + file.dest);
        });

        done();
    });
};