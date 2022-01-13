module.exports = {
    plugins: ['prettier', 'import'],
    extends: [
      'airbnb-typescript',
      'prettier',
    ],
    rules: {
      'import/no-namespace': 'error',
      'import/no-relative-parent-imports': 'error',
      'import/no-anonymous-default-export': [
        'error',
        {
          allowArray: true,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowLiteral: true,
          allowObject: true,
        },
      ],
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': 'off',
      'import/no-relative-parent-imports': 'off',
    },
    parserOptions: {
      project: './tsconfig.json',
    },
  };