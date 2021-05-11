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
  globals: {
    React: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  extends: [
    '@acolorbright/eslint-config',
    './rules/control-statements',
    './rules/react',
    './rules/react-a11y',
    './rules/react-hooks',
    './rules/style',
  ].map(require.resolve),
};
