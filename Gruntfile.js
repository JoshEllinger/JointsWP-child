module.exports = function(grunt) {

	'use strict';

	var config = {

		watch: {
			sass: {
				files: ['sass/**/*.scss'],
				tasks: ['sass']
			},
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile']
			},
			js: {
				files: 'js/*.js',
				tasks: ['jshint:js']
			},
			livereload: {
				options: {
					livereload: true
				},
				files: ['css/**/*.css']
			}
		},

		pkg: grunt.file.readJSON('package.json'),
		// Compile SCSS to CSS
		sass: {
			dev: {
				options: {
					includePaths: [
						require('node-bourbon').includePaths[0],
						'../JointsWP/library/scss'
					],
					//outputStyle: 'compressed',
					sourceComments: 'map'
				},
				files: {
					'css/main.css': 'sass/main.scss'
				}
			}
		},
		jshint: {
			gruntfile: {
				src: ['Gruntfile.js']
			},
			js: {
				files: ['js/*/**.js']
			}
		}
	};

	// Comment here and uncomment the other task to use ruby sass
	grunt.loadNpmTasks('grunt-sass'); // sassc
	//grunt.loadNpmTasks('grunt-contrib-sass'); // ruby sass

	// Load other npm tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Register tasks
	grunt.initConfig(config);

	grunt.registerTask('default', 'Launch the sassc compile', [
		'sass'
	]);

};