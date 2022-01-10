import { shared, SharedType } from "my-package-webpack";
import { serverOnly, ServerOnlyType } from "my-package-webpack/server";

import type { ClientOnlyType } from "my-package-webpack/client";
import dynamic from "next/dynamic";
// @ts-ignore
const dynamicClientOnly = dynamic(() =>
  import("my-package-webpack/client").then((mod) => mod.clientOnly)
);
export default function WithWebpackPage(props: { serverOnly: ServerOnlyType }) {
  return (
    <div>
      Server-only: {props.serverOnly}
      Client-only: {dynamicClientOnly}
      Shared:{shared}
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      serverOnly,
    },
  };
}
