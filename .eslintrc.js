module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base'
  ],
  parserOptions: {
    project: './tsconfig.jest.json',
  },
  rules: {
    "@typescript-eslint/no-require-imports": "error",
  }
};
