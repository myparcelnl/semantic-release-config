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
        verifyReleaseCmd: `
          echo "last-version=\${lastRelease.version}" >> $GITHUB_OUTPUT
          echo "next-version=\${nextRelease.version}" >> $GITHUB_OUTPUT
          echo "release-type=\${nextRelease.type}" >> $GITHUB_OUTPUT
        `
          .trim()
          .split('\n')
          .filter(Boolean)
          .map((line) => line.trim())
          .join(' && '),
      },
    ],
    addReleaseNotesGeneratorPlugin(),
    addChangelogPlugin(),
  ],
};
