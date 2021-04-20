module.exports = {
  plugins: ['react'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'react/destructuring-assignment': 1,
    'react/forbid-prop-types': 2,
    'react/no-danger': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-fragments': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': 'error',
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 0,
  },
}
