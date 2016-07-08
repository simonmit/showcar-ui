module.exports = function(grunt) {
    var moduleName = "ui";
    var loadConfig = function (name, module) {
        var result = {};
        module = module || moduleName || "module";
        name = name.indexOf(".") > -1 ? name : name + ".conf";
        result[module] = require("./config/" + name + ".js");
        return result;
    };

    var assign = function (target) {
        'use strict';
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };

    grunt.initConfig(assign({
        assetsPrefix: '/assets/external/showcar-ui',
        buildType: process.env.CI_BUILD_REF_NAME || 'unknown_build_type', // branch name
        commitHash: process.env.CI_BUILD_REF || 'unknown_commit_hash',
        buildDestination: "./dist/showcar-ui",
        pkg: grunt.file.readJSON("package.json"),
        webpack: loadConfig("webpack"),
        sass: loadConfig("sass"),
        watch: loadConfig("watch"),
        pleeease: loadConfig("pleeease"),
        copy: loadConfig("copy"),
        assemble: loadConfig("assemble"),
        snippet: loadConfig("snippet"),
        selenium_standalone: loadConfig("selenium-standalone", 'local')
    }, loadConfig("webdriver", 'webdriver')));

    grunt.loadTasks('./tasks/snippet');

    grunt.registerTask("build-css", ["sass", "pleeease"]);
    grunt.registerTask("build", ["build-css", "webpack"]);
    grunt.registerTask("dist", ["build-css", "webpack", "assemble", "snippet"]);

    grunt.registerTask("default", ["dist"]);

    grunt.registerTask("docs", "Create documentation artifacts", function(){
        grunt.config.set("buildDestination", "./public/showcar-ui");
        grunt.task.run(["sass", "copy", "webpack", "assemble"]);
    });

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
