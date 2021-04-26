# stylelint-config-property-sort-order-acb

Stylelint config for Property Sort Ordering based on
[stylelint-config-property-sort-order-smacss](https://github.com/cahamilton/stylelint-config-property-sort-order-smacss/),
which uses the [SMACSS](http://smacss.com) methodology.

This config adds empty lines between the SMACSS property groups.

## Installation

```bash
npx install-peerdeps -D @acolorbright/stylelint-config-property-sort-order-acb && npm install -DE @acolorbright/stylelint-config-property-sort-order-acb@latest
```

Since `install-peerdeps` doesn't have a flag to pin the exact version of the installed peer dependencies it's advisable to pin the installed versions in `package.json` by hand.

## Usage

To start using this configuration, simply extend this package in your Stylelint configuration.

```js
{
  "extends": "stylelint-config-property-sort-order-acb",
  "rules": {
    // Add additional rules here
  }
}
```

For more information on configuring Stylelint, check out the [configuration](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md) guide.

## Property Ordering

Refer to [here](https://github.com/cahamilton/css-property-sort-order-smacss/blob/master/index.js) for the comprehensive list of property orders.
