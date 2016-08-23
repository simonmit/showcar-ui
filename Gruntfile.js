module.exports = function(grunt) {
    var path = require('path');

    grunt.loadTasks('./tasks/generate-polyfills');

    require('load-grunt-config')(grunt, {
        // path to tasks configs
        configPath: path.join(process.cwd(), 'config'),

        // auto grunt.initConfig
        init: true,

        // data passed into config. Can use with <%= test %>
        data: {
            assetsPrefix: '/assets/external/showcar-ui',
            buildType: process.env.CI_BUILD_REF_NAME || 'unknown_build_type', // branch name
            commitHash: process.env.CI_BUILD_REF || 'unknown_commit_hash',
            dest: "./dist/showcar-ui"
        },

        // can optionally pass options to load-grunt-tasks.
        // If you set to false, it will disable auto loading tasks.
        loadGruntTasks: {
            pattern: ['grunt-*', "!grunt-cli"],
            config: require('./package.json'),
            scope: 'devDependencies'
        }
    });
};
