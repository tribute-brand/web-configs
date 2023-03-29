# eslint-config-react

This plugin provides ACB's `.eslintrc` as an extensible shared config, based on Airbnb's
[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Installation

The plugin requires `eslint`, `@babel/core`, `@babel/eslint-parser`, and the following other packages:

- `@mizdra/eslint-plugin-layout-shift`
- `eslint-plugin-extra-rules`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-jsx-control-statements`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-simple-import-sort`

If you don't need React, see [eslint-config](https://github.com/acolorbright/acb-tools-and-config/tree/main/packages/eslint-config). For React with TypeScript see [eslint-config-ts-react](https://github.com/acolorbright/acb-tools-and-config/tree/main/packages/eslint-config-ts-react).

```shell
$ npx install-peerdeps -D @acolorbright/eslint-config-react && npm install -DE @acolorbright/eslint-config-react@latest
```

Then add `"extends": "@acolorbright/eslint-config-react"` to your `.eslintrc` file.

Since `install-peerdeps` doesn't have a flag to pin the exact version of the installed peer dependencies it's advisable to pin the installed versions in `package.json` by hand.
