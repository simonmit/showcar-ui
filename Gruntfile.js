module.exports = function(grunt) {
    var moduleName = "ui";
    var loadConfig = function (name, module) {
        var result = {};
        module = module || moduleName || "module";
        name = name.indexOf(".") > -1 ? name : name + ".conf";
        result[module] = require("./config/" + name + ".js");
        return result;
    };

    grunt.initConfig(Object.assign({
        assetVersion: "./dist/" + (new Date).getTime() + "-" + process.env.CI_BUILD_REF + "/showcar-ui",
        pkg: grunt.file.readJSON("package.json"),
        webpack: loadConfig("webpack"),
        sass: loadConfig("sass"),
        watch: loadConfig("watch"),
        pleeease: loadConfig("pleeease"),
        assemble: loadConfig("assemble"),
        selenium_standalone: loadConfig("selenium-standalone", 'local')
    }, loadConfig("webdriver", 'webdriver')));

    grunt.registerTask("build", ["sass", "webpack"]);
    grunt.registerTask("dist", ["sass", "pleeease", "webpack", "assemble"]);

    grunt.registerTask("default", ["dist"]);
    grunt.registerTask("docs", ["assemble"]);

    grunt.registerTask("test-local", [
        "selenium_standalone:local:install",
        "selenium_standalone:local:start",
        "webdriver:local",
        "selenium_standalone:local:stop"]);
    grunt.registerTask("test-cbt", ["webdriver:cbt"]);

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', "!grunt-cli"]
    });
};
