const {addPlugin} = require('../helpers/addPlugin');

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addNpmPlugin = (options = {}) => addPlugin('@semantic-release/npm', options);

module.exports = {addNpmPlugin};
