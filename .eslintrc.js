module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    'plugin:security/recommended'
  ],
  plugins: [
    'vue',
    'security'
  ],
  rules: {
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'arrow-parens': ['error', 'always'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case']
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
