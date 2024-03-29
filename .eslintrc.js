module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error"
  }
};
