import React from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import type { ComponentPropsWithoutRef, FunctionComponent } from "react";

export function withPluginBlbScriptTagger(
  WrappedComponent: FunctionComponent
): React.ReactNode {
  class WithPluginBlbScriptTagger extends React.Component {
    static displayName = `(WithPluginBlbScriptTagger${
      WrappedComponent.displayName || WrappedComponent.name || "Component"
    })`;

    constructor(props: ComponentPropsWithoutRef<"div">) {
      super(props);
    }

    componentDidMount() {
      const canUseDom =
        ExecutionEnvironment.canUseDOM && window?.Dom && window?.document?.body;
      const blbIsLoaded = canUseDom && window?.BLB?.Tagger?.rqt;

      if (blbIsLoaded) {
        window?.BLB?.Tagger?.walkDomTree(document.body);
      }
    }

    render(): JSX.Element {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithPluginBlbScriptTagger;
}
