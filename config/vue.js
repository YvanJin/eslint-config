module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    './typescript.js',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
      rules: {
        // 'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': 'off', // 未使用到的变量不报错
      },
    },
  ],
  rules: {
    'vue/max-attributes-per-line': 'off', // 不限制每行的最大属性数量
    'vue/multi-word-component-names': 'off', // 不要求组件名为复数词
  },
}
