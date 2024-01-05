# Web Configs

This repo contains Tribute Brand's configs used in development
It was forked from https://github.com/acolorbright/acb-tools-and-configs

## Installation

```
npm install
```

## Usage

For more information see [Lerna documentation](https://lerna.js.org/docs/introduction)

### Adding dependencies

In order to add a local or remote dependency for a specific package run `npm install <dependency> -w <target_package>`

### Removing dependencies

In order to remove a local or remote dependency for a specific package run `npm uninstall <dependency> -w <target_package>`

### Testing

In order to run eslint tests on all packages run `npx lerna run test`, this runs `npm run test` on each package.

For more info on `lerna run` check [the docs](https://github.com/lerna/lerna/tree/main/libs/commands/run#readme)

### Publishing

To publish all changes run `npx lerna publish`.

Packages are published using [Independent mode](https://lerna.js.org/docs/features/version-and-publish#independent-mode)

You have to be logged into `npm` from within the terminal in order for the changes to be published to the registry.
If this part fails you can retry publishing it by running `npx lerna publish from-package`. It will compare the package versions in `package.json` to the ones in the registry. If they don't match it will trigger the publish.
