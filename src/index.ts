import Path from "path";
import type { LoadContext, Plugin } from "@docusaurus/types";
import type { TOptions } from "./pluginTypes";

function pluginBlbScriptTagger(_: LoadContext, options: TOptions): Plugin {
  return {
    name: "docusaurus-plugin-blb-scripttagger",

    getThemePath() {
      return Path.resolve(__dirname, "./theme");
    },

    getTypeScriptThemePath() {
      return Path.resolve(__dirname, "../src/theme");
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
            innerHTML: formatRawConfigOptions(options),
          },
        ],
      };
    },
  };
}

function formatRawConfigOptions(options: TOptions): string {
  const tagger = "window.BLB.Tagger";
  const entries = Object.entries(options);
  const configOptions = entries.map(([key, value]) => {
    if (key === "id") {
      return "";
    } else if (typeof value === "boolean") {
      return `${tagger}.${key} = ${value}`;
    } else if (typeof value === "string") {
      return `${tagger}.${key} = '${value}'`;
    } else if (Array.isArray(value)) {
      return `${tagger}.${key} = '${value.join(", ")}'`;
    } else {
      return "";
    }
  });

  return `if (window && window.BLB && window.BLB.Tagger) {
    ${configOptions.filter((x) => x.length > 0).join("; ")};
  }`;
}

export { validateOptions } from "./validatePluginConfig";
export default pluginBlbScriptTagger;
