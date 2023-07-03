# ACB tools

This repo contains ACB's tools and configs used in development

## Installation

```
npm install
```

## Usage

For more information see [Lerna documentation](https://lerna.js.org/docs/introduction)

### Adding dependencies

In order to add a local or remote dependency for a specific package run `npm install <dependency> -w=<target_package>`

### Removing dependencies

In order to add a local or remote dependency for a specific package run `npm uninstall <dependency> -w=<target_package>`

#### Removing dependencies issue

When using linked packages, the method for removing dependencies mentioned here sometimes throws an error. This is a bug in `lerna` that happens because local dependencies get removed from `package-lock.json` which then throws an error when running `npm uninstall`.

The solution to this is deleting the target package's local `package-lock.json`, and then running the aforementioned command.

For more info see the provided links:\
https://github.com/lerna/lerna/issues/1886#issuecomment-718880049 \
https://github.com/lfre/lerna-add-remove-issue

### Testing

In order to run eslint tests on all packages run `npx lerna run test`, this runs `npm run test` on each package.

For more info on `lerna run` check [the docs](https://github.com/lerna/lerna/tree/main/libs/commands/run#readme)

### Publishing

To publish all changes run `npx lerna publish`.

Packages are published using [Independent mode](https://lerna.js.org/docs/features/version-and-publish#independent-mode)

You have to be logged into `npm` from within the terminal in order for the changes to be published to the registry.
If this part fails you can retry publishing it by running `npx lerna publish from-package`. It will compare the package versions in `package.json` to the ones in the registry. If they don't match it will trigger the publish.
