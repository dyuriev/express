module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: [
                    'public/assets/css/app.css'
                ],
                dest: 'public/assets/css/common.css'
            },
            js : {
                src : [
                    'public/js/vendor/*.js'
                ],
                dest : 'public/js/common.js'
            }
        },
        cssmin : {
            css: {
                src: 'public/assets/css/common.css',
                dest: 'public/assets/css/common.min.css'
            }
        },
        uglify : {
            js: {
                files: {
                    'public/js/common.min.js' : [ 'public/js/common.js' ]
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js' ]);
};