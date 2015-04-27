/**
 * Created by BorjaRFP on 11/4/15.
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.',
                    keepalive: true
                }
            }
        },
        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: "index.html"
            }
        },
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    'app/common/styles/style.css': 'app/common/styles/less/style.less'
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-less');


    // Default task(s).
    grunt.registerTask('default', []);

    grunt.registerTask('serve', [
        'wiredep',
        'less:development',
        'connect'
    ]);


};