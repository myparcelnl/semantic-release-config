const {addGitHubPlugin, addGitPlugin, addComposerPlugin} = require('./src/plugins');
const mainConfig = require('./index');

module.exports = {
  ...mainConfig,
  extends: '@myparcel/semantic-release-config/github',
  plugins: [
    ...mainConfig.plugins,
    addComposerPlugin(),
    addGitHubPlugin(),
    addGitPlugin(),
  ],
};
