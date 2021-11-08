const transform = require('../lib/transform')

describe('transform()', () => {
	const testClassName = 'test-sadas__asdas-32c'
	const cssModule = {
		test: testClassName,
		test__element: testClassName,
		'test--modifier': testClassName,
	}

	it('should decorate a css module object with block, element and modifier selectors', () => {
		const result = {
			block: testClassName,
			element: {
				element: testClassName,
			},
			modifier: {
				modifier: testClassName,
			},
		}
		expect(transform(cssModule, 'test')).toEqual(result)
	})

	it('should warn if the css filename does not match the block classname', () => {
		const result = {
			block: '',
			element: {
				element: testClassName,
			},
			modifier: {
				modifier: testClassName,
			},
		}
		console.warn = jest.fn()
		expect(transform(cssModule, 'module')).toEqual(result)
		expect(console.warn.mock.calls.length).toEqual(2)
		console.warn.mockReset()
	})

	it('should warn if the css filename is not provided', () => {
		const result = {
			block: '',
			element: {
				element: testClassName,
			},
			modifier: {
				modifier: testClassName,
			},
		}
		console.warn = jest.fn()
		expect(transform(cssModule)).toEqual(result)
		expect(console.warn.mock.calls.length).toEqual(2)
		console.warn.mockReset()
	})

	it('should throw an error if the css module is not provided', () => {
		expect(() => transform(undefined, 'module')).toThrow()
	})
})
