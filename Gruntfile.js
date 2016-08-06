module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
        options: {
            separator: '\n\n /*---------------------------------------------------*/ \n\n',
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - H4mit */',
        },
        dist: {
            src: [
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/bootstrap/dist/js/bootstrap.min.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-animate/angular-animate.min.js',
                'bower_components/angular-route/angular-route.min.js',
                'bower_components/angular-aria/angular-aria.min.js',
                'bower_components/angular-messages/angular-messages.min.js',                
                'assets/js/svg-assets-cache.js',
                'bower_components/angular-material/angular-material.min.js',
                'assets/js/ie-emulation-modes-warning.js',
                'assets/js/ie10-viewport-bug-workaround.js',
                'src/**/*.js',
                'src/core.js'

            ],
            dest: 'build/_scripts.js',
        },
    },

    concat_css: {
        all: {
            src: [
                    "bower_components/angular-material/angular-material.min.css",
                    'bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'assets/css/jumbotron-narrow.css',
                    'assets/css/ie10-viewport-bug-workaround.css'
                 ],
            dest: "build/_styles.css"
        },
    },
  });

  // Load the plugin.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'concat_css']);

};