# eslint-config

This plugin provides Tribute Brand's base JS `.eslintrc` (without React plugins) as an extensible shared config, based on Airbnb's
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).

## Installation

The plugin requires `eslint`, `@babel/core`, `@babel/eslint-parser` and the following other packages:

- `@mizdra/eslint-plugin-layout-shift`
- `eslint-plugin-extra-rules`
- `eslint-plugin-import`

```shell
$ npx install-peerdeps -D @tributebrand/eslint-config && npm install -DE @tributebrand/eslint-config@latest
```

Then add `"extends": "@tributebrand/eslint-config"` to your `.eslintrc` file.

Since `install-peerdeps` doesn't have a flag to pin the exact version of the installed peer dependencies it's advisable to pin the installed versions in `package.json` by hand.

`eslint-plugin-import@^2.22.1` is a necessary minimum version for `'import/no-cycle': ['error', { maxDepth: '∞' }]` in `rules/imports.js` to work
