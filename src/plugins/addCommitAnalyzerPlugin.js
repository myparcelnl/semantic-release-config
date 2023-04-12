const {addPlugin} = require('../helpers/addPlugin');

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addCommitAnalyzerPlugin = (options = {}) => addPlugin('@semantic-release/commit-analyzer', options);

module.exports = {addCommitAnalyzerPlugin};
