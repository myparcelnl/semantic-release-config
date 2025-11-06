const mainConfig = require('./index');
const {addComposerPlugin} = require('./src/plugins/addComposerPlugin');

module.exports = {
  ...mainConfig,
  plugins: [...mainConfig.plugins, addComposerPlugin()],
};
