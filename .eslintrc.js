module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  plugins: ['import'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.js']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: ['tsconfig.json', 'tsconfig.*.json']
      }
    }
  },
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0
  },
  ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/build/**']
}
