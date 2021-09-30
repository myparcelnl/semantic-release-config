/**
 * @param {string} plugin
 * @param {Object} options
 * @param {Object} defaults
 * @returns {[string, Object]}
 */
function addPlugin(plugin, options = {}, defaults = null) {
  if (defaults) {
    options = {
      ...defaults,
      ...options,
    };
  }

  return [plugin, options];
}

module.exports = {addPlugin};
