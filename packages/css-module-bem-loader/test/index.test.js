const getCompiler = require('./helpers/getCompiler')

describe('css-module-bem-loader', () => {
	it('should transform the exported css module object as es module', (done) => {
		const compiler = getCompiler('valid.js', {
			modules: {
				mode: 'pure',
			},
			esModule: true,
		})
		compiler.run((error, stats) => {
			if (error) {
				return console.error(error)
			}
			expect(stats.hasErrors()).toEqual(false)
			done()
		})
	})

	it('should transform the exported css module object as commonjs', (done) => {
		const compiler = getCompiler('valid.js', {
			modules: {
				mode: 'pure',
			},
			esModule: false,
		})
		compiler.run((error, stats) => {
			if (error) {
				return console.error(error)
			}
			expect(stats.hasErrors()).toEqual(false)
			done()
		})
	})

	it('should warn when the css file is not a module', (done) => {
		const compiler = getCompiler('invalid.js', {
			modules: {
				mode: 'pure',
			},
			esModule: false,
		})
		compiler.run((error, stats) => {
			if (error) {
				return console.error(error)
			}
			expect(stats.hasErrors()).toEqual(false)
			expect(stats.hasWarnings()).toEqual(true)
			done()
		})
	})
})
