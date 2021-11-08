const loaderUtils = require('loader-utils')
const path = require('path')

const REGEX_ESMODULE = /(export default)/g

module.exports = function (source) {
	const esModule = REGEX_ESMODULE.test(source)
	const [filename] =
		this.resourcePath.match(/([A-Za-z-]+)(?=\.module\.s?css)/) || []
	if (!filename) {
		this.emitWarning(
			new Error('Could not find filename for path: ' + this.resourcePath)
		)
		this.emitWarning(
			new Error(
				'Please make sure you only apply this loader to .module.css or .module.scss files'
			)
		)
		return source
	}
	return `
const transformModule = require(${loaderUtils.stringifyRequest(
		this,
		`!${path.join(__dirname, 'transform.js')}`
	)});
const filename = '${filename}';
// include source without export
${
	esModule
		? source.replace('export default', 'let moduleData =')
		: source.replace('module.exports', 'let moduleData')
}
// transform module and export
if (moduleData.locals) {
  moduleData.locals = {
    ...moduleData.locals,
    ...transformModule(moduleData.locals, filename)
  };
} else {
  moduleData = {
    ...moduleData,
    ...transformModule(moduleData, filename)
  };
};
${esModule ? 'export default moduleData;' : 'module.exports = moduleData;'}
  `
}
