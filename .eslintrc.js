module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // 'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ["warn", 4],
    'vue/html-closing-bracket-newline': 'off',
    "vue/html-indent": ["warn", 4],
    "vue/html-self-closing": 'off',
    "vue/max-attributes-per-line": 'off'
  }
}
