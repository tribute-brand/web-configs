# stylelint-config

Stylelint config providing ACB's standard linting setup for styles.

## Installation

```bash
npm install -DE @acolorbright/stylelint-config@latest
```

## Usage

To start using this configuration, extend this package in your Stylelint configuration.

```js
{
  "extends": "@acolorbright/stylelint-config",
  "rules": {
    // Add additional rules here
  }
}
```

For more information on configuring Stylelint, check out the [configuration](https://github.com/stylelint/stylelint/blob/main/docs/user-guide/configure.md) guide.

## Property Ordering

Property ordering is performed according to the [SMACSS](http://smacss.com) methodology, with empty lines enforced between property groups.

Refer to [css-property-sort-order-smacss](https://github.com/cahamilton/css-property-sort-order-smacss/blob/master/index.js) for the comprehensive list of property orders.
