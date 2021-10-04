const baseConfig = require('./index');
const {
  addNpmPlugin, addCommitAnalyzerPlugin, addReleaseNotesGeneratorPlugin, addChangelogPlugin, addGitHubPlugin,
  addGitPlugin,
} = require('./src/plugins');

module.exports = {
  ...baseConfig,
  extends: null,
  plugins: [
    addCommitAnalyzerPlugin(),
    addReleaseNotesGeneratorPlugin(),
    addChangelogPlugin(),
    addNpmPlugin(),
    addGitHubPlugin(),
    addGitPlugin(),
  ],
};
