import { Joi } from "@docusaurus/utils-validation";
import type {
  OptionValidationContext,
  ValidationResult,
} from "@docusaurus/types";
import type { TOptionsSchema } from "./pluginTypes";

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

const Schema = Joi.object<TOptionsSchema>({
  Translation: Joi.string().valid(...VALID_TRANSLATIONS),
  HyperLinks: Joi.string().valid("all", "hover", "none"),
  HideTranslationAbbrev: Joi.boolean(),
  TargetNewWindow: Joi.boolean(),
  Style: Joi.string().valid("line", "par"),
  NoSearchTagNames: [Joi.string(), Joi.array().items(Joi.string())],
  NoSearchClassNames: [Joi.string(), Joi.array().items(Joi.string())],
});

function validateOptions({
  validate,
  options,
}: OptionValidationContext<TOptionsSchema>): ValidationResult<TOptionsSchema> {
  return validate(Schema, options);
}

export { validateOptions };
