const mainConfig = require('./index');
const {git} = require('./src/plugins/git');
const {github} = require('./src/plugins/github');

module.exports = {
  extends: '@myparcel/semantic-release-config',
  plugins: [
    ...mainConfig.plugins,
    github,
    git,
  ],
};
