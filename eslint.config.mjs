// @ts-check
import eslint from "@eslint/js";
import nxPlugin from "@nx/eslint-plugin";
import nx from "@nx/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jestPlugin from "eslint-plugin-jest";
import namingConventionPlugin from "eslint-plugin-naming-convention";
import perfectionist from "eslint-plugin-perfectionist";
import prettierConfigsRecommended from "eslint-plugin-prettier/recommended";
import unicornPlugin from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  ...tseslint.configs.recommended,
  eslint.configs.recommended,
  unicornPlugin.configs["flat/recommended"],
  prettierConfigsRecommended,
  perfectionist.configs["recommended-natural"],
  {
    ignores: ["**/node_modules", "**/dist", "**/dev-dist", "**/build", "**/.history"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@nx": nxPlugin,
      "naming-convention": namingConventionPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          allow: [String.raw`^.*/eslint(\.base)?\.config\.[cm]?js$`],
          depConstraints: [
            {
              onlyDependOnLibsWithTags: ["*"],
              sourceTag: "*",
            },
          ],
          enforceBuildableLibDependency: true,
        },
      ],
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          format: ["camelCase"],
          selector: ["objectLiteralProperty"],
        },
        {
          format: ["UPPER_CASE"],
          selector: ["enumMember"],
        },
        {
          format: ["PascalCase"],
          selector: ["enum", "typeLike", "interface"],
        },
        {
          format: ["PascalCase", "camelCase"],
          selector: "variableLike",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-expressions": [
        "warn",
        {
          allowShortCircuit: false,
          allowTaggedTemplates: false,
          allowTernary: false,
          enforceForJSX: false,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "none",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          classes: true,
          functions: true,
          variables: true,
        },
      ],
      "arrow-body-style": ["error", "as-needed"],
      "import/named": "off",
      "new-cap": [
        "error",
        {
          capIsNew: false,
          newIsCap: true,
        },
      ],
      "no-cond-assign": ["error", "always"],
      "no-duplicate-imports": "error",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "no-use-before-define": "off",
      "no-useless-escape": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          order: "asc",
          type: "natural",
        },
      ],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "sort-imports": [
        "error",
        {
          allowSeparatedGroups: true,
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],
      "unicorn/better-regex": "warn",
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
        },
      ],
      "unicorn/no-abusive-eslint-disable": "off",
      "unicorn/no-static-only-class": "warn",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.spec.js", "**/*.spec.ts", "**/*.test.js", "**/*.test.ts"],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules, // Jest-specific rules for test files
    },
  },
);
