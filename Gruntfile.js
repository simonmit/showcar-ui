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
        watch: loadConfig("watch"),
        pleeease: loadConfig("pleeease"),
        assemble: loadConfig("assemble")
    });

    grunt.registerTask("build", ["sass", "webpack", "copy"]);
    grunt.registerTask("dist", ["sass", "pleeease", "webpack", "uglify", "copy","assemble"]);

    grunt.registerTask("default", ["dist"]);
    grunt.registerTask("docs", ["assemble"]);

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', "!grunt-cli"]
    });
};

