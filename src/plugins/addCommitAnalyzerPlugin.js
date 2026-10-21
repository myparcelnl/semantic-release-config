const {addPlugin} = require('../helpers/addPlugin');

const defaults = {
  preset: 'conventionalcommits',
  releaseRules: [
    // extend default types to allow releases for internal changes too
    {type: 'refactor', release: 'patch'},
    {type: 'build', release: 'patch'},
  ],
};

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
// Resolved path, because semantic-release loads a plugin named by package from its own nested copy.
const addCommitAnalyzerPlugin = (options = {}) =>
  addPlugin(require.resolve('@semantic-release/commit-analyzer'), options, defaults);

module.exports = {addCommitAnalyzerPlugin};
