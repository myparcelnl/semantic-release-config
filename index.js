const {changelog} = require('./src/plugins/changelog');
const {commitAnalyzer} = require('./src/plugins/commitAnalyzer');
const {releaseNotesGenerator} = require('./src/plugins/releaseNotesGenerator');

module.exports = {
  preset: 'conventionalcommits',
  plugins: [
    commitAnalyzer,
    releaseNotesGenerator,
    changelog,
  ],
};
