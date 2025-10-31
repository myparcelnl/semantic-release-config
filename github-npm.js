const {addGitHubPlugin, addGitPlugin, addNpmPlugin} = require('./src/plugins');
const mainConfig = require('./index');

module.exports = {
  ...mainConfig,
  plugins: [...mainConfig.plugins, addNpmPlugin(), addGitHubPlugin(), addGitPlugin()],
};
