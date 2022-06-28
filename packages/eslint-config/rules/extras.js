module.exports = {
	plugins: ['extra-rules', '@mizdra/layout-shift'],
	rules: {
		// Forbid commented out code
		'extra-rules/no-commented-out-code': 'error',
		// Forbid img element without explicit size attributes
		'@mizdra/layout-shift/require-size-attributes': 'error',
	},
};
