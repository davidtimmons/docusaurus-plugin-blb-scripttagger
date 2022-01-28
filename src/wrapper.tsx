import React, { useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import type { ComponentProps, FunctionComponent } from "react";

export const withPluginBlbScriptTagger = (
  WrappedComponent: FunctionComponent
): React.ReactNode => {
  const WithPluginBlbScriptTagger = (props: ComponentProps<"div">) => {
    useEffect(walkDomTree);
    return <WrappedComponent {...props} />;
  };

  WithPluginBlbScriptTagger.displayName = `WithPluginBlbScriptTagger(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithPluginBlbScriptTagger;
};

function walkDomTree() {
  const canUseDom =
    ExecutionEnvironment.canUseDOM && window?.Dom && window?.document?.body;
  const blbIsLoaded = canUseDom && window?.BLB?.Tagger?.rqt;

  if (blbIsLoaded) {
    window?.BLB?.Tagger?.walkDomTree(document.body);
  }
}
