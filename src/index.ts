import Path from "path";
import { formatConfigOptions, pluginOptionsSchema } from "./config";
import type {
  LoadContext,
  OptionValidationContext,
  Plugin,
  ValidationResult,
} from "@docusaurus/types";
import type { TOptions, TOptionsSchema } from "./index.types";

function pluginBlbScriptTagger(_: LoadContext, options: TOptions): Plugin {
  return {
    name: "docusaurus-plugin-blb-scripttagger",

    getThemePath() {
      return Path.resolve(__dirname, "./theme");
    },

    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            // The BLB script does not work well when deferred.
            tagName: "script",
            attributes: {
              src: "https://www.blueletterbible.org/assets/scripts/blbToolTip/BLB_ScriptTagger-min.js",
              type: "text/javascript",
            },
          },
          {
            tagName: "script",
            attributes: {
              type: "text/javascript",
            },
            innerHTML: formatConfigOptions(options),
          },
        ],
      };
    },
  };
}

function validateOptions({
  validate,
  options,
}: OptionValidationContext<TOptionsSchema>): ValidationResult<TOptionsSchema> {
  return validate(pluginOptionsSchema, options);
}

export { validateOptions };
export default pluginBlbScriptTagger;
