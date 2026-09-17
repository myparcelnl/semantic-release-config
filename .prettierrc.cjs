const config = require('@myparcel-dev/prettier-config');

/**
 * The shared config leaves printWidth at the default 80; this repository is written to 120.
 * Keep the .cjs extension: the `files` glob in package.json is `*.js`, which would publish
 * this file and its devDependency require along with the package.
 */
module.exports = {...config, printWidth: 120};
