const {addPlugin} = require('../helpers/addPlugin');

const defaults = {
  preset: 'conventionalcommits',
  presetConfig: {
    header: 'Changes',
    types: [
      {
        type: 'feat',
        section: ':sparkles: New Features',
      },
      {
        type: 'fix',
        section: ':bug: Bug Fixes',
      },
      {
        type: 'perf',
        section: ':zap: Performance Improvements',
      },
      {
        type: 'revert',
        section: ':rewind: Reverts',
      },
      {
        type: 'chore',
        effect: 'hidden',
      },
      {
        type: 'docs',
        effect: 'hidden',
      },
      {
        type: 'refactor',
        effect: 'hidden',
      },
      {
        type: 'style',
        effect: 'hidden',
      },
      {
        type: 'test',
        effect: 'hidden',
      },
    ],
  },
};

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
// Resolved path, because semantic-release loads a plugin named by package from its own nested copy.
const addReleaseNotesGeneratorPlugin = (options = {}) =>
  addPlugin(require.resolve('@semantic-release/release-notes-generator'), options, defaults);

module.exports = {addReleaseNotesGeneratorPlugin, releaseNotesGeneratorPluginDefaults: defaults};
