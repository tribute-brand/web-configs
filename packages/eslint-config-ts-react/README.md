# eslint-config-ts-react

This plugin provides Tribute Brand's `.eslintrc` as an extensible shared config, based on Airbnb's
[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Installation

The plugin requires `eslint` and the following other packages:

- `@mizdra/eslint-plugin-layout-shift`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-plugin-extra-rules`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-simple-import-sort`
- `typescript`

```shell
$ npx install-peerdeps -D @tributebrand/eslint-config-ts-react && npm install -DE @tributebrand/eslint-config-ts-react@latest
```

Then add `"extends": "@tributebrand/eslint-config-ts-react"` to your `.eslintrc` file.

Since `install-peerdeps` doesn't have a flag to pin the exact version of the installed peer dependencies it's advisable to pin the installed versions in `package.json` by hand.
