const {addCommitAnalyzerPlugin, addReleaseNotesGeneratorPlugin, addChangelogPlugin} = require('./src/plugins');

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
    [
      '@semantic-release/exec',
      {
        verifyReleaseCmd: `sh -c '
          if [ -n "$GITHUB_OUTPUT" ]; then
            echo "last-version=\${lastRelease.version}" >> $GITHUB_OUTPUT
            echo "next-version=\${nextRelease.version}" >> $GITHUB_OUTPUT
            echo "release-type=\${nextRelease.type}" >> $GITHUB_OUTPUT
          fi
        '`,
      },
    ],
    addReleaseNotesGeneratorPlugin(),
    addChangelogPlugin(),
  ],
};
