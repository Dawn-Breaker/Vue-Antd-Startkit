module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  plugins: [
    "html"
  ],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/vue.config.js'
      }
    }
  },
  rules: {
    "semi": ["error", "never"],
    "no-param-reassign": 0,
    "no-shadow": 0,
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    'import/prefer-default-export': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
}
