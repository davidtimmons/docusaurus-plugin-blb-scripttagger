/// <reference types="@docusaurus/module-type-aliases" />

declare module "@theme-init/BlogPostItem" {
  import type { ComponentProps } from "react";
  type Props = ComponentProps<"div">;
  export default function BlogPostItem(props: Props): JSX.Element;
}

declare module "@theme-init/DocItem" {
  import type { ComponentProps } from "react";
  type Props = ComponentProps<"div">;
  export default function DocItem(props: Props): JSX.Element;
}

declare module "@theme-init/MDXPage" {
  import type { ComponentProps } from "react";
  type Props = ComponentProps<"div">;
  export default function MDXPage(props: Props): JSX.Element;
}

interface Window {
  BLB: {
    Tagger: any;
  };
  Dom: any;
}
