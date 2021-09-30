const {addCommitAnalyzerPlugin, addReleaseNotesGeneratorPlugin, addChangelogPlugin} = require('./src/plugins');

module.exports = {
  preset: 'conventionalcommits',
  plugins: [
    addCommitAnalyzerPlugin(),
    addReleaseNotesGeneratorPlugin(),
    addChangelogPlugin(),
  ],
};
