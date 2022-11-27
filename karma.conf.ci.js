const baseConfig = require('./karma.conf.js');

module.exports = function(config){
  // Load base config
  baseConfig(config);

  // Override base config for CI build
  // --no-sandbox flag: https://github.com/karma-runner/karma-chrome-launcher/issues/158#issuecomment-339265457
  config.set({
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers:{
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true,
    autoWatch: false
  });
};
