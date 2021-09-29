const mainConfig = require('./index');
const {npm} = require('./src/plugins/npm');

module.exports = {
  extends: '@myparcel/semantic-release-config',
  plugins: [
    ...mainConfig.plugins,
    npm,
  ],
};
