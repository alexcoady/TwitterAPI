'use strict';

module.exports = function (grunt) {
    
    grunt.initConfig({
        
        jst: {
            options: {
                amd: true
            },
            compile: {
                files: {
                    'scripts/templates.js': ['scripts/templates/**/*.ejs']
                }
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-jst');

    grunt.registerTask('createDefaultTemplate', function () {
        grunt.file.write('scripts/templates.js', 'this.JST = this.JST || {};');
    });

    grunt.registerTask('default', [
        'jst',
    ]);
};
