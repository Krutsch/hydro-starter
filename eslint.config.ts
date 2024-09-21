import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import type { Linter } from "eslint";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...(tseslint.configs.recommended as never),
] satisfies Linter.Config[];
