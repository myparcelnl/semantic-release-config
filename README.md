# MyParcel semantic-release configuration

This package contains multiple semantic-release presets. Additional information, documentation and guides on
semantic-release can be found on https://eslint.org/

![Version on NPM](https://img.shields.io/npm/v/@myparcel/semantic-release-config)

## Usage

Install the package via npm:

```
$ npm i -D @myparcel/semantic-release-config
```

Create a [semantic-release config file], if you haven't already, and add the following: (JavaScript example)

```js
// release.config.js
module.exports = {
  extends: '@myparcel/semantic-release-config',
};
```

Or to use one of the other available presets:

```js
// release.config.js
module.exports = {
  extends: '@myparcel/semantic-release-config/npm',
};
```    

## Configurations

### Base config

> `@myparcel/semantic-release-config`

This is the base configuration, which other ones should be based on. For more in-depth information on the configurations
used with each plugin, see `./src/plugins/<plugin>.js`.

- [@semantic-release/commit-analyzer]
- [@semantic-release/release-notes-generator]
- [@semantic-release/changelog]

### NPM

> `@myparcel/semantic-release-config/npm`

- [Base plugins](#Base config)
- [@semantic-release/github]
- [@semantic-release/git]

### GitHub

> `@myparcel/semantic-release-config/github`

- [Base plugins](#Base config)
- [@semantic-release/github]
- [@semantic-release/git]

[semantic-release config file]: https://semantic-release.gitbook.io/semantic-release/usage/configuration
[@semantic-release/changelog]: https://github.com/semantic-release/changelog
[@semantic-release/commit-analyzer]: https://github.com/semantic-release/commit-analyzer
[@semantic-release/git]: https://github.com/semantic-release/git
[@semantic-release/github]: https://github.com/semantic-release/github
[@semantic-release/npm]: https://github.com/semantic-release/npm
[@semantic-release/release-notes-generator]: https://github.com/semantic-release/release-notes-generator
