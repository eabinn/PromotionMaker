module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
    'vue/setup-compiler-macros': true,
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['@typescript-eslint', 'jest'],

  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.vue'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/multi-word-component-names': 'off',
      },
    },
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        'jest/globals': true,
      },
    },
  ],
}
