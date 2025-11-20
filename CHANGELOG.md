# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.0.5](https://github.com/myparcelnl/semantic-release-config/compare/v6.0.4...v6.0.5) (2025-11-20)


### :bug: Bug Fixes

* use NPM_TOKEN_NEW for publishing ([d9c39f8](https://github.com/myparcelnl/semantic-release-config/commit/d9c39f8a1193a0f2ff21e9051a98502fac61689c))

## [6.0.4](https://github.com/myparcelnl/semantic-release-config/compare/v6.0.3...v6.0.4) (2025-11-20)


### :bug: Bug Fixes

* include all .js config files in npm package ([b5cc1e5](https://github.com/myparcelnl/semantic-release-config/commit/b5cc1e5c3287e57d54525d5992278f9652582231))

## [6.0.3](https://github.com/myparcelnl/semantic-release-config/compare/v6.0.2...v6.0.3) (2025-11-06)


### Bug Fixes

* make deprecation workflow skip missing packages ([9a3dd87](https://github.com/myparcelnl/semantic-release-config/commit/9a3dd87b2b982f8e728aa687298f025582b8f7c1))

## [6.0.2](https://github.com/myparcelnl/semantic-release-config/compare/v6.0.1...v6.0.2) (2025-11-06)


### Bug Fixes

* update README on NPM ([53a8f6b](https://github.com/myparcelnl/semantic-release-config/commit/53a8f6b2a5cd34c296ed5125770c936cefe668f1))

## [6.0.1](https://github.com/myparcelnl/semantic-release-config/compare/v6.0.0...v6.0.1) (2025-11-06)


### Bug Fixes

* use GitHub App token for protected branch access ([27008e1](https://github.com/myparcelnl/semantic-release-config/commit/27008e17535e25da922e97e8fc02122936555136))

# [6.0.0](https://github.com/myparcelnl/semantic-release-config/compare/v5.1.0...v6.0.0) (2025-11-06)


### Features

* migrate to [@myparcel-dev](https://github.com/myparcel-dev) scope ([#62](https://github.com/myparcelnl/semantic-release-config/issues/62)) ([c92ca98](https://github.com/myparcelnl/semantic-release-config/commit/c92ca98cc3e263458171fa2c9f56527a4aa7a9ad))


### BREAKING CHANGES

* Package name changed from @myparcel/semantic-release-config to @myparcel-dev/semantic-release-config

- Added .releaserc.json for bootstrap (temporary, remove after first publish)

- Added GitHub Actions workflow for automated releases

- Fixed self-referencing extends in preset files

* fix: update workflow for yarn and dual-publish

Changed npm ci to yarn install --immutable

* feat: add deprecation workflow and simplify release

Added workflow to deprecate all 57 old scope packages

Removed dual-publish from release workflow

Old packages will show deprecation notice on NPM

# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.1.0](https://github.com/myparcelnl/semantic-release-config/compare/v5.0.1...v5.1.0) (2025-03-31)


### :sparkles: New Features

* allow refactor/build types to trigger a release ([f9027f6](https://github.com/myparcelnl/semantic-release-config/commit/f9027f6a39388e613e6aa5f7749e1f35d835bc3d))

## [5.0.1](https://github.com/myparcelnl/semantic-release-config/compare/v5.0.0...v5.0.1) (2024-02-14)


### :bug: Bug Fixes

* pass conventionalcommits preset to commit analyzer and release notes generator ([9852e4b](https://github.com/myparcelnl/semantic-release-config/commit/9852e4b9d05601d821791ae83f322be570e23c84))

## [5.0.0](https://github.com/myparcelnl/semantic-release-config/compare/v4.3.0...v5.0.0) (2023-04-12)


### ⚠ BREAKING CHANGES

* **deps:** update semantic-release to v21.0.0
* **deps:** update @semantic-release/npm to v9.0.0

* **deps:** update dependencies ([1c86a4d](https://github.com/myparcelnl/semantic-release-config/commit/1c86a4dd162d94a77722577906767d2cdfcd2fd6))

## [4.3.0](https://github.com/myparcelnl/semantic-release-config/compare/v4.2.3...v4.3.0) (2023-04-12)


### :sparkles: New Features

* move github actions snippet to separate plugin ([24ba30a](https://github.com/myparcelnl/semantic-release-config/commit/24ba30ac32e4d004277c9f1dc9da1b1dffba555e))

## [4.2.3](https://github.com/myparcelnl/semantic-release-config/compare/v4.2.2...v4.2.3) (2023-02-06)


### :bug: Bug Fixes

* use correct version branch regex ([7f536aa](https://github.com/myparcelnl/semantic-release-config/commit/7f536aaabc4506eee1af760c11fb9c6c20ba331a))

## [4.2.2](https://github.com/myparcelnl/semantic-release-config/compare/v4.2.1...v4.2.2) (2023-01-25)


### :bug: Bug Fixes

* only use github_output if possible ([38b782e](https://github.com/myparcelnl/semantic-release-config/commit/38b782ed624116c879e8386861c8ba514f757faf))

## [4.2.1](https://github.com/myparcelnl/semantic-release-config/compare/v4.2.0...v4.2.1) (2023-01-24)


### :bug: Bug Fixes

* update github outputs ([ef0d84a](https://github.com/myparcelnl/semantic-release-config/commit/ef0d84a65409a428c255e1d3bac3ea2e5d7f10bd))

## [4.2.0](https://github.com/myparcelnl/semantic-release-config/compare/v4.1.0...v4.2.0) (2023-01-24)


### :sparkles: New Features

* add output for github actions if new version is released ([5ab30cf](https://github.com/myparcelnl/semantic-release-config/commit/5ab30cf61ea6b6acd95fad34f57ccba6364a375e))

## [4.1.0](https://github.com/myparcelnl/semantic-release-config/compare/v4.0.0...v4.1.0) (2022-12-07)


### :sparkles: New Features

* treat next and rc branches as prerelease ([6a7fb83](https://github.com/myparcelnl/semantic-release-config/commit/6a7fb8378c342694c5a1c7d90f94d01dac3cb755))

## [3.1.0](https://github.com/myparcelnl/semantic-release-config/compare/v3.0.1...v3.1.0) (2022-06-15)


### :sparkles: New Features

* export default settings for plugins ([253bad5](https://github.com/myparcelnl/semantic-release-config/commit/253bad5240c693de08fd68a4405628f845e5685c))

### [3.0.1](https://github.com/myparcelnl/semantic-release-config/compare/v3.0.0...v3.0.1) (2022-06-15)


### :bug: Bug Fixes

* **git:** add yarn and pnpm lockfiles to default assets ([3732b6d](https://github.com/myparcelnl/semantic-release-config/commit/3732b6d2e53d5c82902d1d822e537f1d4083c26c))

## [3.0.0](https://github.com/myparcelnl/semantic-release-config/compare/v2.0.0...v3.0.0) (2022-05-18)


### ⚠ BREAKING CHANGES

* backmerge plugin was removed

* update dependencies ([959d3ab](https://github.com/myparcelnl/semantic-release-config/commit/959d3ab8e220683299de830deb5a31c036232aa1))

## [2.0.0](https://github.com/myparcelnl/semantic-release-config/compare/v1.4.0...v2.0.0) (2022-01-14)


### ⚠ BREAKING CHANGES

* **composer:** remove git plugin

### :bug: Bug Fixes

* **composer:** remove git plugin ([1b5e842](https://github.com/myparcelnl/semantic-release-config/commit/1b5e842afaf7c290ad2bb1eca897320ee4f52f71))

## [1.4.0](https://github.com/myparcelnl/semantic-release-config/compare/v1.3.2...v1.4.0) (2022-01-14)


### :sparkles: New Features

* add github-composer config ([ea83dac](https://github.com/myparcelnl/semantic-release-config/commit/ea83dacbd91909e34cafb4a67969153c691ed279))
* add github-npm config ([01475eb](https://github.com/myparcelnl/semantic-release-config/commit/01475eb1e0675292afbb20b324795fbfcc1484df))

### [1.3.2](https://github.com/myparcelnl/semantic-release-config/compare/v1.3.1...v1.3.2) (2022-01-10)


### :bug: Bug Fixes

* use correct base properties ([9466bb4](https://github.com/myparcelnl/semantic-release-config/commit/9466bb4fded23ef9eabd6145d1a26e8b9d7165ba))

### [1.3.1](https://github.com/myparcelnl/semantic-release-config/compare/v1.3.0...v1.3.1) (2021-12-31)


### :bug: Bug Fixes

* **composer:** add missing properties from main config ([afe6058](https://github.com/myparcelnl/semantic-release-config/commit/afe605858dfdca7a96aca6e8f3971225da93a57b))

## [1.3.0](https://github.com/myparcelnl/semantic-release-config/compare/v1.2.3...v1.3.0) (2021-12-31)


### :sparkles: New Features

* add composer preset ([dfbfa9f](https://github.com/myparcelnl/semantic-release-config/commit/dfbfa9f2182aa1c960bb793a455be5ec1fde406c))

### [1.2.3](https://github.com/myparcelnl/semantic-release-config/compare/v1.2.2...v1.2.3) (2021-10-04)


### :bug: Bug Fixes

* add main to release branches ([1205c15](https://github.com/myparcelnl/semantic-release-config/commit/1205c15f4729a3864af8ca61898a76be666ebe3d))

## [1.2.2](https://github.com/myparcelnl/semantic-release-config/compare/v1.2.1...v1.2.2) (2021-09-30)


### Bug Fixes

* **git:** add composer files to assets committed by default ([8156f1f](https://github.com/myparcelnl/semantic-release-config/commit/8156f1fc0e20f3d577ee2c53d8724be1556556a4))





## [1.2.2](https://github.com/myparcelnl/semantic-release-config/compare/v1.2.1...v1.2.2) (2021-09-30)


### Bug Fixes

* **git:** add composer files to assets committed by default ([8156f1f](https://github.com/myparcelnl/semantic-release-config/commit/8156f1fc0e20f3d577ee2c53d8724be1556556a4))

## [1.2.2](https://github.com/myparcelnl/semantic-release-config/compare/v1.2.1...v1.2.2) (2021-09-30)


### Bug Fixes

* **git:** add composer files to assets committed by default ([8156f1f](https://github.com/myparcelnl/semantic-release-config/commit/8156f1fc0e20f3d577ee2c53d8724be1556556a4))





## [1.2.2](https://github.com/myparcelnl/semantic-release-config/compare/v1.2.1...v1.2.2) (2021-09-30)


### Bug Fixes

* **git:** add composer files to assets committed by default ([8156f1f](https://github.com/myparcelnl/semantic-release-config/commit/8156f1fc0e20f3d577ee2c53d8724be1556556a4))

## [1.2.1](https://github.com/myparcelnl/semantic-release-config/compare/v1.2.0...v1.2.1) (2021-09-30)


### Bug Fixes

* **backmerge:** set clearWorkspace to true in defaults ([625787b](https://github.com/myparcelnl/semantic-release-config/commit/625787b6d5e79daf0f8c50a166e194ca5ace5ccd))





## [1.2.1](https://github.com/myparcelnl/semantic-release-config/compare/v1.2.0...v1.2.1) (2021-09-30)


### Bug Fixes

* **backmerge:** set clearWorkspace to true in defaults ([625787b](https://github.com/myparcelnl/semantic-release-config/commit/625787b6d5e79daf0f8c50a166e194ca5ace5ccd))

## [1.2.1](https://github.com/myparcelnl/semantic-release-config/compare/v1.2.0...v1.2.1) (2021-09-30)


### Bug Fixes

* **backmerge:** set clearWorkspace to true in defaults ([625787b](https://github.com/myparcelnl/semantic-release-config/commit/625787b6d5e79daf0f8c50a166e194ca5ace5ccd))





## [1.2.1](https://github.com/myparcelnl/semantic-release-config/compare/v1.2.0...v1.2.1) (2021-09-30)


### Bug Fixes

* **backmerge:** set clearWorkspace to true in defaults ([625787b](https://github.com/myparcelnl/semantic-release-config/commit/625787b6d5e79daf0f8c50a166e194ca5ace5ccd))

## [1.2.0](https://github.com/myparcelnl/semantic-release-config/compare/v1.1.0...v1.2.0) (2021-09-30)


### :sparkles: New Features

* use functions for plugins ([c7cf7f1](https://github.com/myparcelnl/semantic-release-config/commit/c7cf7f12e57b61f29c7168812356a24812d6d3b9))

## [1.1.0](https://github.com/myparcelnl/semantic-release-config/compare/v1.0.0...v1.1.0) (2021-09-29)


### :bug: Bug Fixes

* move dependency accidentally marked as dev ([39743f0](https://github.com/myparcelnl/semantic-release-config/commit/39743f0113e785ad85ec682c54cae0e970ef7610))
* move dependency accidentally marked as dev ([4c5c689](https://github.com/myparcelnl/semantic-release-config/commit/4c5c6891ed30bfecf2280b0ac442d822025b8232))


### :sparkles: New Features

* add backmerge plugin ([4351f1a](https://github.com/myparcelnl/semantic-release-config/commit/4351f1a1881bbc41960897baeaff18f68d48f237))

## 1.0.0 (2021-09-29)


### :sparkles: New Features

* add initial set of configurations ([f93c695](https://github.com/myparcelnl/semantic-release-config/commit/f93c695bf572a4c98387458e8843c6f12a3f105e))
