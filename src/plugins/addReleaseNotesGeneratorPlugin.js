const {addPlugin} = require('../helpers/addPlugin');

const defaults = {
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
        hidden: true,
      },
      {
        type: 'docs',
        hidden: true,
      },
      {
        type: 'refactor',
        hidden: true,
      },
      {
        type: 'style',
        hidden: true,
      },
      {
        type: 'test',
        hidden: true,
      },
    ],
  },
};

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addReleaseNotesGeneratorPlugin = (options = {}) => addPlugin(
  '@semantic-release/release-notes-generator',
  options,
  defaults,
);

module.exports = {addReleaseNotesGeneratorPlugin};
