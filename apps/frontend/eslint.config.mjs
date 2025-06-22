import nx from "@nx/eslint-plugin";
import baseConfig from "../../eslint.config.mjs";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...baseConfig,
  ...nx.configs["flat/react"],
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "no-console": "warn",
      "react/display-name": "off",
      "react/jsx-curly-brace-presence": [
        "warn",
        {
          props: "never",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/self-closing-comp": "warn",
      "react/jsx-key": "error",
      "react/jsx-uses-react": "off",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent"],
          pathGroups: [
            {
              pattern: "react*",
              group: "external",
              position: "before",
            },
            {
              pattern: "@mui/**",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-becvaeen": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".ts", ".tsx"],
        },
      ],
    },
  },
);
