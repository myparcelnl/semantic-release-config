const {addChangelogPlugin} = require('./addChangelogPlugin');
const {addCommitAnalyzerPlugin} = require('./addCommitAnalyzerPlugin');
const {addComposerPlugin} = require('./addComposerPlugin');
const {addExecPlugin} = require('./addExecPlugin');
const {addGitHubActionsOutputPlugin} = require('./addGitHubActionsOutputPlugin');
const {addGitHubPlugin} = require('./addGitHubPlugin');
const {addGitPlugin} = require('./addGitPlugin');
const {addNpmPlugin} = require('./addNpmPlugin');
const {addReleaseNotesGeneratorPlugin} = require('./addReleaseNotesGeneratorPlugin');

module.exports = {
  addChangelogPlugin,
  addCommitAnalyzerPlugin,
  addComposerPlugin,
  addExecPlugin,
  addGitHubActionsOutputPlugin,
  addGitHubPlugin,
  addGitPlugin,
  addNpmPlugin,
  addReleaseNotesGeneratorPlugin,
};
