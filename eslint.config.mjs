import path from "node:path"
import { fileURLToPath } from "node:url"

import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import tailwindcss from "eslint-plugin-tailwindcss"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...tailwindcss.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        config: path.resolve(__dirname, "tailwind.config.ts"),
      },
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".turbo/**",
    "node_modules/**",
    "tailwind.config.ts",
  ]),
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      // === インデント ===
      "indent": ["error", 2],

      // === Console ===
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // === コードスタイル ===
      "object-curly-spacing": ["error", "always"],
      "semi": ["error", "never"],
      "quotes": ["error", "double"],
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
      "padded-blocks": ["error", "never"],
      "no-trailing-spaces": "error",

      // === Import順序 ===
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/no-duplicates": ["error", { "prefer-inline": true }],

      // === React: JSXインデント ===
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],

      // === React: JSXタグのスペース ===
      "react/jsx-tag-spacing": ["error", {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never",
      }],

      // === TypeScript: 型安全性 ===
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/promise-function-async": "warn",

      // === TypeScript: 命名規則 ===
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
        },
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],

      // === コード品質 ===
      "eqeqeq": ["error", "always"],
      "no-return-await": "error",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "prefer-arrow-callback": "error",
      "no-unneeded-ternary": "error",

      // === Tailwind CSS ===
      "tailwindcss/classnames-order": "off",
    },
  },
  // サードパーティUIコンポーネント（Aceternity UI由来）はルールを緩和
  {
    files: [
      "components/ui/Globe.tsx",
      "components/ui/GradientBg.tsx",
      "components/ui/GridGlobe.tsx",
      "components/ui/CanvasRevealEffect.tsx",
      "components/ui/TextGenerateEffect.tsx",
      "components/ui/InfiniteCards.tsx",
      "components/ui/MovingBorders.tsx",
      "components/ui/BentoGrid.tsx",
      "components/ui/GlowCard.tsx",
      "components/ui/ApproachCard.tsx",
    ],
    rules: {
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/promise-function-async": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "no-console": "off",
      "prefer-const": "off",
      "prefer-template": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/refs": "off",
      "react-hooks/immutability": "off",
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-compiler/react-compiler": "off",
    },
  },
])

export default eslintConfig
