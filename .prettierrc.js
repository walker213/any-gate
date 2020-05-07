module.exports = {
  // 排版宽度,即每行最大宽度，默认值是80
  printWidth: 100,
  // 制表符宽度，每个层级缩进几个空格，默认值为2
  tabWidth: 2,
  // 是否使用 tab 替代 space 为单位缩进，默认值为false
  useTabs: false,
  // 分号，句尾是否自动补全分号，默认为true
  semi: true,
  // 启用双引号，不启用单引号,默认为true
  singleQuote: true,
  // 在 JSX 文件中使用单引号替代双引号，默认为 false
  jsxSingleQuote: true,
  // 为多行数组的非末尾添加逗号（单行数组不需要逗号），数值：none(不添加逗号)、es5(在ES5中生效的逗号，对象数组等)，all(任何可以添加逗号的地方)
  trailingComma: 'none',
  // 括号空格，在对象字面量和括号之间添加空格，默认为 true
  bracketSpacing: true,
  // 将多行 JSX 元素的 > 放置于最后一行的末尾，而非换行。默认为 false
  jsxBracketSameLine: false,
  // 箭头函数圆括号，默认为 avoid(在可以消除的情况下，消除括号)，always(一直保留括号)
  arrowParens: 'avoid',
};
