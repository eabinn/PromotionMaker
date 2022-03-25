module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-prettier/recommended"
  ],

  plugins: [
    "stylelint-order",
    "stylelint-prettier"
  ],

  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ],

  rules: {
    "prettier/prettier": true,
    'scss/dollar-variable-empty-line-before': null
  }
}
