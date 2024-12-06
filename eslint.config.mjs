import globals from "globals";
import babelParser from "babel-eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/dist", "**/coverage", "**/docs"],
}, ...compat.extends("airbnb-base"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
        },

        parser: babelParser,
    },

    rules: {
        "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
    },
}];