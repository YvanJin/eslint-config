module.exports = {
  extends: [
    'plugin:react/recommended',
    '@yvanjin/eslint-config-typescript',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
}
