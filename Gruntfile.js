module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less:{
			dev:{
				files:{
					"public/style.css":"less/style.less"
				}
			}
		},
		watch:{
			less:{
				files:[ "**/*.less" ],
				tasks:[ "less:dev" ],
				options: {
					interrupt: true
				}
			}
		}
	});


	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Default task(s).
	grunt.registerTask('default', ['less']);

};