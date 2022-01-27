import { Joi } from "@docusaurus/utils-validation";
import type { TOptions, TOptionsSchema } from "./index.types";

const VALID_TRANSLATIONS = [
  "KJV",
  "NKJV",
  "NLT",
  "NIV",
  "ESV",
  "CSB",
  "NASB95",
  "NASB20",
  "NET",
  "RSV",
  "ASV",
  "YLT",
  "DBY",
  "WEB",
  "HNV",
  "RVR60",
  "VUL",
  "WLC",
  "LXX",
  "mGNT",
  "TR",
];

const pluginOptionsSchema = Joi.object<TOptionsSchema>({
  Translation: Joi.string().valid(...VALID_TRANSLATIONS),
  HyperLinks: Joi.string().valid("all", "hover", "none"),
  HideTranslationAbbrev: Joi.boolean(),
  TargetNewWindow: Joi.boolean(),
  Style: Joi.string().valid("line", "par"),
  NoSearchTagNames: [Joi.string(), Joi.array().items(Joi.string())],
  NoSearchClassNames: [Joi.string(), Joi.array().items(Joi.string())],
});

function formatConfigOptions(options: TOptions): string {
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

export { formatConfigOptions, pluginOptionsSchema };
