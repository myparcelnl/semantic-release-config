const assert = require('node:assert/strict');
const {describe, it} = require('node:test');
const baseConfig = require('../index');
const {addGitPlugin} = require('../src/plugins');
const {dependencies} = require('../package.json');

/**
 * Guards every exported config: which plugins it composes, in what order, and that each plugin
 * package it names is a dependency a consumer gets on install.
 */

const BASE_PLUGINS = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/exec',
  '@semantic-release/release-notes-generator',
  '@semantic-release/changelog',
];

const NPM_RELEASE_PLUGINS = ['@semantic-release/npm', '@semantic-release/github', '@semantic-release/git'];

const CONFIGS = [
  {name: 'index', config: baseConfig, plugins: BASE_PLUGINS},
  {name: 'npm', config: require('../npm'), plugins: [...BASE_PLUGINS, '@semantic-release/npm']},
  {
    name: 'github',
    config: require('../github'),
    plugins: [...BASE_PLUGINS, '@semantic-release/github', '@semantic-release/git'],
  },
  {name: 'github-npm', config: require('../github-npm'), plugins: [...BASE_PLUGINS, ...NPM_RELEASE_PLUGINS]},
  {
    name: 'composer',
    config: require('../composer'),
    plugins: [...BASE_PLUGINS, '@iwavesmedia/semantic-release-composer'],
  },
  {
    name: 'github-composer',
    config: require('../github-composer'),
    plugins: [
      ...BASE_PLUGINS,
      '@iwavesmedia/semantic-release-composer',
      '@semantic-release/github',
      '@semantic-release/git',
    ],
  },
  {name: 'release.config', config: require('../release.config'), plugins: [...BASE_PLUGINS, ...NPM_RELEASE_PLUGINS]},
];

for (const {name, config, plugins} of CONFIGS) {
  describe(name, () => {
    it('composes its plugins in order', () => {
      assert.deepEqual(
        config.plugins.map(([pluginName]) => pluginName),
        plugins,
      );
    });

    it('passes every plugin as a [name, options] pair', () => {
      for (const [pluginName, options] of config.plugins) {
        assert.equal(typeof pluginName, 'string');
        assert.equal(typeof options, 'object', `${pluginName} has no options object`);
      }
    });

    it('names only plugin packages that ship as a dependency', () => {
      for (const [pluginName] of config.plugins) {
        assert.ok(pluginName in dependencies, `${pluginName} is missing from dependencies`);
        assert.doesNotThrow(() => require.resolve(pluginName), `${pluginName} does not resolve`);
      }
    });

    if (config !== baseConfig) {
      it('inherits the branches and the preset from the base config', () => {
        assert.deepEqual(config.branches, baseConfig.branches);
        assert.equal(config.preset, baseConfig.preset);
      });
    }
  });
}

describe('plugin factories', () => {
  it('lets an option override a default', () => {
    const [, options] = addGitPlugin({message: 'chore: release'});

    assert.equal(options.message, 'chore: release');
  });

  it('keeps the defaults an option does not replace', () => {
    const [, options] = addGitPlugin({message: 'chore: release'});

    assert.ok(options.assets.includes('CHANGELOG.md'));
  });

  it('returns a fresh options object per call, so an override cannot leak', () => {
    const [, overridden] = addGitPlugin({message: 'chore: release'});
    const [, plain] = addGitPlugin();

    assert.notEqual(overridden, plain);
    assert.notEqual(plain.message, 'chore: release');
  });
});
