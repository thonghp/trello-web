import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },

  {
    env: { browser: true, es2020: true, node: true },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
    ],
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "react/prop-types": 0,
      "react/display-name": 0,
      "no-console": 1, // eslint nó sẽ kiểm tra đoạn code nào có console.log() thì báo xoá nó đi
      "no-lonely-if": 1,
      "no-unused-vars": 1, // biến không sử dụng
      "no-trailing-spaces": 1, 
      "no-multi-spaces": 1,
      "no-multiple-empty-lines": 1, // thừa dòng
      "space-before-blocks": ["error", "always"],
      "object-curly-spacing": [1, "always"],
      indent: ["warn", 2],
      semi: [1, "never"],
      quotes: ["error", "single"],
      "array-bracket-spacing": 1,
      "linebreak-style": 0,
      "no-unexpected-multiline": "warn",
      "keyword-spacing": 1,
      "comma-dangle": 1,
      "comma-spacing": 1,
      "arrow-spacing": 1,
    },
  },
];
