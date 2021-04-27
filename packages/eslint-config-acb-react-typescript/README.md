# eslint-config-acb-react-typescript

This plugin provides ACB's `.eslintrc` as an extensible shared config, based on Airbnb's
[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Installation

The plugin requires `eslint` and the following other packages:

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-plugin-extra-rules`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `prettier`
- `typescript`

```shell
$ npx install-peerdeps -D @acolorbright/eslint-config-acb-react-typescript && npm install -DE @acolorbright/eslint-config-acb-react-typescript@latest
```

Then add `"extends": "@acolorbright/eslint-config-acb-react-typescript"` to your `.eslintrc` file.

Since `install-peerdeps` doesn't have a flag to pin the exact version of the installed peer dependencies it's advisable to pin the installed versions in `package.json` by hand.
