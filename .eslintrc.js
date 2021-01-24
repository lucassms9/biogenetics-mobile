module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['react', 'prettier', 'import'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '@',
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'react/style-prop-object': 'off',
    'no-useless-constructor': 'off',
    'no-console': ['error', { allow: ['tron'] }],
  },
};
