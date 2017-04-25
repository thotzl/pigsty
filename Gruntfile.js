/*
 * fruits execise by
 * Torsten Hötzel
 */

'use strict';

module.exports = function(grunt) {


    // Project configuration.
    grunt.initConfig({
        autoprefixer: {
            options: {
                browsers: ['last 3 versions'],
                remove:   true
            },
            target:  {
                src:  './dist/css/index.css',
                dest: './dist/css/index.css'
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision:   -1
            },
            target:  {
                files: {
                    './dist/css/index.css': ['./dist/css/index.css']
                }
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist:    {
                files: {
                    './dist/css/index.css': './src/scss/index.scss'
                }
            }
        },

        cmq: {
            options:     {
                log: true
            },
            your_target: {
                files: {
                    './dist/css/index.css': ['./dist/css/index.css']
                }
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-combine-media-queries');


    grunt.registerTask('default', ['sass', 'cmq', 'autoprefixer', 'cssmin']);
};
