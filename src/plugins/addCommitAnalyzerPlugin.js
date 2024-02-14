const {addPlugin} = require('../helpers/addPlugin');

const defaults = {
  preset: 'conventionalcommits',
};

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addCommitAnalyzerPlugin = (options = {}) => addPlugin('@semantic-release/commit-analyzer', options, defaults);

module.exports = {addCommitAnalyzerPlugin};
