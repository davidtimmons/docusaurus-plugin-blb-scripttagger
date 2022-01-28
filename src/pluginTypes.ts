export type TOptionsSchema = {
  Translation: string;
  HyperLinks: "all" | "hover" | "none";
  HideTranslationAbbrev: boolean;
  TargetNewWindow: boolean;
  Style: "line" | "par";
  NoSearchTagNames: string | string[];
  NoSearchClassNames: string | string[];
};

// Docusaurus adds an "id" key to the options object.
export type TOptions = { id?: string } & Partial<TOptionsSchema>;
