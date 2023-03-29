# eslint-config

This plugin provides ACB's base TypeScript `.eslintrc` (without React plugins) as an extensible shared config, based on Airbnb's
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and [@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/blob/1c1b572c3000d72cfe665b7afbada0ec415e7855/packages/eslint-plugin/src/configs/recommended.ts).

## Installation

The plugin requires `eslint`, `typescript` and the following other packages:

- `@mizdra/eslint-plugin-layout-shift`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-plugin-extra-rules`
- `eslint-plugin-import`

```shell
$ npx install-peerdeps -D @acolorbright/eslint-config-ts && npm install -DE @acolorbright/eslint-config-ts@latest
```

Then add `"extends": "@acolorbright/eslint-config-ts"` to your `.eslintrc` file.

Since `install-peerdeps` doesn't have a flag to pin the exact version of the installed peer dependencies it's advisable to pin the installed versions in `package.json` by hand.

`eslint-plugin-import@^2.22.1` is a necessary minimum version for `'import/no-cycle': ['error', { maxDepth: '∞' }]` in `rules/imports.js` to work
