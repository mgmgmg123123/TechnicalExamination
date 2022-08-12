module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    parser:
        '@typescript-eslint/parser',
    parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
        ecmaVersion: 2020
    },
    "extends": ["eslint:recommended"],
    rules: {},
    "plugins": ["@typescript-eslint"],
}
