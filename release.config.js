const baseConfig = require('./index');
const {addNpmPlugin, addGitHubPlugin, addGitPlugin} = require('./src/plugins');

module.exports = {
  ...baseConfig,
  extends: null,
  plugins: [
    ...baseConfig.plugins,
    addNpmPlugin(),
    addGitHubPlugin(),
    addGitPlugin(),
  ],
};
