const basic = require('./basic')

module.exports = {
  extends: [
    './basic.js',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    ...basic.overrides,
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // 在 js 中允许使用 require
      },
    },
  ],
  rules: {
    // ts
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }], // 在 ts 注释指令中只允许使用 ts-ignore，且必须写描述
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'], // 强制使用 record 定义索引签名
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }], // 强制使用类型导入
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // 强制使用 interface 作为类型定义
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }], // interface 和 type 的成员在多行情况下不用使用任意分隔符
    '@typescript-eslint/no-empty-function': 'off', // 允许内容为空的函数
    '@typescript-eslint/no-empty-interface': 'off', // 允许内容为空的接口
    '@typescript-eslint/no-non-null-assertion': 'off', // 允许非 null 断言(!)
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true }], // 声明变量类型的冒号，对变量没有空格，对类型存在空格。如 const example: number = 1

    // override js
    // TODO add ts rules which extend eslint rules
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }], // 强制要求大括号风格使用 one true brace style
    'camelcase': 'off',
    '@typescript-eslint/camelcase': 'off', // 不强制要求使用驼峰拼写法
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'], // 当最后一个元素或者属性与闭括号 ] 或 } 在不同行时，要求使用拖尾逗号，当在同一行时，禁止使用拖尾逗号
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2], // 2格缩进
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'], // 强制在花括号中使用一致的空格
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }], // 禁止重复声明
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'], // 警告未使用到的变量
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: false }], // 禁止在声明前使用
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'], // 禁止出现无用的构造函数
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'], // 警告未使用到的变量
  },
}
