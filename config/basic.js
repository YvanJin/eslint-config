module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:jsonc/recommended-with-jsonc',
  ],
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'keywords',
              'license',
              'author',
              'repository',
              'funding',
              'main',
              'module',
              'types',
              'unpkg',
              'jsdelivr',
              'exports',
              'files',
              'bin',
              'sideEffects',
              'scripts',
              'publishConfig',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'husky',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
      },
    },
  ],
  rules: {
    // eslint possible errors
    'no-cond-assign': ['error', 'always'], // 禁止在条件语句中出现赋值操作符
    'no-console': 'off', // 可以使用 console
    'no-constant-condition': ['warn'], // 警告在条件中使用常量表达式

    // eslint best practices
    'block-scoped-var': ['error'],
    'curly': ['error', 'multi-or-nest', 'consistent'], // 遵循当 if、else、else if、for、while、do 代码块中有多条语句，强制使用大括号，且 if、else、esle if 所有代码块在大括号的使用上保持一致
    'no-alert': ['warn'], // 警告 alert、confirm、prompt
    'operator-linebreak': ['error', 'before'], // 强制操作符使用一致的换行符风格，换行符放在操作符前

    // eslint stylistic issues
    'camelcase': 'off', // 不强制要求使用驼峰拼写法
    'comma-dangle': ['error', 'always-multiline'], // 当最后一个元素或者属性与闭括号 ] 或 } 在不同行时，要求使用拖尾逗号，当在同一行时，禁止使用拖尾逗号
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'], // 禁用 with 和 labeled 语法
    'quote-props': ['error', 'consistent-as-needed'], // 如果有字面量属性名要求使用引号，则所有的属性名称都要使用引号，否则，禁止所有的属性名称使用引号
    'quotes': ['error', 'single'], // 尽可能使用单引号
    'semi': ['error', 'never'], // 禁止使用分号

    // eslint variables
    'no-unused-vars': ['warn'], // 警告未使用到的变量

    // eslint es6
    'arrow-parens': ['error', 'always'], // 要求箭头函数的参数必须使用圆括号
    'no-var': ['error'], // 禁止使用 var
    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }], // 要求对象字面量简写语法，且如果对象的键是字符串，则倾向于长格式语法
    'prefer-arrow-callback': ['error'], // 要求使用箭头函数作为回调
    'prefer-rest-params': ['error'], // 要求使用 rest
    'prefer-spread': ['error'], // 要求使用扩展语法
    'prefer-template': ['error'], // 要求使用模板语法代替字符串拼接

    // eslint-plugin-import
    'import/first': ['error'], // 确保所有导入都出现在其他语句之前
    'import/order': ['error'], // 严格导入类型的顺序
    'import/no-absolute-path': ['error'], // 禁止使用绝对路径导入模块
    'import/no-mutable-exports': ['error'], // 禁止使用 var 或者 let 的可变导入
    'import/no-unresolved': ['error'], // 要求导入指向一个可以解析的文件/模块
  },
}
