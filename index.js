const {addCommitAnalyzerPlugin, addReleaseNotesGeneratorPlugin, addChangelogPlugin} = require('./src/plugins');

module.exports = {
  preset: 'conventionalcommits',
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'master',
    'main',
    {name: 'beta', prerelease: true},
    {name: 'alpha', prerelease: true},
  ],
  plugins: [
    addCommitAnalyzerPlugin(),
    addReleaseNotesGeneratorPlugin(),
    addChangelogPlugin(),
  ],
};
