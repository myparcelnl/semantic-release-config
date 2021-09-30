const gitHubConfig = require('./github');
const npmConfig = require('./npm');

module.exports = {
  extends: null,
  plugins: [
    ...npmConfig.plugins,
    ...gitHubConfig.plugins,
  ],
};
