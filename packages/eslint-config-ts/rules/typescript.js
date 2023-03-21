module.exports = {
	plugins: ['@typescript-eslint'],
	extends: ['plugin:@typescript-eslint/recommended'],
	rules: {
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-use-before-define': 'error',
		'no-shadow': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
	},
};
