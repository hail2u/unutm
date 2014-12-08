'use strict';

module.exports = function (grunt) {
  grunt.util.linefeed = '\n';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        dest: 'build/',
        expand: true,
        src: ['unutm*.js']
      }
    },

    clean: {
      main: {
        src: ['build/*']
      }
    },

    uglify: {
      options: {
        beautify: {
          ascii_only: true
        },

        preserveComments: false,
        sourceMap: true
      },

      main: {
        cwd: 'build/',
        dest: 'build/',
        expand: true,
        ext: '.min.js',
        src: ['*.js']
      }
    }
  });

  for (var devDependency in grunt.config.data.pkg.devDependencies) {
    if (
      devDependency.indexOf('grunt-') === 0 &&
      devDependency !== 'grunt-cli'
    ) {
      grunt.loadNpmTasks(devDependency);
    }
  }

  grunt.registerTask('build', [
    'clean',
    'copy',
    'uglify'
  ]);
};
