/*jslint node: true */
'use strict';


/**
 * Main compiler for app
 */
module.exports = function (grunt)
{
  grunt.initConfig(
  {
    pkg: grunt.file.readJSON('package.json'),

    /**
     * concat
     */
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        files: {
          'public/src/app.js': [
            'public/js/ask-bootstrap.js',
            'public/js/config.js',
            'public/js/routes.js',
            'public/js/run.js',
            // modals
            // controllers
            'public/js/controllers/home.js',
            'public/js/controllers/get_started.js',
            'public/js/controllers/scaffolding.js',
            'public/js/controllers/base_css.js',
            'public/js/controllers/components.js',
            'public/js/controllers/javascript.js',
            // directives
            'public/libs/angular-strap/0.7.0/angular-strap.min.js'
            // services
            // filters
          ]
          // ,
          // 'public/src/plugins.js': [
          //   'public/js/plugins/browser.js',
          //   'public/js/plugins/os.js',
          //   'public/js/plugins/basket.js',
          //   'public/js/plugins/screenfull.js'
          // ]
        }
      }
    },

    /**
     * minify concated sources
     */
    uglify: {
      options: {
        banner: '/*!\n * AskBootstrap v2.0.0 (snapshot)\n * Ask Community Systems\n * Authors: Cengiz Ulusoy\n * <%= grunt.template.today("dd-mm-yyyy hh:mm") %>\n */\n'
      },
      dist: {
        files: {
          'public/dist/app.min.js':     'public/src/app.js'
          // ,
          // 'public/dist/plugins.min.js': 'public/src/plugins.js'
        }
      }
    },

    // /**
    //  * sass compiler
    //  */
    // sass: {
    //   options: {
    //     trace: true,
    //     cacheLocation:  'sass/.sass-cache'
    //   },
    //   dist: {
    //     options: {
    //       style: 'compressed'
    //     },
    //     files: {
    //       'public/dist/bootstrap.css':   'sass/bootstrap.scss',
    //       'public/dist/responsive.css':  'sass/responsive.scss',
    //       'public/dist/app.css':         'sass/app.scss'
    //     }
    //   },
    //   dev: {
    //     options: {
    //       style: 'expanded' // nested (default), compact, compressed, or expanded
    //     },
    //     files: {
    //       'public/css/bootstrap.css':   'sass/bootstrap.scss',
    //       'public/css/responsive.css':  'sass/responsive.scss',
    //       'public/css/app.css':         'sass/app.scss'
    //     }
    //   }
    // },

    htmlmin: {
      dist: {
        options: {
          removeComments:     true,
          collapseWhitespace: true
        },
        files: {
          'public/dist/views/home.html':        'public/js/views/home.html',
          'public/dist/views/get_started.html': 'public/js/views/get_started.html',
          'public/dist/views/scaffolding.html': 'public/js/views/scaffolding.html',
          'public/dist/views/base_css.html':    'public/js/views/base_css.html',
          'public/dist/views/components.html':  'public/js/views/components.html',
          'public/dist/views/javascript.html':  'public/js/views/javascript.html'
        }
      }
    },

    /**
     * watch for changes
     */
    watch: {
      js: {
        files: [
          'public/js/controllers/*.js',
          // 'public/js/directives/*.js',
          // 'public/js/filters/*.js',
          // 'public/js/modals/*.js',
          // 'public/js/plugins/*.js',
          // 'public/js/services/*.js',
          'public/js/*.js'
        ],
        tasks: ['concat', 'uglify']
      },
      css: {
        files: [
          'sass/**/*.scss'
        ],
        tasks: ['sass']
      },
      html: {
        files: [
          'public/js/views/**/*.html'
        ],
        tasks: ['htmlmin']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('watchjs',   ['watch:js']);
  grunt.registerTask('watchcss',  ['watch:css']);
  grunt.registerTask('watchhtml', ['watch:html']);
  grunt.registerTask('html',      ['htmlmin']);
  grunt.registerTask('sasser',    ['sass']);
  grunt.registerTask('askbootstrap',  ['concat', 'uglify', 'htmlmin']); // , 'sasser'

};