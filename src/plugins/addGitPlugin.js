const {addPlugin} = require('../helpers/addPlugin');

const defaults = {
  assets: [
    'CHANGELOG.md',
    'composer.json',
    'composer.lock',
    'npm-shrinkwrap.json',
    'package-lock.json',
    'package.json',
    'pnpm-lock.yaml',
    'yarn.lock',
  ],
  message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
};

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addGitPlugin = (options = {}) => addPlugin(
  '@semantic-release/git',
  options,
  defaults,
);

module.exports = {addGitPlugin, gitPluginDefaults: defaults};
