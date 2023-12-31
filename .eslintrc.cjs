module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off', 
    'react/react-in-jsx-scope': 'off', 
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'off',
    quotes: ['warn', 'single'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-unreachable': 'error',
    camelcase: ['error', { properties: 'never' }],
    eqeqeq: 'error',
    'no-console': 'warn',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-unused-expressions': 'error',
    'no-var': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'prefer-const': 'warn',
    semi: 'error',
    'comma-spacing': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
