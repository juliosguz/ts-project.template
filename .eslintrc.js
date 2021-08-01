/**
* 0 = disable,
* 1: warning,
* 2: error
*/
module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint/eslint-plugin"
  ],
  "rules": {
    "semi": [ 2, "always" ],
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/prefer-for-of": 1,
    "curly": 2,
    "no-bitwise": 1,
    "no-cond-assign": 2,
    "no-debugger": 2,
    "no-empty": 2,
    "guard-for-in": 1,
    "no-useless-concat": 1,
    "no-invalid-this": 1,
    "no-new": 1,
    "no-return-await": 1,
    "no-shadow": 1,
    "no-sparse-arrays": 1,
    "no-throw-literal": 1,
    "consistent-this": 1,
    "no-useless-computed-key": 1,
    "no-unsafe-finally": 1,
    "no-unused-expressions": 1,
    "no-unused-vars": 2,
    "no-use-before-define": 2,
    "prefer-object-spread": 1,
    "radix": 1,
    "eqeqeq": 1,
    "valid-typeof": 1,
    "no-useless-constructor": 1,
    "use-isnan": 2,
    "max-classes-per-file": [1, 1],
    "no-duplicate-imports": 1,
    "no-void": 1,
    "prefer-const": 1,
    "no-extra-boolean-cast": 1,
    "no-dupe-else-if": 1,
    "eol-last": 1,
    "max-len": [1, 120],
    "no-irregular-whitespace": 1,
    "no-const-assign": 2,
    "no-var": 2,
    "no-extra-parens": 1,
    "no-extra-semi": 1,
    "no-func-assign": 1,
    "block-scoped-var": 1,
    "default-case": 2,
    "default-case-last": 1,
    "no-alert": 1,
    "no-empty-function": 1,
    "no-eq-null": 1,
    "no-self-compare": 1,
    "require-await": 1
  }
};
