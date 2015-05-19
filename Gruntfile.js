/**
 * May the build success be with you.
 *
 * @module        :: Grunt
 * @name          :: Gruntfile
 * @description   :: This is the Gruntfile used to load all tasks and configs in grunt folder
 */

'use strict';

// All your urls to the servers
var endpoints = require('./grunt/endpoints');
if (!endpoints)
  endpoints = 'undefined';

// - client (location for development source files)
// - tmp (location for files created when running 'grunt server')
// - dist (location for files created when running 'grunt' or 'grunt build')
// - server (location for files pertaining to server folder)
// - endpoints (all your server urls)
var config = {
  client: 'client',
  tmp: '.tmp',
  dist: 'dist',
  server: 'server',
  endpoints: endpoints
};

module.exports = function(grunt) {

  // setup configuration object
  grunt.config.set('tsunia', config);

  // show elapsed time at the end
  require('time-grunt')(grunt);

  // Load all grunt tasks with JIT (Makes task loading super fast!)
  require('jit-grunt')(grunt, {
    // translate useminPrepare to use the 'grunt-usemin' plugin
    useminPrepare: 'grunt-usemin',
    // translate swig to use the 'grunt-wobble-swig' plugin
    swig: 'grunt-swig-templates'
  });

  // Load the include-all library in order to require all of our grunt
  // configurations and task registrations dynamically.
  var includeAll = require('include-all');

  // Loads Grunt configuration modules from the specified
  // relative path. These modules should export a function
  // that, when run, should either load/configure or register
  // a Grunt task.
  function loadTasks(relPath) {
    return includeAll({
      dirname: require('path').resolve(__dirname, relPath),
      filter: /(.+)\.js$/
    }) || {};
  }

  // Invokes the function from a Grunt configuration module with
  // a single argument - the `grunt` object.
  function invokeConfigFn(tasks) {
    for (var taskName in tasks) {
      if (tasks.hasOwnProperty(taskName)) {
        tasks[taskName](grunt);
      }
    }
  }

  // Grunt folder
  var gruntFolder = './grunt';

  // Load all configurations
  var utilConfig = loadTasks(gruntFolder + '/config/util');
  var compileConfig = loadTasks(gruntFolder + '/config/compile');
  var docConfig = loadTasks(gruntFolder + '/config/docs');
  var optimizeConfig = loadTasks(gruntFolder + '/config/optimize');
  var serverConfig = loadTasks(gruntFolder + '/config/server');
  var testConfig = loadTasks(gruntFolder + '/config/test');

  // Load all tasks
  var registerDefinitions = loadTasks(gruntFolder + '/tasks');

  // (ensure that a default task exists)
  if (!registerDefinitions.default) {
    registerDefinitions.default = function(grunt) {
      grunt.registerTask('default', []);
    };
  }

  // Run task functions to configure Grunt
  invokeConfigFn(utilConfig);
  invokeConfigFn(compileConfig);
  invokeConfigFn(docConfig);
  invokeConfigFn(optimizeConfig);
  invokeConfigFn(serverConfig);
  invokeConfigFn(testConfig);
  invokeConfigFn(registerDefinitions);
};
