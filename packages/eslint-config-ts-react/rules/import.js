// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

const src = 'src'

const folders = fs.existsSync(src)
	? fs
			.readdirSync(src, { withFileTypes: true })
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name)
	: []

module.exports = {
	plugins: ['simple-import-sort'],
	rules: {
		'import/no-unresolved': 0,
		'import/extensions': [
			'error',
			'never',
			{
				svg: 'always',
				png: 'always',
				jpg: 'always',
				json: 'always',
				css: 'always',
				scss: 'always',
			},
		],
		'import/first': 2,
		'import/newline-after-import': 2,
		'import/no-duplicates': 2,
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: ['**/*.test.ts', '**/*.test.tsx'] },
		],
		'import/order': 0,
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// Side effects
					['^\\u0000'],
					// Packages:
					// 1. `react`-related packages
					// 2. `next`-related packages
					// 3. Third-party packages starting with `@` followed by a word character
					// 4. Third-party packages starting with a word character
					[
						'^react',
						'^@react',
						'next',
						`^(@(?!(${folders.join('|')})))\\w+(/.*|$)`,
						'^\\w',
					],
					// Components
					[`^@components(/.*|$)`],
					// Other absolute `@` imports
					[`^@(${folders.filter((f) => f !== 'components').join('|')})(/.*|$)`],
					// Relative imports using `src`
					['^.*/src/.*'],
					// Anything not matched in another group.
					['^'],
					// Other relative imports
					['^\\.'],
				],
			},
		],
		'simple-import-sort/exports': 'error',
		'sort/imports': 0,
	},
}
