module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // '@vue/typescript/recommended',
    '@vue/prettier',
    // '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': import.meta.env === 'production' ? 'warn' : 'off',
    'no-debugger': import.meta.env === 'production' ? 'warn' : 'off'
  }
}