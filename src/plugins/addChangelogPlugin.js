const {addPlugin} = require('../helpers/addPlugin');

const defaults = {
  changelogTitle: '# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
};

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addChangelogPlugin = (options = {}) => addPlugin(
  '@semantic-release/changelog',
  options,
  defaults,
);

module.exports = {addChangelogPlugin, changelogPluginDefaults: defaults};
