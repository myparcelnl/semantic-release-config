const {addGitPlugin, addBackmergePlugin} = require('./src/plugins');
const baseConfig = require('./index');
const npmConfig = require('./npm');

module.exports = {
  ...baseConfig,
  ...npmConfig,
  plugins: [
    ...npmConfig.plugins,
    addGitPlugin(),
    addBackmergePlugin(),
  ],
  extends: null,
};
