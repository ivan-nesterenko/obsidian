import nx from "@nx/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

import baseConfig from "../../eslint.config.mjs";

export default tseslint.config(
  ...baseConfig,
  ...nx.configs["flat/react"],
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    ignores: ["./src/assets/*"],
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "import/order": [
        "error",
        {
          alphabetize: {
            caseInsensitive: true,
            order: "asc",
          },
          groups: ["builtin", "external", "internal", "parent"],
          "newlines-between": "never",
          pathGroups: [
            {
              group: "external",
              pattern: "react*",
              position: "before",
            },
            {
              group: "external",
              pattern: "@mui/**",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
        },
      ],
      "no-console": "warn",
      "perfectionist/sort-imports": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/display-name": "off",
      "react/jsx-curly-brace-presence": [
        "warn",
        {
          props: "never",
        },
      ],
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".ts", ".tsx"],
        },
      ],
      "react/jsx-key": "error",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "warn",
      "unicorn/prefer-global-this": "off",
    },
  },
);
