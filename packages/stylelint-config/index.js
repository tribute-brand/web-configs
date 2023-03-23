const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
	plugins: ['stylelint-order'],
	extends: [
		'stylelint-config-recommended',
	],
	rules: {
		'order/properties-order': [sortOrderSmacss({ emptyLineBefore: 'always' })],
		'at-rule-no-unknown': [true, { ignoreAtRules: ['define-mixin', 'mixin'] }],
		'at-rule-no-vendor-prefix': true,
		'color-hex-length': 'short',
		'color-no-invalid-hex': true,
		'comment-whitespace-inside': 'always',
		'length-zero-no-unit': true,
		'max-nesting-depth': 3,
		'media-feature-name-disallowed-list': ['max-width'],
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-name-value-allowed-list': {
			'min-width': ['/^[0-9]+em$/'],
		},
		'value-no-vendor-prefix': true,
	},
};
