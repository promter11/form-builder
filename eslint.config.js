import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";
import vuePlugin from "eslint-plugin-vue";

export default defineConfigWithVueTs([
  vuePlugin.configs["flat/recommended"],
  vueTsConfigs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      curly: "error",
      "import/no-cycle": "error",
      "import/no-duplicates": [
        "error",
        {
          considerQueryString: true,
        },
      ],
      "import/no-unresolved": "error",
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
        },
      ],
      "import/prefer-default-export": "off",
      "vue/attributes-order": [
        "error",
        {
          order: [
            "DEFINITION",
            "CONDITIONALS",
            "LIST_RENDERING",
            "RENDER_MODIFIERS",
            "GLOBAL",
            ["UNIQUE", "SLOT"],
            "TWO_WAY_BINDING",
            "OTHER_DIRECTIVES",
            "OTHER_ATTR",
            "EVENTS",
            "CONTENT",
          ],
          alphabetical: true,
        },
      ],
      "vue/block-lang": [
        "error",
        {
          script: { lang: "ts" },
        },
      ],
      "vue/block-order": [
        "error",
        {
          order: ["script", "template", "style"],
        },
      ],
      "vue/component-api-style": ["error", ["script-setup", "composition"]],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "always",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
      "vue/padding-line-between-blocks": ["error", "always"],
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
  eslintConfigPrettier,
]);
