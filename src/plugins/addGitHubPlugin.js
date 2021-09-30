const {addPlugin} = require('../helpers/addPlugin');

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addGitHubPlugin = (options = {}) => addPlugin('@semantic-release/github', options);

module.exports = {addGitHubPlugin};
