# stylelint-config-acb

Stylelint config providing ACB's standard linting setup for styles.

## Installation

```bash
npm install --save-dev 'acolorbright/stylelint-config-acb#v1.0.2' stylelint@13.x
```

## Usage

To start using this configuration, simply extend this package in your Stylelint configuration.

```js
{
  "extends": "stylelint-config-acb",
  "rules": {
    // Add additional rules here
  }
}
```

For more information on configuring Stylelint, check out the [configuration](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md) guide.

## Property Ordering

Property ordering is performed according to the [SMACSS](http://smacss.com) methodology.

Refer to [here](https://github.com/cahamilton/css-property-sort-order-smacss/blob/master/index.js) for the comprehensive list of property orders.
