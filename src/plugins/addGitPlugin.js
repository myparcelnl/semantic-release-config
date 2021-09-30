const {addPlugin} = require('../helpers/addPlugin');

const defaults = {
  assets: [
    'CHANGELOG.md',
    'package.json',
    'package-lock.json',
    'npm-shrinkwrap.json',
    'composer.json',
    'composer.lock',
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

module.exports = {addGitPlugin};
