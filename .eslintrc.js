module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  plugins: ['prettier'],
};
