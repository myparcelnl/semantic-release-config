const {addGitPlugin} = require('./src/plugins');
const mainConfig = require('./index');
const {addComposerPlugin} = require('./src/plugins/addComposerPlugin');

module.exports = {
  extends: '@myparcel/semantic-release-config',
  plugins: [
    ...mainConfig.plugins,
    addComposerPlugin(),
    addGitPlugin(),
  ],
};
