module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jasmine',
      'es6-shim',
      'karma-typescript'
    ],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/lodash/lodash.min.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
      'data/data.ts',
      'src/**/*.ts',
    ],

    // https://github.com/angular/angular-cli/issues/2125#issuecomment-247395088
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },

    // list of files to exclude
    exclude: [
      'src/datatypes/*.ts',
      'src/functions/*.ts',
      'src/functions/various/*.ts',
      'src/params/*.ts',
      'src/promises/*.ts',
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'data/**/*.ts': ['karma-typescript', 'babel', 'sourcemap'],
      'src/**/*.ts': ['karma-typescript', 'babel', 'sourcemap']
    },

    karmaTypescriptConfig: require('./tsconfig'),

    babelPreprocessor: {
      options: {
        presets: ['es2015', 'es2016', 'es2017'],
        sourceMap: 'inline'
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],

    // (!) IMPORTANT
    // uncomment the following, not print information about skipped tests:
    //
    // specReporter: {
    //   suppressSkipped: true,
    // },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // (!) IMPORTANT
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      // 'Chrome',
      'ChromeHeadless',
      // 'Firefox',
      // 'IE',
      // 'PhantomJS'
    ],

    //==========================================
    // in case you want to use PhantomJS:
    // 1. uncomment PhantomJS above
    // 2. add following dependencies to package.json and make sure you install them:
    // "karma-phantomjs-launcher": "^1.0.4",
    // "phantomjs-prebuilt": "^2.1.15"
    //==========================================

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
