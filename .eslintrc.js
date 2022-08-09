module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    'requireConfigFile': false,
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    codeFrame: true,
  },
  plugins: ['eslint-plugin-no-cyrillic-string'],
  rules: {
    'prefer-destructuring': ['error', {
      'array': true,
      'object': true,
    }, {
      'enforceForRenamedProperties': false,
    }],
    'key-spacing': ['error', { 'beforeColon': false }],
    'eqeqeq': ['error', 'always'],
    'no-multi-spaces': 'error',
    'vars-on-top': 'error',
    'no-var': 'error',
    'padded-blocks': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'space-infix-ops': 'error',
    'keyword-spacing': 'error',
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'spaced-comment': ['error', 'always', {
      'line': {
          'markers': ['/'],
          'exceptions': ['-', '+'],
      },
      'block': {
          'markers': ['!'],
          'exceptions': ['*'],
          'balanced': true,
      },
    }],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    'no-whitespace-before-property': 'error',
    // 'function-paren-newline': ["error", { "minItems": 3 }],
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': ['error', 'always'],
    'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'always'],
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'no-cyrillic-string/no-cyrillic-string': 'error',
    'no-console': [
      'warn',
      {
        allow: [
          'warn',
          'error',
        ],
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': true }],
    'no-continue': 'off',
    'no-implicit-coercion': 'error',
    'require-await': 'error',
    'linebreak-style': 'off', // for windows
    'no-nested-ternary': 'off',
    'consistent-return': 'off',
    yoda: 'error',
    semi: ['warn', 'never'],
    indent: 'off', // два пробіли
    'template-curly-spacing': 'off',
    'max-len': ['off'],
    camelcase: 'off',
    'no-shadow': ['error', { builtinGlobals: false, allow: ['state', 'getters'] }],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-prototype-builtins': 'off',
    'no-unused-expressions': ['off'],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],
    curly: 'off',
    'import/order': 'off',
    'unicorn/escape-case': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    // allow async-await
    'generator-star-spacing': 0,
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'space-before-blocks': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'quote-props': ['off'],
    // 'quotes': ['off'],
    'array-bracket-spacing': ['off'],
    'no-useless-catch': ['off'],
    'dot-notation': ['off'],
    'import/no-mutable-exports': 'off', // to fix
    'no-useless-call': 'off', // to fix
    'object-shorthand': 'off', // to fix
    'operator-linebreak': 'off', // to fix
    'no-restricted-syntax': 'off', // to fix
    'radix': 'off', // to fix
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        closeBracket: 0,
        ignores: [],
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/no-v-html': 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: [],
      },
    ],
    'vue/no-v-model-argument': [
      'off',
    ],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['jsx'],
        shouldMatchCase: false,
      },
    ],
    'vue/no-unused-components': ['error', {
      ignoreWhenBindingPresent: true,
    }],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/store/**'],
      rules: {
        'no-param-reassign': 0,
      },
    },
  ],
}
