const baseConfig = require('./index');
const gitHubConfig = require('./github');
const npmConfig = require('./npm');

module.exports = {
  ...baseConfig,
  extends: null,
  plugins: [
    ...npmConfig.plugins,
    ...gitHubConfig.plugins,
  ],
};
