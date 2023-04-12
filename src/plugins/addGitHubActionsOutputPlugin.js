function addGitHubActionsOutputPlugin() {
  return [
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
  ];
}

module.exports = {addGitHubActionsOutputPlugin};
