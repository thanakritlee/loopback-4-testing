module.exports = {
  extends: '@loopback/eslint-config',
  ignorePatterns: ['.eslintrc.js', 'commitlint.config.js'],
  rules: {
    semi: [2, 'never'],
    'no-useless-catch': 0,
    camelcase: 0,
    '@typescript-eslint/naming-convention': 0,
  },
}
