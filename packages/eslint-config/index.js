module.exports = {
	parser: '@babel/eslint-parser',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		es2020: true,
		jest: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		requireConfigFile: false,
	},
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/es6',
		'./rules/extras',
		'./rules/imports',
		'./rules/node',
		'./rules/strict',
		'./rules/style',
		'./rules/variables',
	].map(require.resolve),
};
