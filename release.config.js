const baseConfig = require('./index');
const {git} = require('./src/plugins/git');
const npmConfig = require('./npm');

module.exports = {
  ...baseConfig,
  ...npmConfig,
  plugins: [
    ...npmConfig.plugins,
    git,
  ],
  extends: null,
};
