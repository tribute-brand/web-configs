# eslint-config-acb-base

This plugin provides ACB's base JS `.eslintrc` (without React plugins) as an extensible shared config, based on Airbnb's
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).

## Installation

The plugin requires `eslint`, `babel-eslint`, and the following other packages:

- `eslint-plugin-extra-rules`
- `eslint-plugin-import`

```shell
$ npx install-peerdeps -D @acolorbright/eslint-config-acb-base && npm install -DE @acolorbright/eslint-config-acb-base@latest
```

Then add `"extends": "@acolorbright/eslint-config-acb-base"` to your `.eslintrc` file.

Since `install-peerdeps` doesn't have a flag to pin the exact version of the installed peer dependencies it's advisable to pin the installed versions in `package.json` by hand.

`eslint-plugin-import@^2.22.1` is a necessary minimum version for `'import/no-cycle': ['error', { maxDepth: '∞' }]` in `rules/imports.js` to work
