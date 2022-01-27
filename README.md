# docusaurus-plugin-blb-scripttagger

A [Docusaurus](https://docusaurus.io/) v2 plugin that integrates the BLB ScriptTagger tool into all docs, pages, and blog posts. From the [BLB (Blue Letter Bible) website](https://www.blueletterbible.org/webtools/BLB_ScriptTagger.cfm):

> "BLB ScriptTagger" is a free tool that integrates into your website or blog to automatically create a hover display for all Bible references. The hover reveals the verse text and provides a link for further study at the Blue Letter Bible website.

## Installation

`npm install --save docusaurus-plugin-blb-scripttagger`

## Configuration

1. Add the plugin to the `docusaurus.config.js` file [as indicated on the Docusaurus website](https://docusaurus.io/docs/using-plugins#configuring-plugins).

2. Provide any desired plugin options [as described on the Blue Letter Bible website](https://www.blueletterbible.org/webtools/BLB_ScriptTagger.cfm#install).

Example:

```javascript
module.exports = {
  // ...
  plugins: [
    [
      "docusaurus-plugin-blb-scripttagger",
      {
        // Include desired options here:
        Translation: 'NASB20',
        HideTranslationAbbrev: true,
        NoSearchClassNames: 'example01 example02 example03',
      },
    ],
  ],
}
```

## Options

All option keys provided to this plugin are case sensitive. They must follow the examples found on the [BLB ScriptTagger website](https://www.blueletterbible.org/webtools/BLB_ScriptTagger.cfm#install). The following options are available:

- `Translation`
  - Many different translation options are available [as seen here](https://www.blueletterbible.org/versions.cfm#copyright).
- `HyperLinks`
- `HideTranslationAbbrev`
- `TargetNewWindow`
- `Style`
- `NoSearchTagNames`
- `NoSearchClassNames`

## Contributing

Did you spot something in this plugin that behaves differently than in the BLB ScriptTagger tool? Feel free to open an [issue](https://github.com/davidtimmons/docusaurus-plugin-blb-scripttagger/issues).

## License

This Docusaurus plugin is [MIT licensed](./LICENSE).
