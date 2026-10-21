const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {describe, it} = require('node:test');
const {plugins} = require('../index');

/**
 * Guards how breaking changes are read from commit messages and which commit types the release notes hide.
 */

const getPlugin = (name) => plugins.find(([pluginName]) => pluginName === require.resolve(name));
const getOptions = (name) => getPlugin(name)[1];

const analyzerOptions = getOptions('@semantic-release/commit-analyzer');
const notesOptions = getOptions('@semantic-release/release-notes-generator');

const createContext = (message) => ({
  commits: [{hash: 'abc1234', message}],
  logger: {log: () => undefined, error: () => undefined},
  cwd: process.cwd(),
  options: {repositoryUrl: 'https://github.com/myparcelnl/example'},
  lastRelease: {gitTag: 'v1.0.0', version: '1.0.0'},
  nextRelease: {gitTag: 'v1.1.0', version: '1.1.0'},
});

const analyze = async (message) => {
  const {analyzeCommits} = await import(getPlugin('@semantic-release/commit-analyzer')[0]);

  return analyzeCommits(analyzerOptions, createContext(message));
};

const generate = async (message) => {
  const {generateNotes} = await import(getPlugin('@semantic-release/release-notes-generator')[0]);

  return generateNotes(notesOptions, createContext(message));
};

describe('breaking changes', () => {
  it('ignores "breaking change" wrapped into the body of a docs commit', async () => {
    const message = fs.readFileSync(path.join(__dirname, 'fixtures', 'sdk-672-commit.txt'), 'utf8');

    assert.equal(await analyze(message), null);
    assert.doesNotMatch(await generate(message), /BREAKING CHANGES/);
  });

  it('reads a breaking change from a footer', async () => {
    const message = 'fix: drop the old endpoint\n\nBREAKING CHANGE: removes /v1/orders';

    assert.equal(await analyze(message), 'major');

    const notes = await generate(message);

    assert.match(notes, /BREAKING CHANGES/);
    assert.match(notes, /removes \/v1\/orders/);
  });

  it('reads a breaking change from the header', async () => {
    assert.equal(await analyze('feat!: rename the client'), 'major');
  });
});

describe('release notes', () => {
  it('hides internal types in the notes', async () => {
    const notes = await generate('chore: tidy up');
    const docsNotes = await generate('docs: fix a typo');

    assert.doesNotMatch(notes, /tidy up/);
    assert.doesNotMatch(docsNotes, /fix a typo/);
  });

  it('marks internal types with effect hidden', () => {
    const {types} = notesOptions.presetConfig;

    for (const type of ['chore', 'docs', 'refactor', 'style', 'test']) {
      assert.equal(types.find((entry) => entry.type === type).effect, 'hidden');
    }

    assert.ok(types.every((entry) => !('hidden' in entry)));
  });
});

describe('plugin copies', () => {
  it("loads its own plugin copies, not semantic-release's", () => {
    const versions = {
      '@semantic-release/commit-analyzer': '14.0.0-beta.4',
      '@semantic-release/release-notes-generator': '15.0.0-beta.3',
    };

    for (const [name, version] of Object.entries(versions)) {
      const [entry] = getPlugin(name);
      const manifest = JSON.parse(fs.readFileSync(path.join(path.dirname(entry), 'package.json'), 'utf8'));

      assert.equal(entry, require.resolve(name));
      assert.equal(manifest.version, version);
    }
  });
});
