const {addGitHubPlugin, addGitPlugin} = require('./src/plugins');
const mainConfig = require('./index');

module.exports = {
  ...mainConfig,
  plugins: [...mainConfig.plugins, addGitHubPlugin(), addGitPlugin()],
};
