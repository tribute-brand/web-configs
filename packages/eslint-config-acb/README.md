# eslint-config-acb

This plugin provides ACB's `.eslintrc` as an extensible shared config, based on Airbnb's
[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Installation

The plugin requires `eslint`, `babel-eslint`, and the following other packages:

- `eslint-plugin-extra-rules`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-jsx-control-statements`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

If you don't need React, see [eslint-config-acb-base](https://github.com/acolorbright/acb-tools-and-config/tree/main/packages/eslint-config-acb-base). For React with TypeScript see [eslint-config-acb-react-typescript](https://github.com/acolorbright/acb-tools-and-config/tree/main/packages/eslint-config-acb-react-typescript).

```shell
$ npx install-peerdeps -D @acolorbright/eslint-config-acb && npm install -DE @acolorbright/eslint-config-acb@latest
```

Then add `"extends": "@acolorbright/eslint-config-acb"` to your `.eslintrc` file.

Since `install-peerdeps` doesn't have a flag to pin the exact version of the installed peer dependencies it's advisable to pin the installed versions in `package.json` by hand.
