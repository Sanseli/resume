module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'require-jsdoc': 0,
    'vue/max-attributes-per-line': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-tabs': 'off',
    'max-len': 'off',
  },
};
