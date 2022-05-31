module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:typescript-sort-keys/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'typescript-sort-keys', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    // import plugins
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
