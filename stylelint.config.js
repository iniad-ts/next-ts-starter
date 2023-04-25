module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'value-keyword-case': null,
    'unit-no-unknown': null,
    'function-no-unknown': null,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': [],
  },
  customSyntax: '@stylelint/postcss-css-in-js',
}
