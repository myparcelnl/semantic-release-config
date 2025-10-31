const {addGitHubPlugin, addGitPlugin, addComposerPlugin} = require('./src/plugins');
const mainConfig = require('./index');

module.exports = {
  ...mainConfig,
  plugins: [...mainConfig.plugins, addComposerPlugin(), addGitHubPlugin(), addGitPlugin()],
};
