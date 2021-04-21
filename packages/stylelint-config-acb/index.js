module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-property-sort-order-acb',
  ],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['define-mixin', 'mixin'] }],
    'at-rule-no-vendor-prefix': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'length-zero-no-unit': true,
    'max-nesting-depth': 3,
    'media-feature-name-disallowed-list': ['max-width'],
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-value-allowed-list': {
      'min-width': ['/^[0-9]+em$/'],
    },
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'unit-case': 'lower',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never-single-line',
    'value-no-vendor-prefix': true,
  },
};
