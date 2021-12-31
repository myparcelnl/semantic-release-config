const {addPlugin} = require('../helpers/addPlugin');

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addComposerPlugin = (options = {}) => addPlugin(
  '@iwavesmedia/semantic-release-composer',
  options,
);

module.exports = {addComposerPlugin};
