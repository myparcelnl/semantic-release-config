const {addGitHubPlugin, addGitPlugin} = require('./src/plugins');
const mainConfig = require('./index');

module.exports = {
  extends: '@myparcel/semantic-release-config',
  plugins: [
    ...mainConfig.plugins,
    addGitHubPlugin(),
    addGitPlugin(),
  ],
};
