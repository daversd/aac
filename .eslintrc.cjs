module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'unused-imports'],
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      '@typescript-eslint/indent': ['error', 2],
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-use-before-define': 0,
      'no-lone-blocks': 0,
      'no-unused-vars': 0,
      'no-use-before-define': 0,
      'object-shorthand': 2,
      'promise/param-names': 0,
      'import/no-absolute-path': 0,
      'react/no-unescaped-entities': 0,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/no-children-prop': 0,
      'react/no-unknown-property': 0,
      'semi': [2, 'always'],
          "unused-imports/no-unused-imports": 2,
    }
  };