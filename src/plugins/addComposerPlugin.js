const {addPlugin} = require('../helpers/addPlugin');

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addComposerPlugin = (options = {}) => addPlugin(
  '@ambimax/semantic-release-composer',
  options,
);

module.exports = {addComposerPlugin};
