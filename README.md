# MyParcel semantic-release configuration

[![npm](https://img.shields.io/npm/v/@myparcel-dev/semantic-release-config)](https://www.npmjs.com/package/@myparcel-dev/semantic-release-config/)

This package contains multiple semantic-release presets. Additional information, documentation and guides on
semantic-release can be found [here](https://github.com/semantic-release/semantic-release)

## Usage

Install the package with pnpm:

```
pnpm add -D @myparcel-dev/semantic-release-config
```

The `npm` and `github-npm` presets publish with pnpm, through [@anolilab/semantic-release-pnpm], with npm trusted
publishing (OIDC). They need no `NPM_TOKEN`. A repository that uses them needs:

- `id-token: write` in the `permissions` of the release job;
- a `repository` field in `package.json` that names the GitHub repository;
- a trusted publisher for the package on npmjs.com, with the filename of the release workflow and "Allow npm publish".

A repository that does not use pnpm stays on version 7 of this package.

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

## Configuration

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
- [@anolilab/semantic-release-pnpm]

### Composer

> `@myparcel-dev/semantic-release-config/composer`

- [Base plugins](#base-config)
- [@iwavesmedia/semantic-release-composer]

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
- [@anolilab/semantic-release-pnpm]
- [@semantic-release/github]
- [@semantic-release/git]

## A new package

npm accepts a trusted publisher only for a package that already exists on npmjs.com. The first release of a new
package therefore cannot go through the release workflow:

1. Publish the first version from your own machine with `pnpm publish --access public`, logged in with an npm account
   in the `myparcel-dev` organization. npm asks for 2FA.
2. Add the trusted publisher on npmjs.com: GitHub Actions, the repository, the filename of the release workflow, and
   "Allow npm publish". Or run `npm trust github <package> --repo <owner>/<repo> --file <workflow>.yml --allow-publish`
   outside a pnpm repository, because `devEngines` stops npm there.
3. Release through the workflow within 48 hours. A trusted publisher without a successful publish expires after 48
   hours.
4. In the settings of the package on npmjs.com, set "Publishing access" to "Require two-factor authentication and
   disallow tokens". Trusted publishing keeps working with this setting.

## Debugging

You can run the following command in your project to test your semantic-release configuration:

```shell
pnpm exec semantic-release --dry-run --debug --branches=$(git branch --show-current)
```

Flags used:

- `--dry-run`: If this is on, no files are changed and nothing is actually "released".
- `--debug`: Enables debug mode to show a lot more output.
- `--branches`: Set the current branch as a release branch. If you don't pass this and are not on a release branch
  semantic-release will not process your commits.

[@anolilab/semantic-release-pnpm]: https://github.com/anolilab/semantic-release/tree/main/packages/semantic-release-pnpm#readme
[@iwavesmedia/semantic-release-composer]: https://github.com/ambimax/semantic-release-composer#readme
[@semantic-release/changelog]: https://github.com/semantic-release/changelog
[@semantic-release/commit-analyzer]: https://github.com/semantic-release/commit-analyzer
[@semantic-release/git]: https://github.com/semantic-release/git
[@semantic-release/github]: https://github.com/semantic-release/github
[@semantic-release/release-notes-generator]: https://github.com/semantic-release/release-notes-generator
[semantic-release config file]: https://semantic-release.gitbook.io/semantic-release/usage/configuration
