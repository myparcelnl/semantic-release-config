const {addPlugin} = require('../helpers/addPlugin');

const defaults = {
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
