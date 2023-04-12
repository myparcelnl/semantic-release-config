const mainConfig = require('./index');
const {addComposerPlugin} = require('./src/plugins/addComposerPlugin');

module.exports = {
  ...mainConfig,
  extends: '@myparcel/semantic-release-config',
  plugins: [...mainConfig.plugins, addComposerPlugin()],
};
