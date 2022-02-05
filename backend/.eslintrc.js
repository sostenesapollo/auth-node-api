module.exports = {
  'env': {
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'quotes': ['warn', 'single'],
    'quote-props': ['error', 'always'],
    'indent': ['error', 2],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'never'],
    'computed-property-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'max-len': ['error', { 'code': 100 }]
  }
}
