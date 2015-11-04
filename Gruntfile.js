module.exports = function(grunt) {
    var DEBUG = grunt.option('dbg');

    grunt.initConfig({

        sass: {
            dist: {
                options: {
                    outputStyle: DEBUG ? 'expanded' : 'compressed',
                    sourceMap: DEBUG,
                    sourceMapEmbed: true
                    /*
                    includePaths: [
                        'bower_components/susy/sass'
                    ]
                    */
                },
                files: {
                    'dist/showcar-ui.css': 'scss/showcar-ui.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);

    require('load-grunt-tasks')(grunt);
};
