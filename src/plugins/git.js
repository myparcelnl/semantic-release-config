const git = [
  '@semantic-release/git',
  {
    message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
  },
];

module.exports = {git};
