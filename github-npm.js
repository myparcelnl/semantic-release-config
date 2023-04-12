const {addGitHubPlugin, addGitPlugin, addNpmPlugin} = require('./src/plugins');
const mainConfig = require('./index');

module.exports = {
  ...mainConfig,
  extends: '@myparcel/semantic-release-config',
  plugins: [...mainConfig.plugins, addNpmPlugin(), addGitHubPlugin(), addGitPlugin()],
};
