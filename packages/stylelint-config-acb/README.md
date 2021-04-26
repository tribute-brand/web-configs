# stylelint-config-acb

Stylelint config providing ACB's standard linting setup for styles.

## Installation

```bash
$ npx install-peerdeps -D @acolorbright/stylelint-config-acb && npm install -DE @acolorbright/stylelint-config-acb@latest
```

Since `install-peerdeps` doesn't have a flag to pin the exact version of the installed peer dependencies it's advisable to pin the installed versions in `package.json` by hand.

## Usage

To start using this configuration, simply extend this package in your Stylelint configuration.

```js
{
  "extends": "@acolorbright/stylelint-config-acb",
  "rules": {
    // Add additional rules here
  }
}
```

For more information on configuring Stylelint, check out the [configuration](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md) guide.

## Property Ordering

Property ordering is performed according to the [SMACSS](http://smacss.com) methodology.

Refer to [here](https://github.com/cahamilton/css-property-sort-order-smacss/blob/master/index.js) for the comprehensive list of property orders.
