yarn add -D prettier eslint-config-prettier
touch .eslintrc

{
  "extends": [
    "eslint:all",
    "preact",
    // Added under other rules
    "prettier",
    "prettier/@typescript-eslint"
  ]
}
