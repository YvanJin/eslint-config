module.exports = {
  extends: [
    'plugin:react/recommended',
    './typescript.js',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
}
