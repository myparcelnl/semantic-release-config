const {addPlugin} = require('../helpers/addPlugin');

const defaults = {
  branchName: 'develop',
  message: 'chore(release): rebase published changes [skip ci]',
  clearWorkspace: true,
};

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addBackmergePlugin = (options = {}) => addPlugin(
  '@saithodev/semantic-release-backmerge',
  options,
  defaults,
);

module.exports = {addBackmergePlugin};
