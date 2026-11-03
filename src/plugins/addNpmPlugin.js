const {addPlugin} = require('../helpers/addPlugin');

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addNpmPlugin = (options = {}) => addPlugin('@anolilab/semantic-release-pnpm', options);

module.exports = {addNpmPlugin};
