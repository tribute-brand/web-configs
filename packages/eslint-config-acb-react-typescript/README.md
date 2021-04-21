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
$ npm install --save-dev \
  'acolorbright/eslint-config-acb-react-typescript#v1.0.1' \
  eslint@7.x \
  eslint-plugin-extra-rules@^0.8 \
  eslint-plugin-import@2.x \
  eslint-plugin-jsx-a11y@6.x \
  eslint-plugin-prettier@3.x \
  eslint-plugin-react@7.x \
  eslint-plugin-react-hooks@1.x \
  eslint-plugin-simple-import-sort@7.x \
  prettier@2.x \
  typescript@4.x
```

Then add `"extends": "acb-react-typescript"` to your `.eslintrc` file.
