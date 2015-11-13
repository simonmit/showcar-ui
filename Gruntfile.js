module.exports = function(grunt) {
    var moduleName = "ui";
    var loadConfig = function (name, module) {
        var result = {};
        module = module || moduleName || "module";
        name = name.indexOf(".") > -1 ? name : name + ".conf";
        result[module] = require("./config/" + name + ".js");
        return result;
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        webpack: loadConfig("webpack"),
        uglify: loadConfig("uglify"),
        sass: loadConfig("sass"),
        copy: loadConfig("copy"),
        watch: {
            files: ['src/scss/**/*.scss', 'src/js/**/*.js','docs/index.html', 'docs/css/*.scss'],
            tasks: ['sass', "webpack", "uglify"],
            options: {
                livereload: true
            }
        }
    });

    grunt.registerTask("build", ["sass", "webpack"]);
    grunt.registerTask("dist", ["sass", "webpack", "uglify"]);

    grunt.registerTask("default", ["dist"]);

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', "!grunt-cli"]
    });
};

