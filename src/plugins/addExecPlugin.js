const {addPlugin} = require('../helpers/addPlugin');

/**
 * @param {Object} options
 *
 * @returns {[string, Object]}
 */
const addExecPlugin = (options = {}) => addPlugin('@semantic-release/exec', options);

module.exports = {addExecPlugin};
