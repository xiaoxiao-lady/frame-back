// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 9,
    parser: "babel-eslint"
  },
  env: {
    browser: true,
    node: true
  },
  extends: ["plugin:vue/recommended"],
  plugins: ["vue"],
  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js"
      }
    }
  },
  // add your custom rules here 0表示关闭规则
  rules: {
    "vue/html-closing-bracket-spacing": 0,
    "vue/no-v-html": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-self-closing": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/html-indent": 0,
    "vue/max-attributes-per-line": 0,
    "global-require": 0,
    "import/first": 0,
    "no-console": 0,
    "no-param-reassign": 0,
    "no-multi-assign": 0,
    "consistent-return": 0,
    "no-mixed-operators": 0,
    "max-len": 0,
    "no-bitwise": 0,
    "prefer-arrow-callback": 0,
    // don't require .vue extension when importing
    //'import/extensions': ['error', 'always', {
    //  'js': 'never',
    //'vue': 'never'
    //}],
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "no-plusplus": 0, // 允许使用一元运算符
    "no-await-in-loop": 0, // 循环内允许使用await
    "guard-for-in": 0, // 允许使用for-in
    "no-restricted-syntax": 0,
    "no-extra-boolean-cast": 0,
    "object-shorthand": 0,
    "no-loop-func": 0,
    "arrow-parens": 0,
    "no-continue": 0,
    "no-useless-escape": 0,
    // allow debugger during development
    "no-debugger": 0,
    "linebreak-style": [0, "error", "windows"],
    "no-alert": 0,
    semi: 0,
    // 这个是此项目屏蔽调的规则，这个别的项目搬用的时候需要删除
    "vue/order-in-components": 0,
    "vue/attributes-order": 0,
    "vue/require-default-prop": 0,
    "vue/multiline-html-element-content-newline": 0,
    "vue/no-dupe-keys": 0,
    "vue/require-prop-type-constructor": 0,
    "vue/attribute-hyphenation": 0,
    "vue/return-in-computed-property": 0,
    "vue/mustache-interpolation-spacing": 0,
    "vue/require-prop-types": 0,
    "vue/html-quotes": 0
  }
};
