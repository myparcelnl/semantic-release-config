const {addCommitAnalyzerPlugin, addReleaseNotesGeneratorPlugin, addChangelogPlugin} = require('./src/plugins');

module.exports = {
  preset: 'conventionalcommits',
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'master',
    'main',
    {name: 'alpha', prerelease: true},
    {name: 'beta', prerelease: true},
    {name: 'next', prerelease: true},
    {name: 'rc', prerelease: true},
  ],
  plugins: [
    addCommitAnalyzerPlugin(),
    [
      '@semantic-release/exec',
      {
        verifyReleaseCmd: 'echo "version=${nextRelease.version}" >> $GITHUB_OUTPUT',
      },
    ],
    addReleaseNotesGeneratorPlugin(),
    addChangelogPlugin(),
  ],
};
