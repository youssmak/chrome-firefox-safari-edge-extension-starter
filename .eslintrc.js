module.exports = {
  env: {
    browser: true,
    es6: true,
    webextensions: true,
  },
  globals: {
    webkit: 'readonly',
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
