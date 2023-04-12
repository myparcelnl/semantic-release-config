const {
  addChangelogPlugin,
  addCommitAnalyzerPlugin,
  addGitHubActionsOutputPlugin,
  addReleaseNotesGeneratorPlugin,
} = require('./src/plugins');

module.exports = {
  preset: 'conventionalcommits',
  branches: [
    '(\\d+)(\\.\\d+)?\\.x',
    'master',
    'main',
    {name: 'alpha', prerelease: true},
    {name: 'beta', prerelease: true},
    {name: 'next', prerelease: true},
    {name: 'rc', prerelease: true},
  ],
  plugins: [
    addCommitAnalyzerPlugin(),
    addGitHubActionsOutputPlugin(),
    addReleaseNotesGeneratorPlugin(),
    addChangelogPlugin(),
  ],
};
