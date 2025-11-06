# MyParcel semantic-release configuration

[![npm](https://img.shields.io/npm/v/@myparcel-dev/semantic-release-config)](https://www.npmjs.com/package/@myparcel-dev/semantic-release-config/)

This package contains multiple semantic-release presets. Additional information, documentation and guides on
semantic-release can be found [here](https://github.com/semantic-release/semantic-release)

## Usage

Install the package via yarn:

```
yarn add -D @myparcel-dev/semantic-release-config
```

or npm:

```
npm i -D @myparcel-dev/semantic-release-config
```

Create a [semantic-release config file], if you haven't already, and add the following: (JavaScript example)

```js
// release.config.js
module.exports = {
  extends: '@myparcel-dev/semantic-release-config',
};
```

Or to use one of the other available presets:

```js
// release.config.js
module.exports = {
  extends: '@myparcel-dev/semantic-release-config/npm',
};
```

## Configurations

### Base config

> `@myparcel-dev/semantic-release-config`

This is the base configuration, which other ones should be based on. For more in-depth information on the configurations
used with each plugin, see `./src/plugins/<plugin>.js`.

- [@semantic-release/commit-analyzer]
- [@semantic-release/release-notes-generator]
- [@semantic-release/changelog]

### NPM

> `@myparcel-dev/semantic-release-config/npm`

- [Base plugins](#base-config)
- [@semantic-release/npm]

### Composer

> `@myparcel-dev/semantic-release-config/composer`

- [Base plugins](#base-config)
- [@iwavesmedia/semantic-release-composer]
- [@semantic-release/npm]

### GitHub

> `@myparcel-dev/semantic-release-config/github`

- [Base plugins](#base-config)
- [@semantic-release/github]
- [@semantic-release/git]

### GitHub + Composer

> `@myparcel-dev/semantic-release-config/github-composer`

- [Base plugins](#base-config)
- [@iwavesmedia/semantic-release-composer]
- [@semantic-release/github]
- [@semantic-release/git]

### GitHub + NPM

> `@myparcel-dev/semantic-release-config/github-npm`

- [Base plugins](#base-config)
- [@semantic-release/npm]
- [@semantic-release/github]
- [@semantic-release/git]

## Debugging

You can run the following command in your project to test your semantic-release configuration:

```shell
npx semantic-release --dry-run --debug --branches=$(git branch --show-current)
```

Flags used:

- `--dry-run`: If this is on, no files are changed and nothing is actually "released".
- `--debug`: Enables debug mode to show a lot more output.
- `--branches`: Set the current branch as a release branch. If you don't pass this and are not on a release branch
  semantic-release will not process your commits.

[@iwavesmedia/semantic-release-composer]: https://github.com/ambimax/semantic-release-composer#readme
[@semantic-release/changelog]: https://github.com/semantic-release/changelog
[@semantic-release/commit-analyzer]: https://github.com/semantic-release/commit-analyzer
[@semantic-release/git]: https://github.com/semantic-release/git
[@semantic-release/github]: https://github.com/semantic-release/github
[@semantic-release/npm]: https://github.com/semantic-release/npm
[@semantic-release/release-notes-generator]: https://github.com/semantic-release/release-notes-generator
[semantic-release config file]: https://semantic-release.gitbook.io/semantic-release/usage/configuration
